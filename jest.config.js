const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  verbose: true,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/*/.ts',
  ],
  coverageDirectory: 'coverage',
  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['text-summary', 'lcov'],
  coverageThreshold: {
    global: {
      statements: 65,
      branches: 58,
      functions: 43,
      lines: 67,
    },
  },

  preset: 'ts-jest',

  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*spec.ts'],
};