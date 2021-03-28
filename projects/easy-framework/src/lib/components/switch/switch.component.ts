import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: '.switch-circle, .switch-rocker, .switch-square, .switch-label',
	templateUrl: './switch.component.html',
	styleUrls: ['./switch.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchComponent {
	@HostBinding('attr.aria-checked')
	public get hostAriaChecked(): null | string {
		return this.class.includes('switch-label') ? null : String(this.isChecked);
	}

	@HostBinding('attr.checked')
	public get hostChecked(): null | string {
		return this.isChecked ? String(this.isChecked) : null;
	}

	@HostBinding('attr.role')
	public get hostRole(): null | string {
		return this.class.includes('switch-label') ? null : 'switch';
	}

	@HostListener('change', ['$event'])
	public onInputChange(event: InputEvent): void {
		this.isChecked = (event.target as HTMLInputElement).checked;
	}

	@Input() public class: string;

	private get isChecked(): boolean {
		return this.currentIsChecked;
	}

	private set isChecked(isChecked: boolean) {
		this.currentIsChecked = isChecked;
	}

	private currentIsChecked: boolean;

	public constructor() {
		this.class = '';
		this.currentIsChecked = false;
	}
}
