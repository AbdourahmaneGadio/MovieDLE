# MovieDLE 📱

MovieDLE is a cross-platform mobile game built with **React Native** and **Expo**, where the user has to find a movie picked randomly.

## App preview

![](https://github.com/AbdourahmaneGadio/MovieDLE/blob/main/assets/videos/app_preview.webp)

## 📂 Project Structure

```
MovieDLE/
│
├── .github/
│   └── workflows/              # GitHub Actions CI/CD workflows      
│
├── app/                        # App source code
│   ├── __tests__
│   ├── types/
│   └── var/
│
├── assets/                     # Images, videos, and fonts
├── components/                 # Main components of the app
│   └── __tests__                   
│
├── eas.json                    # Expo EAS build configuration
├── app.json                    # App metadata for Expo      
├── .env                        # Environment variables
└── .env.example                        
```

---

## 🛠️ Getting Started


### Installation for an Android device

Go to this link : [MovieDLEApp](https://expo.dev/accounts/guer7_jdhf/projects/movie-dle-app/builds/01bf751b-ade1-4ade-afa3-2759092dfd6b)

Or install [Expo Go](https://expo.dev/go), and then scan this QR Code :

<img style='height: 250px;
  width: 250px;' src='https://qr.expo.dev/eas-update?slug=exp&projectId=d4767b80-dcc1-4aa7-a5c1-647a3d6aadfc&groupId=a8d73294-8047-4110-a1d7-4ad7e3a2e939&host=u.expo.dev' />


### Installation for development

#### Prerequisites

- Node.js (v16+ recommended)
- Yarn or npm
- An TMDB Account for the API

```
git clone https://github.com/AbdourahmaneGadio/MovieDLE.git
cd MovieDLE
npm install
cp .env.example .env
```

Fill the .env file with your public key and your read token available in your [TMDB account's settings](https://www.themoviedb.org/settings/api).

### Start the App
```
npx expo start
```

---

## 🧪 Development Tools

```
npm run lint --fix # Lint your code
npm run test # Run unit tests
```


---


## 📄 License

[MIT](./LICENSE)

---

## 🙌 Acknowledgements

- [Expo](https://expo.dev)
- [React Native](https://reactnative.dev)
- [GitHub Actions](https://github.com/features/actions)
- [TMDB API](https://developer.themoviedb.org/docs/getting-started)
