module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  env: {
    node: true,
    commonjs: true,
    jest: true,
  },
  extends: [
    "plugin:import/recommended",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "prettier",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module", // Allows for the use of imports
    project: "./tsconfig.eslint.json",
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "eslint-plugin-tsdoc",
    "sonarjs",
    "no-secrets",
    "deprecation",
    "write-good-comments",
  ],
  rules: {
    "interface-name": [0, "always-prefix"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "__mocks__/**/*.*",
          "**/*.{test,spec}.{js,jsx,ts,tsx}",
          "**/{test,tests}/**/*.{js,jsx,ts,tsx}",
          "./bin/*",
        ],
      },
    ],
    "sonarjs/cognitive-complexity": ["error", 20],
    "no-secrets/no-secrets": 2,
    "deprecation/deprecation": 1,
    "write-good-comments/write-good-comments": 1,
    "unicorn/prefer-module": 0,
    "unicorn/no-array-for-each": 0,
    "unicorn/prefer-node-protocol": 0,
    "no-warning-comments": [2, { terms: ["todo", "fixme", "idea"] }],
    // allow unused vars with _ prefix
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
  ignorePatterns: [
    "node_modules",
    "dist",
    "coverage",
    "docs",
    ".eslintrc.js",
    "jest.config.js",
    "webpack.config.js",
    ".pnp.cjs",
    ".pnp.loader.mjs",
  ],
};
