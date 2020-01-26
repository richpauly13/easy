import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-multi-column, .columns',
	templateUrl: './multi-column.component.html',
	styleUrls: ['./multi-column.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiColumnComponent {

}
