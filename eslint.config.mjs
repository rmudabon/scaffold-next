import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
 ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'next/typescript'],
    plugins: ["@typescript-eslint"],
    rules: {
    "@typescript-eslint/no-unused-vars": ["warn"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
  }),,
];

export default eslintConfig;
