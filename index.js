module.exports = {
    extends: [
        'airbnb-base'
    ],
    rules: {
        indent: ['error', 4],
        'arrow-parens': ['error', 'as-needed'],
        'implicit-arrow-linebreak': ['warn', 'below'],
        'keyword-spacing': [
            'error',
            {
                overrides: {
                    if: {
                        after: false
                    },
                    for: {
                        after: false
                    },
                    while: {
                        after: false
                    },
                    catch: {
                        after: false
                    },
                    switch: {
                        after: false
                    }
                }
            }
        ],
        'no-param-reassign': [
            'error',
            {
                props: false
            }
        ],
        'no-restricted-syntax': 0,
        'comma-dangle': ['error', 'never'],
        'no-underscore-dangle': [
            'error',
            {
                allowAfterThis: true,
                allowAfterThisConstructor: true,
                enforceInMethodNames: false
            }
        ],
        'nonblock-statement-body-position': ['error', 'below'],
        curly: ['error', 'multi-or-nest'],
        'no-fallthrough': 0,
        'no-bitwise': 0
    }
};