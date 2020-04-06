module.exports={
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		"plugin:@typescript-eslint/recommended",
		'plugin:@typescript-eslint/eslint-recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [2,'tab'],
		'linebreak-style': ["error",'unix'],
		'quotes': [2,'single'],
		'semi': [2,'always'],
        "prefer-const": 1,
        "arrow-parens": 0,
        "no-multi-spaces": "error",
        "no-trailing-spaces": "error",
        "curly": [ 2, "all" ],
        "comma-spacing":[2, {"after": true }],
        "key-spacing": [1, { "afterColon": true }],
        "max-len": [ "error", 120, { "ignoreUrls": true, "code": 120 } ],
        "space-infix-ops": ["error", { "int32Hint": false }],
        "space-before-function-paren": [2, "always"],
        "space-before-blocks": [2,"always"],
        "space-in-parens": [ 2, "always" ],
		"space-before-function-paren": 0,
		"comma-dangle": ["error", "never"],
        "template-curly-spacing": [ 2, "always" ],
        "array-bracket-spacing": [ 2, "always" ],
        "object-curly-spacing": [ 2, "always" ],
        "no-multiple-empty-lines": [ 2, { "max": 1, "maxEOF": 0, "maxBOF": 0 } ],
       
	}
};