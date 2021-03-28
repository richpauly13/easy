import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '.nav-h, .nav-toggle, .nav-v',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {

}
