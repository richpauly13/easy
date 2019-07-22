export interface Schema {

	// Whether the alert has a close button.
	close: boolean;

	// Flag to indicate if a directory is created.
	flat?: boolean;

	// Specifies whether to apply lint fixes after generating the component.
	lintFix: boolean;

	// The alert text.
	message: string;

	// Allows specification of the declaring module.
	module: string;

	// The name of the alert.
	name: string;

	// The path to create the alert.
	path?: string;

	// The name of the project.
	project?: string;

	// Specifies if a spec file is generated.
	spec: boolean;

	// The type of alert.
	type: 'bad' | 'good' | 'info' | 'warn';
}
