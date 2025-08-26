module.exports = {
  preset: 'react-native',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/index.ts',
    '!src/**/*.d.ts',
    '!src/**/__tests__/**',
    '!src/routes/**',
    '!src/screens/**',
    '!src/index.tsx',
  ],
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    '^@locales(.*)$': '<rootDir>/src/locales$1',
  },
};
