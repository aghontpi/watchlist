module.exports = {
  root: true,
  extends: ["@react-native-community", "react-native-wcandillon"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": ["error", { variables: false }], // style variable defined at bottom showup as error, untill
    //a fix is found for this, disable it for all vaiables
  },
};
