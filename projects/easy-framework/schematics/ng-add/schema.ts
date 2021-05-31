/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
export enum Component {
	AlertModule = 'AlertModule',
	All = 'All',
	BadgeModule = 'BadgeModule',
	ButtonModule = 'ButtonModule',
	CardModule = 'CardModule',
	FormModule = 'FormModule',
	ProgressModule = 'ProgressModule',
	SliderModule = 'SliderModule',
	SpinnerModule = 'SpinnerModule',
	SwitchModule = 'SwitchModule',
	TableModule = 'TableModule',
	TabModule = 'TabModule'
}

export enum Layout {
	All = 'All',
	FlexboxModule = 'FlexboxModule',
	GridModule = 'GridModule',
	NavModule = 'NavModule'
}

export interface Schema {

	// The component module(s) to add.
	components: Component[];

	// The layout module(s) to add.
	layouts: Layout[];

	// The name of the project.
	project: string;
}
