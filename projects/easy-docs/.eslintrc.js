module.exports = {
	'extends': '../../.eslintrc.js',
	ignorePatterns: ['!**/*'],
	overrides: [
		{
			files: ['*.ts'],
			parserOptions: {
				createDefaultProgram: true,
				project: [
					'projects/easy-docs/tsconfig.app.json',
					'projects/easy-docs/tsconfig.spec.json'
				]
			},
			rules: {
				'@angular-eslint/component-selector': [
					'error',
					{
						prefix: 'docs',
						style: 'kebab-case',
						type: 'element'
					}
				],
				'@angular-eslint/directive-selector': [
					'error',
					{
						prefix: 'docs',
						style: 'camelCase',
						type: 'attribute'
					}
				],
				'@angular-eslint/pipe-prefix': [
					'error',
					{
						prefixes: ['docs']
					}
				]
			}
		},
		{
			files: ['*.html'],
			rules: {
				'max-len': [
					'error',
					{
						code: 1100
					}
				]
			}
		}
	]
};
