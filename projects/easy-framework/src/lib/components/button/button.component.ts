import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
	selector: 'ez-button, .btn-xs, .btn-sm, .btn-md, .btn-lg, .btn-xl, .btn-full, .btn-group-col, .btn-group-full, .btn-group-row',
	styleUrls: [
		'./button.component.scss'
	],
	templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
	@HostBinding('attr.type')
	public set type(type: string) {
		type ? this.hostType = type : this.hostType = 'button';
	}

	public get type(): string {
		return this.hostType;
	}

	private hostType: string;

	public ngOnInit(): void {
		this.type = this.hostType;
	}
}
