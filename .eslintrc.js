/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
	ignorePatterns: ['projects/**/*'],
	root: true,
	overrides: [
		{
			'extends': [
				'plugin:@angular-eslint/ng-cli-compat--formatting-add-on',
				'plugin:@angular-eslint/recommended',
				'plugin:@angular-eslint/template/process-inline-templates'
			],
			files: ['*.ts'],
			parserOptions: {
				createDefaultProgram: true,
				project: ['tsconfig.json'],
				tsconfigRootDir: __dirname
			},
			plugins: [
				'eslint-plugin-jsdoc',
				'eslint-plugin-unicorn'
			],
			rules: {
				'@angular-eslint/component-class-suffix': [
					'error',
					{
						suffixes: ['Component']
					}
				],
				'@angular-eslint/component-max-inline-declarations': [
					'error',
					{
						animations: 10,
						styles: 1,
						template: 1
					}
				],
				'@angular-eslint/component-selector': [
					'error',
					{
						prefix: 'easy',
						style: 'kebab-case',
						type: 'element'
					}
				],
				'@angular-eslint/contextual-decorator': ['error'],
				'@angular-eslint/contextual-lifecycle': ['error'],
				'@angular-eslint/directive-class-suffix': [
					'error',
					{
						suffixes: ['Directive']
					}
				],
				'@angular-eslint/directive-selector': [
					'error',
					{
						prefix: 'easy',
						style: 'camelCase',
						type: 'attribute'
					}
				],
				'@angular-eslint/no-attribute-decorator': ['error'],
				'@angular-eslint/no-conflicting-lifecycle': ['error'],
				'@angular-eslint/no-empty-lifecycle-method': ['error'],
				'@angular-eslint/no-forward-ref': ['error'],
				'@angular-eslint/no-host-metadata-property': ['error'],
				'@angular-eslint/no-input-prefix': [
					'error',
					{
						prefixes: [
							'can',
							'has',
							'is',
							'should'
						]
					}
				],
				'@angular-eslint/no-input-rename': ['error'],
				'@angular-eslint/no-inputs-metadata-property': ['error'],
				'@angular-eslint/no-lifecycle-call': ['error'],
				'@angular-eslint/no-output-native': ['error'],
				'@angular-eslint/no-output-on-prefix': ['error'],
				'@angular-eslint/no-output-rename': ['error'],
				'@angular-eslint/no-outputs-metadata-property': ['error'],
				'@angular-eslint/no-pipe-impure': ['error'],
				'@angular-eslint/no-queries-metadata-property': ['error'],
				'@angular-eslint/pipe-prefix': [
					'error',
					{
						prefixes: ['easy']
					}
				],
				'@angular-eslint/prefer-on-push-component-change-detection': ['error'],
				'@angular-eslint/prefer-output-readonly': ['error'],
				'@angular-eslint/relative-url-prefix': ['error'],
				'@angular-eslint/sort-ngmodule-metadata-arrays': ['error'],
				'@angular-eslint/use-component-selector': ['error'],
				'@angular-eslint/use-component-view-encapsulation': ['error'],
				'@angular-eslint/use-injectable-provided-in': ['error'],
				'@angular-eslint/use-lifecycle-interface': ['error'],
				'@angular-eslint/use-pipe-transform-interface': ['error'],
				'@typescript-eslint/adjacent-overload-signatures': ['error'],
				'@typescript-eslint/array-type': [
					'error',
					{
						'default': 'array',
						readonly: 'array'
					}
				],
				'@typescript-eslint/await-thenable': ['error'],
				'@typescript-eslint/ban-ts-comment': [
					'error',
					{
						minimumDescriptionLength: 10,
						'ts-check': false,
						'ts-expect-error': 'allow-with-description',
						'ts-ignore': 'allow-with-description',
						'ts-nocheck': 'allow-with-description'
					}
				],
				'@typescript-eslint/ban-tslint-comment': ['error'],
				'@typescript-eslint/ban-types': [
					'error',
					{
						extendDefaults: true,
						types: {
							'{}': {
								fixWith: 'Record<string, unknown>',
								message: '`{}` actually means any non-nullish value.  If you want a type meaning any object, you probably want `Record<string, unknown>` instead.  If you want a type meaning any value, you probably want `unknown` instead.'
							},
							any: {
								fixWith: 'Record<string, unknown>',
								message: 'Use Record<string, unknown> instead'
							},
							Object: {
								fixWith: 'Record<string, unknown>',
								message: 'The `Object` type actually means any non-nullish value, so it is marginally better than `unknown`.  If you want a type meaning any object, you probably want `Record<string, unknown>` instead.  If you want a type meaning any value, you probably want `unknown` instead.'
							}
						}
					}
				],
				'@typescript-eslint/brace-style': [
					'error',
					'1tbs'
				],
				'@typescript-eslint/class-literal-property-style': [
					'error',
					'getters'
				],
				'@typescript-eslint/comma-dangle': [
					'error',
					'never'
				],
				'@typescript-eslint/comma-spacing': [
					'error',
					{
						after: true,
						before: false
					}
				],
				'@typescript-eslint/consistent-generic-constructors': [
					'error',
					'type-annotation'
				],
				'@typescript-eslint/consistent-type-assertions': [
					'error',
					{
						assertionStyle: 'as',
						objectLiteralTypeAssertions: 'never'
					}
				],
				'@typescript-eslint/consistent-type-definitions': [
					'error',
					'type'
				],
				'@typescript-eslint/consistent-type-exports': ['error'],
				'@typescript-eslint/consistent-type-imports': [
					'error',
					{
						disallowTypeAnnotations: false,
						prefer: 'no-type-imports'
					}
				],
				'@typescript-eslint/default-param-last': ['error'],
				'@typescript-eslint/dot-notation': [
					'error',
					{
						allowKeywords: true,
						allowPrivateClassPropertyAccess: true,
						allowProtectedClassPropertyAccess: true
					}
				],
				'@typescript-eslint/explicit-function-return-type': ['off'],
				'@typescript-eslint/explicit-member-accessibility': [
					'error',
					{
						accessibility: 'explicit',
						overrides: {
							accessors: 'explicit',
							constructors: 'explicit',
							methods: 'explicit',
							parameterProperties: 'explicit',
							properties: 'explicit'
						}
					}
				],
				'@typescript-eslint/explicit-module-boundary-types': [
					'error',
					{
						allowArgumentsExplicitlyTypedAsAny: false,
						allowDirectConstAssertionInArrowFunctions: false,
						allowHigherOrderFunctions: false,
						allowTypedFunctionExpressions: false
					}
				],
				'@typescript-eslint/func-call-spacing': [
					'error',
					'never'
				],
				'@typescript-eslint/indent': [
					'error',
					'tab',
					{
						ArrayExpression: 1,
						CallExpression: {
							arguments: 1
						},
						flatTernaryExpressions: true,
						FunctionDeclaration: {
							// eslint-disable-next-line max-lines
							body: 1,
							parameters: 2
						},
						FunctionExpression: {
							body: 1,
							parameters: 2
						},
						ImportDeclaration: 1,
						MemberExpression: 0,
						ObjectExpression: 1,
						offsetTernaryExpressions: true,
						outerIIFEBody: 0,
						SwitchCase: 1,
						VariableDeclarator: {
							'const': 0,
							let: 0,
							'var': 0
						}
					}
				],
				'@typescript-eslint/init-declarations': [
					'error',
					'never',
					{
						ignoreForLoopInit: false
					}
				],
				'@typescript-eslint/key-spacing': [
					'error',
					{
						afterColon: true,
						beforeColon: false
					}
				],
				'@typescript-eslint/keyword-spacing': [
					'error',
					{
						after: true,
						before: true
					}
				],
				'@typescript-eslint/lines-around-comment': [
					'error',
					{
						afterBlockComment: false,
						afterLineComment: false,
						allowArrayEnd: false,
						allowArrayStart: true,
						allowBlockEnd: false,
						allowBlockStart: true,
						allowClassEnd: false,
						allowClassStart: true,
						allowEnumEnd: false,
						allowEnumStart: true,
						allowInterfaceEnd: false,
						allowInterfaceStart: true,
						allowModuleEnd: false,
						allowModuleStart: true,
						allowObjectEnd: false,
						allowObjectStart: true,
						allowTypeEnd: false,
						allowTypeStart: true,
						applyDefaultIgnorePatterns: false,
						beforeBlockComment: true,
						beforeLineComment: true
					}
				],
				'@typescript-eslint/lines-between-class-members': [
					'error',
					'always',
					{
						exceptAfterOverload: false,
						exceptAfterSingleLine: true
					}
				],
				'@typescript-eslint/member-delimiter-style': [
					'error',
					{
						multiline: {
							delimiter: 'semi',
							requireLast: true
						},
						multilineDetection: 'brackets',
						singleline: {
							delimiter: 'semi',
							requireLast: true
						}
					}
				],
				'@typescript-eslint/member-ordering': [
					'error',
					{
						'default': {
							memberTypes: [

								// Index signature
								'signature',

								// Decorators
								'public-decorated-get',
								'protected-decorated-get',
								'private-decorated-get',

								'decorated-get',

								'public-decorated-set',
								'protected-decorated-set',
								'private-decorated-set',

								'decorated-set',

								'public-decorated-method',
								'protected-decorated-method',
								'private-decorated-method',

								'public-decorated-field',
								'protected-decorated-field',
								'private-decorated-field',

								'decorated-method',
								'decorated-field',

								// Getters
								'public-static-get',
								'protected-static-get',
								'private-static-get',

								'public-instance-get',
								'protected-instance-get',
								'private-instance-get',

								'public-abstract-get',
								'protected-abstract-get',

								'public-get',
								'protected-get',
								'private-get',

								'static-get',
								'instance-get',
								'abstract-get',

								'get',

								// Setters
								/* 'public-static-set',
								'protected-static-set',
								'private-static-set',

								'public-instance-set',
								'protected-instance-set',
								'private-instance-set',

								'public-abstract-set',
								'protected-abstract-set',
								'private-abstract-set',

								'public-set',
								'protected-set',
								'private-set',

								'static-set',
								'instance-set',
								'abstract-set',

								'set', */

								// Fields
								'public-instance-field',
								'protected-instance-field',
								'private-instance-field',

								'public-static-field',
								'protected-static-field',
								'private-static-field',

								'public-abstract-field',
								'protected-abstract-field',

								'public-field',
								'protected-field',
								'private-field',

								'instance-field',
								'static-field',
								'abstract-field',
								'field',

								// Constructors
								'public-constructor',
								'protected-constructor',
								'private-constructor',
								'constructor',

								// Methods
								'public-instance-method',
								'protected-instance-method',
								'private-instance-method',

								'public-static-method',
								'protected-static-method',
								'private-static-method',

								'public-abstract-method',
								'protected-abstract-method',

								'public-method',
								'protected-method',
								'private-method',

								'instance-method',
								'static-method',
								'abstract-method',
								'method'
							],
							order: 'alphabetically-case-insensitive'
						}
					}
				],
				'@typescript-eslint/method-signature-style': [
					'error',
					'property'
				],
				'@typescript-eslint/naming-convention': [
					'error',
					{
						format: ['strictCamelCase'],
						leadingUnderscore: 'forbid',
						selector: 'default',
						trailingUnderscore: 'forbid'
					},
					{
						format: ['PascalCase'],
						prefix: [
							'can',
							'has',
							'is',
							'should'
						],
						selector: 'variable',
						types: ['boolean']
					},
					{
						format: ['StrictPascalCase'],
						selector: 'typeLike'
					}
				],
				'@typescript-eslint/no-array-constructor': ['error'],
				'@typescript-eslint/no-base-to-string': [
					'error',
					{
						ignoredTypeNames: [
							'RegExp',
							'URL',
							'URLSearchParams'
						]
					}
				],
				'@typescript-eslint/no-confusing-non-null-assertion': ['error'],
				'@typescript-eslint/no-confusing-void-expression': [
					'error',
					{
						ignoreArrowShorthand: false,
						ignoreVoidOperator: false
					}
				],
				'@typescript-eslint/no-dupe-class-members': ['error'],
				'@typescript-eslint/no-duplicate-enum-values': ['error'],
				'@typescript-eslint/no-duplicate-imports': [
					'error',
					{
						includeExports: false
					}
				],
				'@typescript-eslint/no-duplicate-type-constituents': [
					'error',
					{
						ignoreIntersections: false,
						ignoreUnions: false
					}
				],
				'@typescript-eslint/no-dynamic-delete': ['error'],
				'@typescript-eslint/no-empty-function': ['error'],
				'@typescript-eslint/no-empty-interface': [
					'error',
					{
						allowSingleExtends: false
					}
				],
				'@typescript-eslint/no-explicit-any': [
					'error',
					{
						fixToUnknown: false,
						ignoreRestArgs: false
					}
				],
				'@typescript-eslint/no-extra-non-null-assertion': ['error'],
				'@typescript-eslint/no-extra-parens': [
					'error',
					'all',
					{
						conditionalAssign: false,
						enforceForArrowConditionals: false,
						enforceForFunctionPrototypeMethods: false,
						enforceForNewInMemberExpressions: false,
						enforceForSequenceExpressions: false,
						ignoreJSX: 'none',
						nestedBinaryExpressions: false,
						returnAssign: false
					}
				],
				'@typescript-eslint/no-extra-semi': ['error'],
				'@typescript-eslint/no-extraneous-class': [
					'error',
					{
						allowConstructorOnly: true,
						allowEmpty: true,
						allowStaticOnly: false,
						allowWithDecorator: false
					}
				],
				'@typescript-eslint/no-floating-promises': ['off'],
				'@typescript-eslint/no-for-in-array': ['error'],
				'@typescript-eslint/no-implicit-any-catch': [
					'error',
					{
						allowExplicitAny: false
					}
				],
				'@typescript-eslint/no-implied-eval': ['error'],
				'@typescript-eslint/no-import-type-side-effects': ['error'],
				'@typescript-eslint/no-inferrable-types': ['off'],
				'@typescript-eslint/no-invalid-this': [
					'error',
					{
						capIsConstructor: false
					}
				],
				'@typescript-eslint/no-invalid-void-type': [
					'error',
					{
						allowAsThisParameter: false,
						allowInGenericTypeArguments: false
					}
				],
				'@typescript-eslint/no-loop-func': ['error'],
				'@typescript-eslint/no-loss-of-precision': ['error'],
				'@typescript-eslint/no-magic-numbers': ['off'],
				'@typescript-eslint/no-meaningless-void-operator': [
					'error',
					{
						checkNever: true
					}
				],
				'@typescript-eslint/no-misused-new': ['error'],
				'@typescript-eslint/no-misused-promises': [
					'error',
					{
						checksConditionals: true,
						checksVoidReturn: true
					}
				],
				'@typescript-eslint/no-mixed-enums': ['error'],
				'@typescript-eslint/no-namespace': [
					'error',
					{
						allowDeclarations: false,
						allowDefinitionFiles: false
					}
				],
				'@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],
				'@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
				'@typescript-eslint/no-non-null-assertion': ['off'],
				'@typescript-eslint/no-redeclare': [
					'error',
					{
						builtinGlobals: true,
						ignoreDeclarationMerge: false
					}
				],
				'@typescript-eslint/no-redundant-type-constituents': ['error'],
				'@typescript-eslint/no-require-imports': ['error'],
				'@typescript-eslint/no-restricted-imports': ['off'],
				'@typescript-eslint/no-shadow': [
					'error',
					{
						allow: [
							'module',
							'require'
						],
						builtinGlobals: false,
						hoist: 'all',
						ignoreFunctionTypeParameterNameValueShadow: false,
						ignoreTypeValueShadow: false
					}
				],
				'@typescript-eslint/no-this-alias': [
					'error',
					{
						allowDestructuring: false
					}
				],
				'@typescript-eslint/no-throw-literal': [
					'error',
					{
						allowThrowingAny: false,
						allowThrowingUnknown: false
					}
				],
				'@typescript-eslint/no-type-alias': [
					'error',
					{
						allowAliases: 'never',
						allowCallbacks: 'never',
						allowConditionalTypes: 'never',
						allowConstructors: 'never',
						allowGenerics: 'never',
						allowLiterals: 'never',
						allowMappedTypes: 'never',
						allowTupleTypes: 'never'
					}
				],
				'@typescript-eslint/no-unnecessary-boolean-literal-compare': [
					'error',
					{
						allowComparingNullableBooleansToFalse: false,
						allowComparingNullableBooleansToTrue: false
					}
				],
				'@typescript-eslint/no-unnecessary-condition': [
					'error',
					{
						allowConstantLoopConditions: false,
						allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: true
					}
				],
				'@typescript-eslint/no-unnecessary-qualifier': ['error'],
				'@typescript-eslint/no-unnecessary-type-arguments': ['error'],
				'@typescript-eslint/no-unnecessary-type-assertion': ['error'],
				'@typescript-eslint/no-unnecessary-type-constraint': ['error'],
				'@typescript-eslint/no-unsafe-argument': ['error'],
				'@typescript-eslint/no-unsafe-assignment': ['error'],
				'@typescript-eslint/no-unsafe-call': ['error'],
				'@typescript-eslint/no-unsafe-declaration-merging': 'error',
				'@typescript-eslint/no-unsafe-member-access': ['error'],
				'@typescript-eslint/no-unsafe-return': ['error'],
				'@typescript-eslint/no-unused-expressions': [
					'error',
					{
						allowShortCircuit: false,
						allowTaggedTemplates: false,
						allowTernary: true,
						enforceForJSX: false
					}
				],
				'@typescript-eslint/no-unused-vars': [
					'error',
					{
						args: 'all',
						caughtErrors: 'all',
						ignoreRestSiblings: false,
						vars: 'all'
					}
				],
				'@typescript-eslint/no-use-before-define': [
					'error',
					{
						classes: true,
						enums: true,
						functions: true,
						ignoreTypeReferences: false,
						typedefs: true,
						variables: true
					}
				],
				'@typescript-eslint/no-useless-constructor': ['error'],
				'@typescript-eslint/no-useless-empty-export': ['error'],
				'@typescript-eslint/no-var-requires': ['error'],
				'@typescript-eslint/non-nullable-type-assertion-style': ['error'],
				'@typescript-eslint/object-curly-spacing': [
					'error',
					'always',
					{
						arraysInObjects: false,
						objectsInObjects: false
					}
				],
				'@typescript-eslint/padding-line-between-statements': [
					'error',
					{
						blankLine: 'always',
						next: 'block-like',
						prev: '*'
					},
					{
						blankLine: 'always',
						next: '*',
						prev: 'block-like'
					},
					{
						blankLine: 'always',
						next: 'break',
						prev: '*'
					},
					{
						blankLine: 'never',
						next: '*',
						prev: 'break'
					},
					{
						blankLine: 'never',
						next: 'case',
						prev: '*'
					},
					{
						blankLine: 'always',
						next: 'continue',
						prev: '*'
					},
					{
						blankLine: 'never',
						next: 'default',
						prev: '*'
					},
					{
						blankLine: 'always',
						next: '*',
						prev: [
							'const',
							'let'
						]
					},
					{
						blankLine: 'never',
						next: [
							'const',
							'let'
						],
						prev: [
							'const',
							'let'
						]
					},
					{
						blankLine: 'always',
						next: 'let',
						prev: 'const'
					},
					{
						blankLine: 'always',
						next: 'return',
						prev: '*'
					},
					{
						blankLine: 'always',
						next: 'throw',
						prev: '*'
					}
				],
				'@typescript-eslint/parameter-properties': [
					'error',
					{
						allow: ['private']
					}
				],
				'@typescript-eslint/prefer-as-const': ['error'],
				'@typescript-eslint/prefer-enum-initializers': ['error'],
				'@typescript-eslint/prefer-for-of': ['error'],
				'@typescript-eslint/prefer-function-type': ['error'],
				'@typescript-eslint/prefer-includes': ['error'],
				'@typescript-eslint/prefer-literal-enum-member': [
					'error',
					{
						allowBitwiseExpressions: false
					}
				],
				'@typescript-eslint/prefer-namespace-keyword': ['error'],
				'@typescript-eslint/prefer-nullish-coalescing': ['off'],
				'@typescript-eslint/prefer-optional-chain': ['error'],
				'@typescript-eslint/prefer-readonly': ['off'],
				'@typescript-eslint/prefer-readonly-parameter-types': ['off'],
				'@typescript-eslint/prefer-reduce-type-parameter': ['error'],
				'@typescript-eslint/prefer-regexp-exec': ['error'],
				'@typescript-eslint/prefer-return-this-type': ['error'],
				'@typescript-eslint/prefer-string-starts-ends-with': ['error'],
				'@typescript-eslint/prefer-ts-expect-error': ['error'],
				'@typescript-eslint/promise-function-async': [
					'error',
					{
						allowAny: false,
						allowedPromiseNames: ['Thenable'],
						checkArrowFunctions: true,
						checkFunctionDeclarations: true,
						checkFunctionExpressions: true,
						checkMethodDeclarations: true
					}
				],
				'@typescript-eslint/quotes': [
					'error',
					'single',
					{
						allowTemplateLiterals: true,
						avoidEscape: true
					}
				],
				'@typescript-eslint/require-array-sort-compare': [
					'error',
					{
						ignoreStringArrays: false
					}
				],
				'@typescript-eslint/require-await': ['error'],
				'@typescript-eslint/restrict-plus-operands': [
					'error',
					{
						allowAny: false,
						checkCompoundAssignments: true
					}
				],
				'@typescript-eslint/restrict-template-expressions': [
					'error',
					{
						allowAny: false,
						allowBoolean: true,
						allowNullish: true,
						allowNumber: true,
						allowRegExp: true
					}
				],
				'@typescript-eslint/return-await': [
					'error',
					'always'
				],
				'@typescript-eslint/semi': [
					'error',
					'always',
					{
						omitLastInOneLineBlock: false
					}
				],
				'@typescript-eslint/sort-type-union-intersection-members': [
					'error',
					{
						checkIntersections: true,
						checkUnions: true,
						groupOrder: [
							'named',
							'keyword',
							'operator',
							'literal',
							'function',
							'import',
							'conditional',
							'object',
							'tuple',
							'intersection',
							'union',
							'nullish'
						]
					}
				],
				'@typescript-eslint/space-before-blocks': [
					'error',
					{
						classes: 'always',
						functions: 'always',
						keywords: 'always'
					}
				],
				'@typescript-eslint/space-before-function-paren': [
					'error',
					{
						anonymous: 'never',
						asyncArrow: 'never',
						named: 'never'
					}
				],
				'@typescript-eslint/space-infix-ops': [
					'error',
					{
						int32Hint: false
					}
				],
				'@typescript-eslint/strict-boolean-expressions': [
					'error',
					{
						allowAny: false,
						allowNullableBoolean: false,
						allowNullableNumber: false,
						allowNullableObject: true,
						allowNullableString: true,
						allowNumber: true,
						allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: true,
						allowString: true
					}
				],
				'@typescript-eslint/switch-exhaustiveness-check': ['error'],
				'@typescript-eslint/triple-slash-reference': [
					'error',
					{
						lib: 'never',
						path: 'never',
						types: 'prefer-import'
					}
				],
				'@typescript-eslint/type-annotation-spacing': [
					'error',
					{
						after: true,
						before: false,
						overrides:
						{
							arrow: {
								after: true,
								before: true
							},
							colon: {
								after: true,
								before: false
							},
							parameter: {
								after: true,
								before: false
							},
							property: {
								after: true,
								before: false
							},
							returnType: {
								after: true,
								before: false
							},
							variable: {
								after: true,
								before: false
							}
						}
					}
				],
				'@typescript-eslint/typedef': [
					'error',
					{
						arrayDestructuring: true,
						arrowParameter: true,
						memberVariableDeclaration: false,
						objectDestructuring: true,
						parameter: true,
						propertyDeclaration: true,
						variableDeclaration: true,
						variableDeclarationIgnoreFunction: false
					}
				],
				'@typescript-eslint/unbound-method': [
					'error',
					{
						ignoreStatic: false
					}
				],
				'@typescript-eslint/unified-signatures': ['error'],
				'accessor-pairs': [
					'error',
					{
						enforceForClassMembers: true,
						getWithoutSet: false,
						setWithoutGet: true
					}
				],
				'array-bracket-newline': [
					'error',
					{
						minItems: 2,
						multiline: true

					}
				],
				'array-bracket-spacing': [
					'error',
					'never',
					{
						arraysInArrays: false,
						objectsInArrays: false,
						singleValue: false
					}
				],
				'array-callback-return': [
					'error',
					{
						allowImplicit: true,
						checkForEach: true
					}
				],
				'array-element-newline': [
					'error',
					{
						ArrayExpression: {
							minItems: 1,
							multiline: true
						},
						ArrayPattern: {
							minItems: 1,
							multiline: true
						}
					}
				],
				'arrow-body-style': [
					'error',
					'always'
				],
				'arrow-parens': [
					'error',
					'always'
				],
				'arrow-spacing': [
					'error',
					{
						after: true,
						before: true
					}
				],
				'block-scoped-var': ['error'],
				'block-spacing': [
					'error',
					'never'
				],
				'brace-style': ['off'],
				camelcase: ['off'],
				'capitalized-comments': [
					'error',
					'always',
					{
						ignoreConsecutiveComments: true,
						ignoreInlineComments: false
					}
				],
				'class-methods-use-this': ['off'],
				'comma-dangle': ['off'],
				'comma-spacing': ['off'],
				'comma-style': [
					'error',
					'last'
				],
				complexity: [
					'error',
					{
						max: 20
					}
				],
				'computed-property-spacing': [
					'error',
					'never',
					{
						enforceForClassMembers: true
					}
				],
				'consistent-return': [
					'error',
					{
						treatUndefinedAsUnspecified: true
					}
				],
				'consistent-this': [
					'error',
					'self'
				],
				'constructor-super': ['error'],
				curly: [
					'error',
					'all'
				],
				'default-case': [
					'error',
					{
						commentPattern: '/^No default$/'
					}
				],
				'default-case-last': ['error'],
				'default-param-last': ['off'],
				'dot-location': [
					'error',
					'property'
				],
				'dot-notation': ['off'],
				'eol-last': [
					'error',
					'always'
				],
				eqeqeq: [
					'error',
					'always',
					{
						'null': 'always'
					}
				],
				'for-direction': ['error'],
				'func-call-spacing': ['off'],
				'func-name-matching': [
					'error',
					'always',
					{
						considerPropertyDescriptor: true,
						includeCommonJSModuleExports: true
					}
				],
				'func-names': [
					'error',
					'always',
					{
						generators: 'always'
					}
				],
				'func-style': [
					'error',
					'declaration',
					{
						allowArrowFunctions: true
					}
				],
				'function-call-argument-newline': [
					'error',
					'never'
				],
				'function-paren-newline': [
					'error',
					'never'
				],
				'generator-star-spacing': [
					'error',
					{
						after: false,
						anonymous: 'neither',
						before: false,
						method: 'neither',
						named: 'neither'
					}
				],
				'getter-return': [
					'error',
					{
						allowImplicit: false
					}
				],
				'grouped-accessor-pairs': [
					'error',
					'getBeforeSet'
				],
				'guard-for-in': ['error'],
				'id-denylist': [
					'error',
					'callback',
					'cb',
					'e',
					'err'
				],
				'id-length': [
					'error',
					{
						min: 2,
						properties: 'always'
					}
				],
				'id-match': [
					'error',
					'(?:[a-z]+|[A-Z]+|^)([a-z]|)*',
					{
						ignoreDestructuring: false,
						onlyDeclarations: false,
						properties: true
					}
				],
				'implicit-arrow-linebreak': [
					'error',
					'beside'
				],
				indent: ['off'],
				'init-declarations': ['off'],
				'jsx-quotes': [
					'error',
					'prefer-single'
				],
				'key-spacing': ['off'],
				'keyword-spacing': ['off'],
				'line-comment-position': [
					'error',
					{
						applyDefaultIgnorePatterns: false,
						ignorePattern: 'eslint',
						position: 'above'
					}
				],
				'linebreak-style': ['off'],
				'lines-around-comment': ['off'],
				'lines-between-class-members': ['off'],
				'max-classes-per-file': [
					'error',
					1
				],
				'max-depth': [
					'error',
					{
						max: 4
					}
				],
				'max-len': [
					'error',
					{
						code: 330
					}
				],
				'max-lines': [
					'error',
					{
						max: 300,
						skipBlankLines: true,
						skipComments: true
					}
				],
				'max-lines-per-function': [
					'error',
					{
						IIFEs: true,
						max: 150,
						skipBlankLines: true,
						skipComments: true
					}
				],
				'max-nested-callbacks': [
					'error',
					{
						max: 5
					}
				],
				'max-params': [
					'error',
					{
						max: 4
					}
				],
				'max-statements': [
					'error',
					10,
					{
						ignoreTopLevelFunctions: true
					}
				],
				'max-statements-per-line': [
					'error',
					{
						max: 1
					}
				],
				'multiline-comment-style': [
					'error',
					'bare-block'
				],
				'multiline-ternary': [
					'error',
					'never'
				],
				'new-cap': ['off'],
				'new-parens': [
					'error',
					'always'
				],
				'newline-per-chained-call': [
					'error',
					{
						ignoreChainWithDepth: 2
					}
				],
				'no-alert': ['error'],
				'no-array-constructor': ['error'],
				'no-async-promise-executor': ['error'],
				'no-await-in-loop': ['error'],
				'no-bitwise': [
					'error',
					{
						int32Hint: false
					}
				],
				'no-caller': ['error'],
				'no-case-declarations': ['error'],
				'no-class-assign': ['error'],
				'no-compare-neg-zero': ['error'],
				'no-cond-assign': [
					'error',
					'always'
				],
				'no-confusing-arrow': [
					'error',
					{
						allowParens: false
					}
				],
				'no-console': ['error'],
				'no-const-assign': ['error'],
				'no-constant-condition': [
					'error',
					{
						checkLoops: true
					}
				],
				'no-constructor-return': ['error'],
				'no-continue': ['error'],
				'no-control-regex': ['error'],
				'no-debugger': ['error'],
				'no-delete-var': ['error'],
				'no-div-regex': ['error'],
				'no-dupe-args': ['error'],
				'no-dupe-class-members': ['off'],
				'no-dupe-else-if': ['error'],
				'no-dupe-keys': ['error'],
				'no-duplicate-case': ['error'],
				'no-duplicate-imports': ['off'],
				'no-else-return': ['off'],
				'no-empty': [
					'error',
					{
						allowEmptyCatch: false
					}
				],
				'no-empty-character-class': ['error'],
				'no-empty-function': ['off'],
				'no-empty-pattern': ['error'],
				'no-eq-null': ['error'],
				'no-eval': [
					'error',
					{
						allowIndirect: false
					}
				],
				'no-ex-assign': ['error'],
				'no-extend-native': ['error'],
				'no-extra-bind': ['error'],
				'no-extra-boolean-cast': [
					'error',
					{
						enforceForLogicalOperands: true
					}
				],
				'no-extra-label': ['error'],
				'no-extra-parens': ['off'],
				'no-extra-semi': ['off'],
				'no-fallthrough': ['error'],
				'no-floating-decimal': ['off'],
				'no-func-assign': ['error'],
				'no-global-assign': ['error'],
				'no-implicit-coercion': [
					'error',
					{
						'boolean': true,
						disallowTemplateShorthand: true,
						number: true,
						string: true
					}
				],
				'no-implicit-globals': [
					'error',
					{
						lexicalBindings: true
					}
				],
				'no-implied-eval': ['off'],
				'no-import-assign': ['error'],
				'no-inline-comments': ['error'],
				'no-inner-declarations': [
					'error',
					'both'
				],
				'no-invalid-regexp': [
					'error',
					{
						allowConstructorFlags: [
							'u',
							'y'
						]
					}
				],
				'no-invalid-this': ['off'],
				'no-irregular-whitespace': [
					'error',
					{
						skipComments: false,
						skipRegExps: false,
						skipStrings: false,
						skipTemplates: false
					}
				],
				'no-iterator': ['error'],
				'no-label-var': ['error'],
				'no-labels': [
					'error',
					{
						allowLoop: false,
						allowSwitch: false
					}
				],
				'no-lone-blocks': ['error'],
				'no-lonely-if': ['error'],
				'no-loop-func': ['off'],
				'no-loss-of-precision': ['off'],
				'no-magic-numbers': ['off'],
				'no-misleading-character-class': ['error'],
				'no-mixed-operators': [
					'error',
					{
						allowSamePrecedence: true,
						groups: [
							[
								'+',
								'-',
								'*',
								'/',
								'%',
								'**'
							],
							[
								'&',
								'|',
								'^',
								'~',
								'<<',
								'>>',
								'>>>'
							],
							[
								'==',
								'!=',
								'===',
								'!==',
								'>',
								'>=',
								'<',
								'<='
							],
							[
								'&&',
								'||'
							],
							[
								'in',
								'instanceof'
							]
						]
					}
				],
				'no-mixed-spaces-and-tabs': ['error'],
				'no-multi-assign': ['error'],
				'no-multi-spaces': [
					'error',
					{
						ignoreEOLComments: false
					}
				],
				'no-multi-str': ['error'],
				'no-multiple-empty-lines': [
					'error',
					{
						max: 1,
						maxBOF: 0,
						maxEOF: 1
					}
				],
				'no-negated-condition': ['error'],
				'no-nested-ternary': ['error'],
				'no-new': ['error'],
				'no-new-func': ['error'],
				'no-new-object': ['error'],
				'no-new-symbol': ['error'],
				'no-new-wrappers': ['error'],
				'no-null/no-null': ['off'],
				'no-obj-calls': ['error'],
				'no-octal': ['error'],
				'no-octal-escape': ['error'],
				'no-param-reassign': [
					'error',
					{
						props: true
					}
				],
				'no-plusplus': ['off'],
				'no-promise-executor-return': ['error'],
				'no-proto': ['error'],
				'no-prototype-builtins': ['error'],
				'no-redeclare': ['off'],
				'no-regex-spaces': ['error'],
				'no-restricted-exports': ['error'],
				'no-restricted-globals': [
					'error',
					{
						message: 'Use local parameter instead.',
						name: 'event'
					},
					{
						message: 'Do not commit fdescribe.  Use describe instead.',
						name: 'fdescribe'
					}
				],
				'no-restricted-imports': ['off'],
				'no-restricted-properties': [
					'error',
					{
						message: 'Please use Object.defineProperty instead.',
						property: '__defineGetter__'

					}
				],
				'no-restricted-syntax': [
					'error',
					{
						message: 'Use dot notation instead.',
						selector: 'WithStatement'
					}
				],
				'no-return-assign': [
					'error',
					'always'
				],
				'no-return-await': ['off'],
				'no-script-url': ['error'],
				'no-self-assign': [
					'error',
					{
						props: true
					}
				],
				'no-self-compare': ['error'],
				'no-sequences': ['error'],
				'no-setter-return': ['error'],
				'no-shadow': ['off'],
				'no-shadow-restricted-names': ['error'],
				'no-sparse-arrays': ['error'],
				'no-tabs': [
					'error',
					{
						allowIndentationTabs: true
					}
				],
				'no-template-curly-in-string': ['error'],
				'no-ternary': ['off'],
				'no-this-before-super': ['error'],
				'no-throw-literal': ['off'],
				'no-trailing-spaces': [
					'error',
					{
						ignoreComments: false,
						skipBlankLines: true

					}
				],
				'no-undef': [
					'off',
					{
						'typeof': true
					}
				],
				'no-undef-init': ['error'],
				'no-undefined': ['error'],
				'no-underscore-dangle': [
					'error',
					{
						allowAfterSuper: false,
						allowAfterThis: false,
						allowAfterThisConstructor: false,
						allowFunctionParams: false,
						enforceInMethodNames: true
					}
				],
				'no-unexpected-multiline': ['error'],
				'no-unmodified-loop-condition': ['error'],
				'no-unneeded-ternary': [
					'error',
					{
						defaultAssignment: false
					}
				],
				'no-unreachable': ['error'],
				'no-unreachable-loop': ['error'],
				'no-unsafe-finally': ['error'],
				'no-unsafe-negation': [
					'error',
					{
						enforceForOrderingRelations: true
					}
				],
				'no-unused-expressions': ['off'],
				'no-unused-labels': ['error'],
				'no-unused-vars': ['off'],
				'no-use-before-define': ['off'],
				'no-useless-backreference': ['error'],
				'no-useless-call': ['error'],
				'no-useless-catch': ['error'],
				'no-useless-computed-key': [
					'error',
					{
						enforceForClassMembers: true
					}
				],
				'no-useless-concat': ['error'],
				'no-useless-constructor': ['off'],
				'no-useless-escape': ['error'],
				'no-useless-rename': [
					'error',
					{
						ignoreDestructuring: false,
						ignoreExport: false,
						ignoreImport: false
					}
				],
				'no-useless-return': ['error'],
				'no-var': ['error'],
				'no-void': [
					'error',
					{
						allowAsStatement: false
					}
				],
				'no-warning-comments': [
					'error',
					{
						location: 'anywhere',
						terms: ['todo']
					}
				],
				'no-whitespace-before-property': ['error'],
				'no-with': ['error'],
				'nonblock-statement-body-position': [
					'error',
					'beside'
				],
				'object-curly-newline': [
					'error',
					{
						ExportDeclaration: 'never',
						ImportDeclaration: 'never',
						ObjectExpression: {
							minProperties: 1,
							multiline: true
						},
						ObjectPattern: 'never'
					}
				],
				'object-curly-spacing': ['off'],
				'object-property-newline': [
					'error',
					{
						allowAllPropertiesOnSameLine: false
					}
				],
				'object-shorthand': [
					'error',
					'never'
				],
				'one-var': [
					'error',
					'never'
				],
				'one-var-declaration-per-line': [
					'error',
					'always'
				],
				'operator-assignment': [
					'error',
					'always'
				],
				'operator-linebreak': [
					'error',
					'after'
				],
				'padded-blocks': [
					'error',
					'never'
				],
				'padding-line-between-statements': ['off'],
				'prefer-arrow-callback': [
					'error',
					{
						allowNamedFunctions: false,
						allowUnboundThis: false
					}
				],
				'prefer-const': [
					'error',
					{
						destructuring: 'all',
						ignoreReadBeforeAssign: false
					}
				],
				'prefer-destructuring': [
					'error',
					{
						AssignmentExpression:
						{
							array: true,
							object: true
						},
						VariableDeclarator:
						{
							array: false,
							object: true
						}
					},
					{
						enforceForRenamedProperties: false
					}
				],
				'prefer-exponentiation-operator': ['error'],
				'prefer-named-capture-group': ['error'],
				'prefer-numeric-literals': ['error'],
				'prefer-object-spread': ['error'],
				'prefer-promise-reject-errors': [
					'error',
					{
						allowEmptyReject: false
					}
				],
				'prefer-regex-literals': [
					'error',
					{
						disallowRedundantWrapping: true
					}
				],
				'prefer-rest-params': ['error'],
				'prefer-spread': ['error'],
				'prefer-template': ['error'],
				'quote-props': [
					'error',
					'as-needed',
					{
						keywords: true,
						numbers: true,
						unnecessary: true
					}
				],
				quotes: ['off'],
				radix: [
					'error',
					'always'
				],
				'require-atomic-updates': ['error'],
				'require-await': ['off'],
				'require-unicode-regexp': ['error'],
				'require-yield': ['error'],
				'rest-spread-spacing': [
					'error',
					'never'
				],
				semi: ['off'],
				'semi-spacing': [
					'error',
					{
						after: true,
						before: false
					}
				],
				'semi-style': [
					'error',
					'last'
				],
				'sort-imports': [
					'error',
					{
						allowSeparatedGroups: true,
						ignoreCase: true,
						ignoreDeclarationSort: true,
						ignoreMemberSort: false,
						memberSyntaxSortOrder: [
							'all',
							'single',
							'multiple',
							'none'
						]
					}
				],
				'sort-keys': [
					'error',
					'asc',
					{
						caseSensitive: false,
						minKeys: 6,
						natural: true
					}
				],
				'sort-vars': [
					'error',
					{
						ignoreCase: true
					}
				],
				'space-before-blocks': ['off'],
				'space-before-function-paren': ['off'],
				'space-in-parens': [
					'error',
					'never'
				],
				'space-infix-ops': ['off'],
				'space-unary-ops': [
					'error',
					{
						nonwords: false,
						overrides: {},
						words: true
					}
				],
				'spaced-comment': [
					'error',
					'always',
					{
						block: {
							balanced: true,
							exceptions: [],
							markers: []
						},
						line: {
							exceptions: [],
							markers: []
						}
					}
				],
				strict: [
					'error',
					'never'
				],
				'switch-colon-spacing': [
					'error',
					{
						after: true,
						before: false
					}
				],
				'symbol-description': ['error'],
				'template-curly-spacing': [
					'error',
					'never'
				],
				'template-tag-spacing': [
					'error',
					'always'
				],
				'unicode-bom': [
					'error',
					'never'
				],
				'unicorn/filename-case': [
					'error',
					{
						'case': 'kebabCase'
					}
				],
				'use-isnan': [
					'error',
					{
						enforceForIndexOf: true,
						enforceForSwitchCase: true
					}
				],
				'valid-typeof': [
					'error',
					{
						requireStringLiterals: true
					}
				],
				'vars-on-top': ['error'],
				'wrap-iife': [
					'error',
					'outside',
					{
						functionPrototypeMethods: false
					}
				],
				'wrap-regex': ['error'],
				'yield-star-spacing': [
					'error',
					'neither'
				],
				yoda: [
					'error',
					'never',
					{
						exceptRange: false
					}
				]
			}
		},
		{
			'extends': ['plugin:@angular-eslint/template/recommended'],
			files: ['*.html'],
			rules: {
				'@angular-eslint/template/accessibility-alt-text': ['error'],
				'@angular-eslint/template/accessibility-elements-content': ['error'],
				'@angular-eslint/template/accessibility-label-for': ['error'],
				'@angular-eslint/template/accessibility-label-has-associated-control': ['error'],
				'@angular-eslint/template/accessibility-table-scope': ['error'],
				'@angular-eslint/template/accessibility-valid-aria': ['error'],
				'@angular-eslint/template/banana-in-box': ['error'],
				'@angular-eslint/template/click-events-have-key-events': ['error'],
				'@angular-eslint/template/conditional-complexity': [
					'error',
					{
						maxComplexity: 4
					}
				],
				'@angular-eslint/template/cyclomatic-complexity': [
					'error',
					{
						maxComplexity: 6
					}
				],
				'@angular-eslint/template/eqeqeq': [
					'error',
					{
						allowNullOrUndefined: false
					}
				],
				'@angular-eslint/template/i18n': ['off'],
				'@angular-eslint/template/mouse-events-have-key-events': ['error'],
				'@angular-eslint/template/no-any': ['error'],
				'@angular-eslint/template/no-autofocus': ['error'],
				'@angular-eslint/template/no-call-expression': ['error'],
				'@angular-eslint/template/no-distracting-elements': ['error'],
				'@angular-eslint/template/no-duplicate-attributes': [
					'error',
					{
						allowTwoWayDataBinding: true
					}
				],
				'@angular-eslint/template/no-inline-styles': [
					'error',
					{
						allowBindToStyle: false,
						allowNgStyle: false
					}
				],
				'@angular-eslint/template/no-interpolation-in-attributes': ['error'],
				'@angular-eslint/template/no-negated-async': ['error'],
				'@angular-eslint/template/no-positive-tabindex': ['error'],
				'@angular-eslint/template/use-track-by-function': ['error'],
				'@typescript-eslint/quotes': [
					'error',
					'double',
					{
						allowTemplateLiterals: true,
						avoidEscape: true
					}
				],
				'max-len': [
					'error',
					{
						code: 160
					}
				],
				quotes: ['off']
			}
		}
	]
};
