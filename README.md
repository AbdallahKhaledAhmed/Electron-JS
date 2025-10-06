# Screen Capture App

A desktop application built with Electron.js that allows users to capture screenshots of their screen with ease. This project serves as a practical learning experience for Electron.js development.

## Features

- Capture full screen or selected area
- Simple and intuitive user interface
- Cross-platform support (Windows, macOS, Linux)
- Quick keyboard shortcuts for efficient capturing
- Built with modern web technologies (HTML, CSS, JavaScript)

## Screenshots

*Screenshots will be added here*

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AbdallahKhaledAhmed/Electron-JS.git
   cd Electron-JS
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

To run the application in development mode:

```bash
# Start the application with hot-reload
npm run hot
```

## Building the Application

To create a production build:

```bash
# Build the application
npm run build
```

The built application will be available in the `dist` directory.

## Usage

1. Launch the application
2. Click the capture button or use the keyboard shortcut
3. Select the area you want to capture
4. The screenshot will be automatically saved to your default downloads folder

## Keyboard Shortcuts

- `Shift + F10`: Capture screen

## Project Structure

```
screen-capture/
├── assets/          # Static assets (images, icons)
├── dist/            # Production builds
├── node_modules/    # Dependencies
├── renderer/        # Frontend code
├── main.js          # Main process
├── preload.js       # Preload script
├── package.json     # Project configuration
└── README.md        # This file
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Electron.js](https://www.electronjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Font Awesome](https://fontawesome.com/)
