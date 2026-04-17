import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

export function activate(context: vscode.ExtensionContext) {

    const command = vscode.commands.registerCommand(
        'oneClickWebp.convertImages',
        async (uri: vscode.Uri) => {

            const folderPath = uri?.fsPath ||
                vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;

            if (!folderPath) {
                vscode.window.showErrorMessage("No folder selected");
                return;
            }

            const qualityInput = await vscode.window.showInputBox({
                prompt: "Enter WebP quality (1-100)",
                value: "80"
            });

            const quality = parseInt(qualityInput || "80");

            const outputChoice = await vscode.window.showQuickPick(
                ["Same folder", "webp subfolder"],
                { placeHolder: "Select output location" }
            );

            const useSubfolder = outputChoice === "webp subfolder";

            const getAllImages = (dir: string): string[] => {
                let results: string[] = [];
                const list = fs.readdirSync(dir);

                list.forEach(file => {
                    const filePath = path.join(dir, file);
                    const stat = fs.statSync(filePath);

                    if (stat && stat.isDirectory()) {
                        results = results.concat(getAllImages(filePath));
                    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
                        results.push(filePath);
                    }
                });

                return results;
            };

            const images = getAllImages(folderPath);

            if (images.length === 0) {
                vscode.window.showInformationMessage("No images found");
                return;
            }

            await vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: "Converting images to WebP...",
                cancellable: false
            }, async (progress) => {

                let count = 0;

                for (const img of images) {
                    const dir = path.dirname(img);

                    const outputDir = useSubfolder
                        ? path.join(dir, "webp")
                        : dir;

                    if (useSubfolder && !fs.existsSync(outputDir)) {
                        fs.mkdirSync(outputDir);
                    }

                    const outputPath = path.join(
                        outputDir,
                        path.basename(img).replace(/\.(png|jpg|jpeg)$/i, ".webp")
                    );

                    await sharp(img)
                        .webp({ quality })
                        .toFile(outputPath);

                    count++;
                    progress.report({
                        increment: (100 / images.length),
                        message: `${count}/${images.length}`
                    });
                }
            });

            vscode.window.showInformationMessage("✅ Conversion complete!");
        }
    );

    context.subscriptions.push(command);
}

export function deactivate() {}