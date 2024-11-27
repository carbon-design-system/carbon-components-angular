const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config({
	files: ["src/**/*.ts"],
	extends: [
		eslint.configs.recommended,
		...tseslint.configs.recommended,
		...tseslint.configs.stylistic,
		...angular.configs.tsRecommended,
	],
	processor: angular.processInlineTemplates,
	rules: {
		"@angular-eslint/component-class-suffix": "off",
		"@angular-eslint/component-selector": [
			"error",
			{
				type: "element",
				prefix: ["ibm", "cds", "app", "test"],
				style: "kebab-case"
			}
		],
		"@angular-eslint/directive-class-suffix": "off",
		"@angular-eslint/directive-selector": [
			"error",
			{
				type: "attribute",
				prefix: ["ibm", "cds", "app", "test"],
				style: "camelCase"
			}
		],
		"@angular-eslint/no-host-metadata-property": "error",
		"@angular-eslint/no-input-rename": "error",
		"@angular-eslint/no-inputs-metadata-property": "error",
		"@angular-eslint/no-output-native": "warn",
		"@angular-eslint/no-output-on-prefix": "warn",
		"@angular-eslint/no-output-rename": "error",
		"@angular-eslint/no-outputs-metadata-property": "error",
		"@angular-eslint/use-lifecycle-interface": "error",
		"@angular-eslint/use-pipe-transform-interface": "error",
		"@typescript-eslint/adjacent-overload-signatures": "off",
		"@typescript-eslint/array-type": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/class-literal-property-style": "off",
		"@typescript-eslint/consistent-generic-constructors": "off",
		"@typescript-eslint/consistent-indexed-object-style": "off",
		"@typescript-eslint/member-ordering": [
			"error",
			{
				default: [
					"public-static-field",
					"protected-static-field",
					"private-static-field",
					"public-static-method",
					"protected-static-method",
					"private-static-method",
					"public-instance-field",
					"protected-instance-field",
					"private-instance-field",
					"public-constructor",
					"protected-constructor",
					"private-constructor",
					"public-instance-method",
					"protected-instance-method",
					"private-instance-method"
				]
			}
		],
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "class",
				format: ["PascalCase"]
			}
		],
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-inferrable-types": "error",
		"@typescript-eslint/no-unsafe-function-type": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-wrapper-object-types": "off",
		"@typescript-eslint/prefer-for-of": "off",
		"@typescript-eslint/triple-slash-reference": "off",
		"brace-style": ["error", "1tbs", {"allowSingleLine": true}],
		"comma-dangle": ["error", "never"],
		"comma-spacing": ["error", {"before": false, "after": true}],
		"curly": "error",
		"eol-last": "error",
		"eqeqeq": ["error", "always", {null: "ignore"}],
		"guard-for-in": "error",
		"indent": ["error", "tab", {"SwitchCase": 1}],
		"keyword-spacing": ["error", {"before": true, "after": true}],
		"max-len": ["error", {code: 140}],
		"no-bitwise": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-console": "off",
		"no-debugger": "error",
		"no-duplicate-case": "error",
		"no-empty": "off",
		"no-eval": "error",
		"no-new-wrappers": "error",
		"no-prototype-builtins": "off",
		"no-restricted-globals": ["error", "event", "fdescribe"],
		"no-self-assign": "off",
		"no-shadow": "off",
		"no-trailing-spaces": "error",
		"no-underscore-dangle": ["error", {
			"allowAfterThis": true,
			"allowAfterSuper": true,
			"allowAfterThisConstructor": true,
			"enforceInMethodNames": false
		}],
		"no-unused-expressions": "off",
		"no-useless-catch": "off",
		"no-var": "error",
		"prefer-const": "off",
		"quotes": ["error", "double", {"avoidEscape": true, "allowTemplateLiterals": true}],
		"radix": "error",
		"semi": ["error", "always"],
		"sort-keys": "off",
		"space-before-blocks": "error",
		"space-before-function-paren": "off",
		"space-infix-ops": "error",
		"spaced-comment": "off",
	}
	},
	{
		// Everything in this config object targets our HTML files (external templates,
		// and inline templates as long as we have the `processor` set on our TypeScript config above)
		extends: [
			...angular.configs.templateRecommended,
			...angular.configs.templateAccessibility,
		],
		files: ["**/*.html"],
		rules: {
			"@angular-eslint/template/elements-content": "warn",
			"@angular-eslint/template/label-has-associated-control": "warn",
			"@angular-eslint/template/interactive-supports-focus": "warn",
			"@angular-eslint/template/click-events-have-key-events": "warn",
			"@angular-eslint/template/role-has-required-aria": "warn",
			"@angular-eslint/template/alt-text": "warn"
		},
	},

	);
