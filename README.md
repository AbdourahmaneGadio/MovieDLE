# MyApp 📱

A cross-platform mobile application built with **React Native** and **Expo**, featuring automated **CI/CD** pipelines using **GitHub Actions** for streamlined development, testing, and deployment.

---

## 🚀 Features

- **React Native + Expo** for universal mobile development.
- **CI/CD with GitHub Actions**:
  - Auto linting, testing, and building on every push or pull request.
  - Automatic builds using **Expo Application Services (EAS)**.
  - Secure secrets management for tokens and environment variables.
  - Custom build profiles via `eas.json` for staging/production.

## 📂 Project Structure

- `app/`: App source code
- `.github/workflows/`: GitHub Actions CI/CD workflows
- `eas.json`: Expo EAS build configuration
- `app.json`: App metadata for Expo

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- Yarn or npm
- Expo CLI:
```npm install -g expo-cli```

### Installation

git clone https://github.com/AbdourahmaneGadio/MovieDLE.git
cd MovieDLE
npm install

### Start the App
npx expo start


---

## 🧪 Development Tools

npm run lint --fix # Lint your code
npm run test # Run unit tests


---

## ⚙️ CI/CD with GitHub Actions

Automated workflows are triggered via GitHub Actions:

### CI Workflows

- Triggered on every push or pull request.
- Runs:
  - TypeScript checks
  - ESLint and Prettier
  - Unit tests

### CD Workflows

- Triggered on `main` (or `production`) branch pushes.
- Uses Expo EAS to:
  - Build Android/iOS binaries
  - Upload artifacts or deploy to store (optional)

---

## 📄 License

[MIT](./LICENSE)

---

## 🙌 Acknowledgements

- [Expo](https://expo.dev)
- [React Native](https://reactnative.dev)
- [GitHub Actions](https://github.com/features/actions)