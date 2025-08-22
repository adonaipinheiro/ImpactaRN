module.exports = {
  root: true,
  env: { es2021: true, node: true, jest: true },
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
  plugins: ['import', '@typescript-eslint'],
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    },
  },
  rules: {
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type'],
      pathGroups: [
        { pattern: 'react', group: 'external', position: 'before' },
        { pattern: 'react-native', group: 'external', position: 'before' },
        { pattern: '@components/**', group: 'internal', position: 'before' },
        { pattern: '@store/**', group: 'internal', position: 'before' },
        { pattern: '@utils/**', group: 'internal', position: 'before' },
        { pattern: '@hooks/**', group: 'internal', position: 'before' },
        { pattern: '@assets/**', group: 'internal', position: 'before' },
        { pattern: '@services/**', group: 'internal', position: 'before' }
      ],
      pathGroupsExcludedImportTypes: ['react', 'react-native'],
      'newlines-between': 'always',
      alphabetize: { order: 'asc', caseInsensitive: true },
      warnOnUnassignedImports: true,
    }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
  },
};
