/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  rootDir: ".",
  testEnvironment: "jsdom",
  transform: { "^.+\\.(t|j)sx?$": "babel-jest" },
  modulePathIgnorePatterns: ["dist"],
  testRegex: "test.(ts|tsx)$",
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  coverageReporters: ["json", "html", "text", "text-summary"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "tests/**/*.{ts,tsx}"],
};
