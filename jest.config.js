const config = {
  roots: ["<rootDir>/src/"],
  verbose: true,
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
};

module.exports = config;
