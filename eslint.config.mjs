import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Enforce "barrel imports": import from folder `index.ts` only.
      // Example: ✅ import { queryClient } from "@/lib"
      //          ❌ import { queryClient } from "@/lib/react-query"
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/config/*/*'],
              message: 'Import from a barrel (e.g. "@/config/<folder>") instead of deep paths.',
            },
            {
              group: ['@/lib/*/*'],
              message: 'Import from a barrel (e.g. "@/lib/<folder>") instead of deep paths.',
            },
            {
              group: ['@/shared/*/*'],
              message: 'Import from a barrel (e.g. "@/shared/<folder>") instead of deep paths.',
            },
            {
              group: ['./*', '../*'],
              message: 'Do not use relative imports. Use the "@/" alias instead.',
            },
            {
              group: [
                // Enforce "@/" for internal imports (no "src/..." etc.)
                'src',
                'src/*',
                'src/**',
                '!@/src',
                '!@/src/*',
                '!@/src/**',

                'app',
                'app/*',
                'app/**',
                '!@/app',
                '!@/app/*',
                '!@/app/**',

                'modules',
                'modules/*',
                'modules/**',
                '!@/modules',
                '!@/modules/*',
                '!@/modules/**',

                'shared',
                'shared/*',
                'shared/**',
                '!@/shared',
                '!@/shared/*',
                '!@/shared/**',

                'lib',
                'lib/*',
                'lib/**',
                '!@/lib',
                '!@/lib/*',
                '!@/lib/**',

                'config',
                'config/*',
                'config/**',
                '!@/config',
                '!@/config/*',
                '!@/config/**',

                // Do not accidentally match package imports like "eslint/config".
                '!eslint',
                '!eslint/*',
                '!eslint/**',
              ],
              message:
                'Internal imports must use the "@/" alias (e.g. "@/shared", "@/modules/auth").',
            },
          ],
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
    },
  },
  {
    // Barrel files may re-export from deep paths, but MUST NOT use relative paths.
    files: ['src/**/index.ts', 'src/**/index.tsx'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['./*', '../*'],
              message:
                'Do not use relative exports/imports in barrels. Use the "@/" alias instead.',
            },
          ],
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
