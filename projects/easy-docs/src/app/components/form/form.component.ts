import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {

}
