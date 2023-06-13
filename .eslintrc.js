module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 'off',
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'react/no-unstable-nested-components': 'off',
  },
};
