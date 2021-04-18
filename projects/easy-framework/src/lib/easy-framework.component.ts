import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-root',
	templateUrl: './easy-framework.component.html',
	styleUrls: [
		'./easy-framework.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EasyComponent {

}
