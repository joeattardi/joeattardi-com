/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro'
            }
        }
    ],
    trailingComma: 'none',
    singleQuote: true,
    semi: true,
    tabWidth: 4
};
