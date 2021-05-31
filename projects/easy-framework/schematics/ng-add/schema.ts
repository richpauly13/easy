/* eslint-disable @typescript-eslint/no-type-alias */
export type Schema = {

	// The component module(s) to add.
	components: ['Alert' | 'Badge' | 'Button' | 'Card' | 'Form' | 'Progress' | 'Slider' | 'Spinner' | 'Switch' | 'Tab' | 'Table'] | ['All'];

	// The layout module(s) to add.
	layouts: ['All'] | ['Flexbox' | 'Grid' | 'Nav'];

	// The name of the project.
	project: string;
};
