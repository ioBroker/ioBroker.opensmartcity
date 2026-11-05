// Uses @iobroker/eslint-config from the root node_modules: `npm run lint-admin` in the root
import config, { reactConfig } from '@iobroker/eslint-config';

export default [
    ...config,
    ...reactConfig,
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['*.mjs'],
                },
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        rules: {
            'jsdoc/require-jsdoc': 'off',
            'jsdoc/require-param': 'off',
            // the automatic JSX runtime ("jsx": "react-jsx") does not need React in scope
            'react/react-in-jsx-scope': 'off',
        },
    },
    {
        ignores: ['build/**/*', 'node_modules/**/*', 'vite.config.mjs'],
    },
];
