import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-collapse',
	templateUrl: './collapse.component.html',
	styleUrls: ['./collapse.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollapseComponent {

}
