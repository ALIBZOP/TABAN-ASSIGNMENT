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
  rules: {
    'import/extensions': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/no-self-import': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    'import/no-unresolved': 'off',
    'react/function-component-definition': 'off',
    'react/no-typos': 'off',
  },
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
