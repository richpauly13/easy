export interface Schema {

	// Whether the alert has a close button.
	close: boolean;

	// The alert text.
	message: string;

	// The name of the alert.
	name: string;

	// The path to create the alert.
	path?: string;

	// The name of the project.
	project?: string;

	// The type of alert.
	type: 'bad' | 'good' | 'info' | 'warn';
}
