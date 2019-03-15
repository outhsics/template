// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    // 'settings': {
    //     'import/resolver': {
    //         'webpack': {
    //             'config': 'config-webpack/webpack.dev.conf'
    //         }
    //     }
    // },
    // add your custom rules here
    'rules': {
        "indent": ["error", 4],
        "no-plusplus": 0,
        "import/no-extraneous-dependencies": 0,
        "comma-dangle": 0,
        "no-console": 0,
        "func-names": 0,
        "no-mixed-operators": 0,
        "no-underscore-dangle": 0,
        "no-new": 0,
        "strict": 0,
        'prefer-destructuring': 0,
        'no-control-regex': 0,
        'no-restricted-globals': 0,
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            'optionalDependencies': ['test/unit/index.js']
        }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
