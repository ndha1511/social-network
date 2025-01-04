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
      "no-console": ["error", { allow: ["warn", "error"] }],
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
                "Importing from '@mui/material/TextField' is restricted. Please use '@component/Inputs/TextFields/TextField'.",
            },
            {
              name: "@mui/material/Icon",
              message:
                "Importing from '@mui/material/Icon' is restricted. Please use '@component/DataDisplay/Icon'.",
            },
            {
              name: "@mui/material/IconButton",
              message:
                "Importing from '@mui/material/IconButton' is restricted. Please use '@component/Inputs/Buttons/IconButton'.",
            },
            {
              name: "@mui/material/Button",
              message:
                "Importing from '@mui/material/Button' is restricted. Please use '@component/Inputs/Buttons/Button'.",
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
