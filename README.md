# 🚀 One Click WebP Converter

Convert all your project images to **WebP format instantly** with a single command inside VS Code.

---

## ✨ Features

* ⚡ One-click conversion (Command Palette or right-click)
* 📁 Recursive folder scan (includes subfolders)
* 🎯 Supports `.png`, `.jpg`, `.jpeg`
* 🧠 Adjustable quality (1–100)
* 📂 Option to save in same folder or `/webp` subfolder
* 🔔 Progress notification during conversion

---

## 📸 Why WebP?

WebP images are:

* Smaller in size 📉
* Faster to load ⚡
* Great for web performance 🌐

---

## 🛠️ Usage

### Method 1: Command Palette

1. Open your project in Visual Studio Code
2. Press `Ctrl + Shift + P`
3. Search: **Convert Images to WebP**

---

### Method 2: Right-click Folder

1. Right-click any folder in Explorer
2. Click **Convert Images to WebP**

---

## ⚙️ Options

When you run the command:

* Enter **quality (1–100)**
* Choose output:

  * Same folder
  * `webp` subfolder

---

## 📦 Supported Formats

* `.png`
* `.jpg`
* `.jpeg`

---

## 📁 Output

Example:
image.png  →  image.webp
folder/image.jpg → folder/webp/image.webp

---

## 🚀 Installation

### From VSIX

```bash
code --install-extension one-click-webp-1.0.0.vsix
```

---

## 🧑‍💻 Development

```bash
npm install
npm run compile
vsce package
```

---

## 📌 Requirements

* Node.js
* Visual Studio Code

---

## 🧠 How It Works

This extension uses the powerful `sharp` library to:

* Read images
* Convert to WebP
* Optimize quality

---

## 🤝 Contributing

Pull requests are welcome!
Feel free to suggest features or improvements.

---

## 📄 License

MIT License © 2026 ABHIN C

---

## ⭐ Support

If you like this extension:

* ⭐ Star the repo
* 📢 Share it with others

---

## 🔥 Future Improvements

* Auto-convert on save
* Drag & drop support
* Compression comparison stats

---
