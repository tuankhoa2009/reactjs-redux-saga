module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/prop-types": 1,
    "linebreak-style": 0,
    "arrow-spacing": 0,
    "import/no-useless-path-segments": 0,
    "@material-ui/core/icon": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-indent": 0,
    "prettier/prettier":['error'],
    "import/extensions":0,
    "no-unused-vars":1,
    "import/order":1,
    "import/no-extrane":0,
    "no-use-before-define":0,
    "no-use-before-define":0,
    "no-param-reassign":0
  },
  plugins:['prettier'],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier"
  ],
  env:{
    "es6":true,
    "browser":true,
    "node":true
  }
};
