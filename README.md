# Todo Team App

A React Native To-Do application built with Expo, deployed to the web via GitHub Pages.

## 🚀 Live Demo

**[https://MaMohm.github.io/To_Do_List/](https://MaMohm.github.io/To_Do_List/)**

## 🛠 Features

*   Add, edit, and delete tasks.
*   Filter tasks (All, Active, Done).
*   Clean and responsive UI.
*   Web support via React Native Web.

## 📦 Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/MaMohm/To_Do_List.git
    cd To_Do_List
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## 🏃‍♂️ Running Locally

To start the development server:

```bash
npm start
```

*   Press **w** to open in the browser.
*   Press **a** for Android (requires emulator or device).
*   Press **i** for iOS (requires simulator or device).

## 🚀 Deployment

This project is configured for automated deployment to GitHub Pages.

To deploy a new version:

```bash
npm run deploy
```

### How it Works
1.  **Build**: `npm run predeploy` runs `expo export --platform web` to create a `dist` folder.
2.  **Config**: It automatically creates a `.nojekyll` file (to support `_expo` folders) and uses the `baseUrl` from `app.json`.
3.  **Push**: `gh-pages` pushes the `dist` folder to the `gh-pages` branch.
