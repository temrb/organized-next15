/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    plugins: [
        'prettier-plugin-organize-imports',
        'prettier-plugin-tailwindcss',
    ],
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    tabWidth: 4,
    useTabs: true,
    bracketSpacing: true,
    trailingComma: 'all',
    organizeImportsSkipDestructiveCodeActions: false, // Make sure organize-imports is aggressive
};

module.exports = config;