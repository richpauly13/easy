import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { SwitchService } from './switch.service';

@Component({
	selector: '.switch-circle, .switch-square, .switch-label',
	templateUrl: './switch.component.html',
	styleUrls: ['./switch.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchComponent implements OnInit {
	@HostBinding('attr.aria-label')
	public get hostAriaLabel(): string | null {
		if (this.class.includes('switch-label') && this.isChecked) {
			return 'on';
		} else if (this.class.includes('switch-label') && !this.isChecked) {
			return 'off';
		} else {
			return null;
		}
	}

	@HostBinding('attr.checked')
	public get hostChecked(): string | null {
		return this.class.includes('switch-label') ? null : String(this.isChecked);
	}

	@HostBinding('attr.class')
	public get hostClass(): string {
		return this.class.includes('switch-label') || this.class.includes('show-sr') ? this.class : `${this.class} show-sr`;
	}

	@HostBinding('attr.for')
	public get hostFor(): string | null {
		if (this.class.includes('switch-label') && this.for) {
			return this.for;
		} else if (this.class.includes('switch-label')) {
			return `switch-${this.uniqueSwitchLabelId}`;
		} else {
			return null;
		}
	}

	@HostBinding('attr.id')
	public get hostId(): string | null {
		if (this.class.includes('switch-label')) {
			return null;
		} else if (this.id) {
			return this.id;
		} else {
			return `switch-${this.uniqueSwitchInputId}`;
		}
	}

	@HostBinding('attr.role')
	public get hostRole(): string | null {
		return this.class.includes('switch-label') ? null : 'switch';
	}

	@HostListener('click', ['$event'])
	public onClick(): void {
		this.isChecked = !this.isChecked;
	}

	@Input() public class: string;
	@Input() public for: string | null;
	@Input() public id: string | null;

	private get isChecked(): boolean {
		return this.currentIsChecked;
	}

	private set isChecked(isChecked: boolean) {
		this.currentIsChecked = isChecked;
	}

	private currentIsChecked: boolean;
	private uniqueSwitchInputId: number;
	private uniqueSwitchLabelId: number;

	public constructor(private switchService: SwitchService) {
		this.class = '';
		this.currentIsChecked = false;
		this.for = null;
		this.id = null;
		this.uniqueSwitchInputId = this.switchService.uniqueSwitchInputId;
		this.uniqueSwitchLabelId = this.switchService.uniqueSwitchLabelId;
	}

	public ngOnInit(): void {
		this.uniqueSwitchInputId = this.class.includes('switch-label') ? 0 : this.switchService.uniqueSwitchInputId++;
		this.uniqueSwitchLabelId = this.class.includes('switch-label') ? this.switchService.uniqueSwitchLabelId++ : 0;
	}
}
