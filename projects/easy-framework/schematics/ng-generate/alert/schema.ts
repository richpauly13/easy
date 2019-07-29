export interface Schema {

	// Whether the alert has a close button.
	close: boolean;

    // When true, the declaring module exports this component.
	export: boolean;

	// Flag to indicate if a directory is created.
	flat?: boolean;

    // When true, the declaring module imports the alert module in the declaring module.
	import?: boolean;

	// Specifies whether to apply lint fixes after generating the component.
	lintFix: boolean;

	// Specifies the alert text.
	message: string;

	// Allows specification of the declaring module.
	module: string;

	// Specifies the name of the alert.
	name: string;

	// The path to create the alert.
	path?: string;

	// The name of the project.
	project?: string;

	// When true, does not create 'spec.ts' test file for the new component.
	skipTests: boolean;

	// Specifies the type of alert.
	type: 'bad' | 'good' | 'info' | 'warn';
}
