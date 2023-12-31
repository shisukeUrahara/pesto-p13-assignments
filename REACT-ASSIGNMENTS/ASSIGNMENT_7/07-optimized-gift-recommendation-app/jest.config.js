module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/"],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/",
    "node_modules/(?!(axios)/)",
  ],
};
