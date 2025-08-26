module.exports = {
  preset: 'react-native',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/index.ts',
    '!src/**/*.d.ts',
    '!src/**/__tests__/**',
    '!src/routes/**',
    '!src/index.tsx',
  ],
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    '^@locales(.*)$': '<rootDir>/src/locales$1',
  },
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
