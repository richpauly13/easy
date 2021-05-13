module.exports = {
	'extends': '../../.eslintrc.js',
	ignorePatterns: [
		'!**/*'
	],
	overrides: [
		{
			files: [
				'*.ts'
			],
			parserOptions: {
				createDefaultProgram: true,
				project: [
					'projects/easy-framework/tsconfig.lib.json',
					'projects/easy-framework/tsconfig.lib.prod.json',
					'projects/easy-framework/tsconfig.spec.json'
				]
			},
			rules: {
				'@angular-eslint/component-selector': [
					'error',
					{
						prefix: 'ez',
						style: 'kebab-case',
						type: 'class'
					}
				],
				'@angular-eslint/directive-selector': [
					'error',
					{
						prefix: 'ez',
						style: 'camelCase',
						type: 'attribute'
					}
				],
				'@angular-eslint/pipe-prefix': [
					'error',
					{
						prefixes: [
							'ez'
						]
					}
				],
				'@angular-eslint/use-component-view-encapsulation': [
					'off'
				],
				'id-denylist': [
					'error',
					'callback',
					'cb',
					'e',
					'err'
				]
			}
		},
		{
			files: [
				'*.html'
			],
			rules: {

			}
		}
	]
};
