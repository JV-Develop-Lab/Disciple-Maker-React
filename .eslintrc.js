module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:react/recommended', 'plugin:prettier/recommended'
	],
	'parser': '@typescript-eslint/parser',
	overrides: [],
	parserOptions: {
		'project': ['tsconfig.json'],
		'ecmaFeatures': {
			'jsx': true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react',
		'react-hooks'
	],
	rules: {
		'react/require-default-props': 'off',
		'react/button-has-type': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/destructuring-assignment': 'off',
		'react/prop-types': 'warn',
		'react/no-array-index-key': 'warn',
		'react/no-unescaped-entities': 'off',
		'consistent-return': 'warn',
		'react/function-component-definition': 'warn',
		'linebreak-style': 'off',
		'prettier/prettier': ['error', { endOfLine: 'auto'} ],
	},
	ignorePatterns: ['.eslintrc.js']
}
