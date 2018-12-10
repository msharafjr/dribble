# Dribble [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/msharafjr/dribble/pulls)


A simple application that uses the [Dribbble API](https://developer.dribbble.com/) to imitates the [Dribbble](https://dribbble.com) website using react.js and redux.

#### See an up-to-date [deployed version](https://react-dribble.surge.sh)!!!

## Getting Started

### Installation

```bash
$ npm install
or
$ yarn install
```

then

```bash
$ npm start
or
$ yarn start
```
Runs the app in development mode.

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Testing
```bash
$ npm run test
or
$ yarn test
```

## App Structure

    dribble
      ├── public
      │   ├── images
      │   │   ├── comment.png
      │   │   ├── eye.png
      │   │   └── like.png
      │   │
      │   ├── favicon.ico
      │   ├── index.html
      │   └── manifest.json
      ├── src
      │   ├── actions
      │   │   └── index.js
      │   ├── components
      │   │   ├── modal
      │   │   │   ├── addCommentForm.js
      │   │   │   ├── author.js
      │   │   │   ├── closeIcon.js
      │   │   │   ├── comments.js
      │   │   │   ├── description.js
      │   │   │   ├── header.js
      │   │   │   ├── shotImage.js
      │   │   │   └── tags.js
      │   │   ├── avatar.js
      │   │   ├── button.js
      │   │   ├── cardImage.js
      │   │   ├── dribble.js
      │   │   └── spinner.js
      │   ├── containers
      │   │   ├── Dribble.js
      │   │   ├── Footer.js
      │   │   ├── Header.js
      │   │   └── Modal.js
      │   ├── reducers
      │   │   ├── index.js
      │   │   ├── login.js
      │   │   ├── modal.js
      │   │   └── shots.js
      │   ├── store
      │   │   └── index.js
      │   └── utils
      │   │   ├── api.js
      │   │   ├── CONSTANTS.js
      │   │   └── helpers.js
      ├── .editorconfig
      ├── .gitattibutes
      ├── .gitignore
      ├── package.json
      ├── README.md
      └── yarn.lock

## Packages Used
- **[emotion](https://www.npmjs.com/package/emotion)**
- **[moment](https://www.npmjs.com/package/moment)**
- **[react](https://www.npmjs.com/package/react)**
- **[react-dom](https://www.npmjs.com/package/react-dom)**
- **[react-moment](https://www.npmjs.com/package/react-moment)**
- **[react-redux](https://www.npmjs.com/package/react-redux)**
- **[redux](https://www.npmjs.com/package/redux)**
- **[redux-thunk](https://www.npmjs.com/package/redux)**
- **[uuid](https://www.npmjs.com/package/uuid)**

### SOON

- **SSR**: using `next`
- **Routing**: using `@reach-router`
- **Type Checking**: using `prop-types`
- **Testing**: using `enzyme` and `jest`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[NOLICENSE](https)
