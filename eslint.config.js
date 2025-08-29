import globals from "globals";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import jestPlugin from "eslint-plugin-jest";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  // Global ignores
  {
    ignores: ["dist/", "node_modules/", "coverage/"],
  },

  // Base configurations
  ...tseslint.configs.recommended,

  // Main configuration for all TS/JS files
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      import: importPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off", // Not needed with TypeScript
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },

  // Jest/test specific configuration
  {
    files: ["tests/**/*.{ts,tsx}"],
    ...jestPlugin.configs["flat/recommended"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },

  // Prettier configuration (must be last)
  prettierConfig
);
