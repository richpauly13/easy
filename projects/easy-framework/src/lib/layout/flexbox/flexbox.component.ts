import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-flexbox, .col, .col-full, .row, .row-full',
	templateUrl: './flexbox.component.html',
	styleUrls: ['./flexbox.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlexboxComponent {

}
