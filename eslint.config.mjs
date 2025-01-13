import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier', 'plugin:eslint-config-prettier'),
  {

    parser: '@typescript-eslint/parser',
    parserOptions: {
      'project': true
    },
    rules: {
      'quotes': [
        'error',
        'single',
        {
          'avoidEscape': true,
          'allowTemplateLiterals': true,
        }
      ],
      'semi': [
        'error',
        'always'
      ],
      'no-multi-spaces': [
        'error',
        {
          'ignoreEOLComments': true
        }
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          'max': 1,
          'maxEOF': 1,
          'maxBOF': 0
        }
      ],
      'no-trailing-spaces': [
        'error',
      ],
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          'prefer': 'type-imports',
          'fixStyle': 'inline-type-imports'
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          'argsIgnorePattern': '^_'
        }
      ],
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          'checksVoidReturn': {
            'attributes': false
          }
        }
      ],
    },
  },
];

export default eslintConfig;
