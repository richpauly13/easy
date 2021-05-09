import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { FormService } from './form.service';

@Component({
	selector: '.checkbox-label, .checkbox-group, .field-group, .field-group-title, .fieldset, .form-field, .form-group, .form-group-inline, .form-label, .radio-label, .radio-group',
	templateUrl: './form.component.html',
	styleUrls: [
		'./form.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
	@HostBinding('attr.class')
	public get hostClass(): string {
		if (this.class.includes('form-label') && !this.class.includes('pad-b-')) {
			return `${this.class} pad-b-xs`;
		} else if ((this.class.includes('checkbox-label') || this.class.includes('radio-label')) && !this.class.includes('pad-l-') && !this.class.includes('pad-r-') && !this.class.includes('pad-lr-')) {
			return `${this.class} pad-lr-sm`;
		} else if (this.class.includes('field-group') && !this.class.includes('pad-t-') && !this.class.includes('pad-b-') && !this.class.includes('pad-tb-')) {
			return `${this.class} pad-tb-sm`;
		} else if (this.class.includes('form-field') && !this.class.includes('pad-')) {
			return `${this.class} pad-a-xs`;
		} else {
			return this.class;
		}
	}

	@HostBinding('attr.for')
	public get hostFor(): string | null {
		return this.class.includes('form-label') || this.class.includes('checkbox-label') || this.class.includes('radio-label') ? this.for ?? `form-field-${this.uniqueFormFieldLabelId}` : null;
	}

	@HostBinding('attr.id')
	public get hostId(): string | null {
		return this.class.includes('form-field') ? this.id ?? `form-field-${this.uniqueFormFieldId}` : null;
	}

	@HostBinding('attr.role')
	public get hostRole(): string | null {
		return this.class.includes('radio-group') ? 'radiogroup' : null;
	}

	@Input() public class: string;
	@Input() public for: string | null;
	@Input() public id: string | null;

	private uniqueFormFieldId: number;
	private uniqueFormFieldLabelId: number;

	public constructor(private formService: FormService) {
		this.class = '';
		this.for = null;
		this.id = null;
		this.uniqueFormFieldId = this.formService.uniqueFormFieldId;
		this.uniqueFormFieldLabelId = this.formService.uniqueFormFieldLabelId;
	}

	public ngOnInit(): void {
		this.uniqueFormFieldId = this.class.includes('form-field') ? this.formService.uniqueFormFieldId++ : 0;
		this.uniqueFormFieldLabelId = this.class.includes('-label') ? this.formService.uniqueFormFieldLabelId++ : 0;
	}
}
