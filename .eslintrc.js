module.exports = {
	env: {
		commonjs: true,
		es6: true
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 6,
		ecmaFeatures: { experimentalObjectRestSpread: true }
	},
	rules: {
		indent: [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'always'
		],
		curly: [
			'error',
			'all'
		],
		'dot-notation': [
			'error'
		],
		eqeqeq: [
			'error',
			'always'
		],
		'no-else-return': [
			'error'
		],
		'no-extra-bind': [
			'error'
		],
		'no-extra-label': [
			'error'
		],
		'no-floating-decimal': [
			'error'
		],
		'no-implicit-coercion': [
			'error'
		],
		'no-multi-spaces': [
			'error'
		],
		'no-unused-labels': [
			'error'
		],
		'no-useless-return': [
			'error'
		],
		'wrap-iife': [
			'error',
			'inside'
		],
		yoda: [
			'error',
			'never'
		],
		'no-undef-init': [
			'error'
		],
		'array-bracket-newline': [
			'error',
			{
				multiline: true,
				minItems: 1
			}
		],
		'array-bracket-spacing': [
			'error',
			'always'
		],
		'array-element-newline': [
			'error',
			'always'
		],
		'block-spacing': [
			'error',
			'always'
		],
		'brace-style': [
			'error'
		],
		'capitalized-comments': [
			'error'
		],
		'comma-dangle': [
			'error',
			'never'
		],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'comma-style': [
			'error',
			'last'
		],
		'computed-property-spacing': [
			'error',
			'never'
		],
		'eol-last': [
			'error',
			'always'
		],
		'func-call-spacing': [
			'error',
			'never'
		],
		'function-paren-newline': [
			'error',
			'multiline'
		],
		'implicit-arrow-linebreak': [
			'error'
		],
		'key-spacing': [
			'error'
		],
		'keyword-spacing': [
			'error'
		],
		'lines-around-comment': [
			'error'
		],
		'lines-between-class-members': [
			'error'
		],
		'multiline-comment-style': [
			'error',
			'bare-block'
		],
		'new-parens': [
			'error'
		],
		'newline-per-chained-call': [
			'error'
		],
		'no-lonely-if': [
			'error'
		],
		'no-multiple-empty-lines': [
			'error',
			{ max: 1 }
		],
		'no-trailing-spaces': [
			'error'
		],
		'no-unneeded-ternary': [
			'error'
		],
		'no-whitespace-before-property': [
			'error'
		],
		'object-curly-newline': [
			'error'
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		'object-property-newline': [
			'error'
		],
		'one-var-declaration-per-line': [
			'error',
			'initializations'
		],
		'operator-assignment': [
			'error'
		],
		'operator-linebreak': [
			'error',
			'none'
		],
		'padded-blocks': [
			'error',
			'never'
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: [
					'const',
					'let',
					'var'
				],
				next: '*'
			},
			{
				blankLine: 'any',
				prev: [
					'const',
					'let',
					'var'
				],
				next: [
					'const',
					'let',
					'var'
				]
			}
		],
		'quote-props': [
			'error',
			'as-needed'
		],
		'semi-spacing': [
			'error'
		],
		'semi-style': [
			'error'
		],
		'space-before-blocks': [
			'error'
		],
		'space-before-function-paren': [
			'error'
		],
		'space-in-parens': [
			'error',
			'never'
		],
		'space-infix-ops': [
			'error',
			{ int32Hint: false }
		],
		'space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false
			}
		],
		'spaced-comment': [
			'error'
		],
		'switch-colon-spacing': [
			'error'
		],
		'template-tag-spacing': [
			'error'
		],
		'unicode-bom': [
			'error'
		],
		'arrow-body-style': [
			'error'
		],
		'arrow-parens': [
			'error',
			'as-needed'
		],
		'arrow-spacing': [
			'error'
		],
		'generator-star-spacing': [
			'error'
		],
		'no-confusing-arrow': [
			'error',
			{ allowParens: true }
		],
		'no-useless-computed-key': [
			'error'
		],
		'no-useless-rename': [
			'error'
		],
		'no-var': [
			'error'
		],
		'object-shorthand': [
			'error'
		],
		'prefer-arrow-callback': [
			'error'
		],
		'prefer-const': [
			'error'
		],
		'prefer-spread': [
			'error'
		],
		'prefer-template': [
			'error'
		],
		'rest-spread-spacing': [
			'error'
		],
		'template-curly-spacing': [
			'error'
		],
		'yield-star-spacing': [
			'error',
			'before'
		]
	}
};
