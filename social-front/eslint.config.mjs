import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-magic-numbers": [
        "error",
        {
          ignore: [0, 1, -1],
        },
      ],
      "no-console": "error",
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@mui/material",
              message:
                "Importing from '@mui/material' is restricted. Please import from '@mui/material/abc'. Example: '@mui/material/Button'.",
            },
            {
              name: "@mui/material/TextField",
              message:
                "Importing from '@mui/material/TextField' is restricted. Please use '@component/Inputs/TextField'.",
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
