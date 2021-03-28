import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '.checkbox-group, .field-group, .fieldset, .form-field, .form-group, .form-group-inline, .form-label, .radio-group',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {

}
