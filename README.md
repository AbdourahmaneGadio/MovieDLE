# MovieDLE React Native App 📱

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

### Installation for development

```
git clone https://github.com/AbdourahmaneGadio/MovieDLE.git
cd MovieDLE
npm install
```

### Start the App
```
npx expo start
```

### Installation for an Android device

Go to this link : [MovieDLEApp](https://expo.dev/accounts/guer7_jdhf/projects/movie-dle-app/builds/01bf751b-ade1-4ade-afa3-2759092dfd6b)

Or install [Expo Go](https://expo.dev/go), and then scan this QR Code :

<img style='height: 250px;
  width: 250px;' src='https://qr.expo.dev/eas-update?slug=exp&projectId=d4767b80-dcc1-4aa7-a5c1-647a3d6aadfc&groupId=a8d73294-8047-4110-a1d7-4ad7e3a2e939&host=u.expo.dev' />

---

## 🧪 Development Tools

```
npm run lint --fix # Lint your code
npm run test # Run unit tests
```


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

- Triggered on `main` branch pushes.
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
