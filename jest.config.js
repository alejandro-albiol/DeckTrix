module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.(js|jsx|ts|tsx)$': '$1',
    },
  };