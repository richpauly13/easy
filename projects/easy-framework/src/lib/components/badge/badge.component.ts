import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ez-badge, .badge-sm, .badge-md, .badge-lg',
	templateUrl: './badge.component.html',
	styleUrls: ['./badge.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {

}
