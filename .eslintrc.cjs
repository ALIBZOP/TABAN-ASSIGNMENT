const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  root: true,
  modules: {
    auto: true,
    react: true,
    next: false,
    // typescript: {
    //   parserProject: 'tsconfig.eslint.json',
    //   resolverProject: 'tsconfig.json',
    //   tsconfigRootDir: __dirname,
    // },
  },
  // parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx'],
    // },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'],
      },
      // typescript: {
      //   project: './tsconfig.eslint.json',
      // },
    },
  },

  extends: ['prettier'],
  plugins: ['prettier'],
});