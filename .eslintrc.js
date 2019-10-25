module.exports = {
  extends: [
    'react-app',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    complexity: ['error', { max: 3 }],
  },
};
