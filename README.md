# song
React App - choose song from song list

---

[DEMO](https://tom2kota.github.io/song/)

Status of Action script:

![React_App_Deploy_to_gh-pages_CI](https://github.com/tom2kota/song/workflows/React_App_Deploy_to_gh-pages_CI/badge.svg)


----

add to package.json

```
   "homepage": ".",
  "dependencies": {
...
    "gh-pages": "^2.2.0",
...
  },
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

npm run deploy
