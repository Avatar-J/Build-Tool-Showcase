import PluginJs from '@eslint/js';
import globals from 'globals';
import PluginPrettier from 'eslint-config-prettier';
import pluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';

export default [
  PluginJs.configs.recommended,
  PluginPrettier,
  {
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
    },
    rules: {
      'no-var': 'error',
      'capitalized-comments': ['error', 'always'],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jest,
      },
    },
    plugins: {
      '@typescript-eslint': pluginTs,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
  {
    files: ['test/**/*.ts', 'test/**/*.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ignores: [
      'public/**/*',
      'node_modules/**/*',
      '*.config.cjs',
      '*.config.mjs',
      'webpack.config.cjs',
      'webpack.common.js',
      'webpack.dev.js',
      'webpack.prod.js',
      'jest.config.ts',
      'babel.config.js',
    ],
  },
];
