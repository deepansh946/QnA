module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  env: {
    es6: true,
    browser: true,
    node: true
  },
  rules: {
    strict: "warn",
    "no-console": "off",
    "max-len": [
      "error",
      {
        code: 80,
        tabWidth: 2,
        comments: 80
      }
    ],

    // change this to error later
    "no-unused-vars": "warn",
    "no-trailing-spaces": "error",
    "no-multi-spaces": "error",
    "object-curly-spacing": "error",
    "space-before-function-paren": "error",
    "comma-dangle": "error",
    semi: "error",
    "no-extra-semi": "error",
    "consistent-return": "error",
    "no-shadow": "error",
    "no-unreachable": "error",
    "brace-style": "error",
    "no-unneeded-ternary": "error",
    "consistent-return": "error",
    "class-methods-use-this": "error",
    indent: "error",
    "array-callback-return": "error",
    "no-underscore-dangle": "error",
    "no-multiple-empty-lines": "error",
    "keyword-spacing": "error",
    "no-unreachable": "error",
    "default-case": "error",
    ],

    "arrow-body-style": "error",
    "arrow-parens": ["error", "always"]
  }
};
