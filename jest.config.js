/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/redux/(.*)$": "<rootDir>/src/redux/$1",
    "^@/styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@/utilities/(.*)$": "<rootDir>/src/utilities/$1",
  },
};
