module.exports = {
  preset: "jest-preset-angular",
  globals: {
    "ts-jest": {
      allowSyntheticDefaultImports: true
    },
    __TRANSFORM_HTML__: true
  },
  testMatch: ["<rootDir>/src/**/?(*.)+(spec|test).ts"],
  resetMocks: true,
  setupTestFrameworkScriptFile: "<rootDir>/jest/setup.ts",
  transformIgnorePatterns: [`<rootDir>/node_modules/`],
  transform: {
    "^.+\\.(ts|html)$":
      "<rootDir>/node_modules/jest-preset-angular/preprocessor.js",
    "^.+\\.(ts|js)$": "babel-jest"
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
};
