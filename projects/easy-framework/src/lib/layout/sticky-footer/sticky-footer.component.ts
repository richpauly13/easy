import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-sticky-footer',
	templateUrl: './sticky-footer.component.html',
	styleUrls: ['./sticky-footer.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickyFooterComponent {

}
