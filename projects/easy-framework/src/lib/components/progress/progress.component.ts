import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ProgressService } from './progress.service';

@Component({
	selector: '..progress, .progress-label, .progress-striped',
	templateUrl: './progress.component.html',
	styleUrls: ['./progress.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressComponent implements OnInit {
	@HostBinding('attr.for')
	public get hostFor(): null | string {
		return this.class.includes('progress-label') ? this.for || `progress-${this.uniqueProgressLabelId}` : null;
	}

	@HostBinding('attr.id')
	public get hostId(): null | string {
		return this.class.includes('progress-label') ? null : this.id || `progress-${this.uniqueProgressInputId}`;
	}

	@HostBinding('attr.max')
	public get hostMax(): null | string {
		if (this.class.includes('progress-label')) {
			return null;
		} else if (Number(this.max) > 0) {
			return this.max;
		} else {
			return '100';
		}
	}

	@HostBinding('attr.position')
	public get hostPosition(): null | string {
		if (this.class.includes('progress-label')) {
			return null;
		} else if (this.hostValue) {
			return String(Number(this.hostValue) / Number(this.hostMax));
		} else {
			return '-1';
		}
	}

	@HostBinding('attr.value')
	public get hostValue(): null | string {
		if (this.class.includes('progress-label') || !this.value) {
			return null;
		} else if (Number(this.value) >= 0 && Number(this.value) <= Number(this.max)) {
			return this.value;
		} else {
			return '0';
		}
	}

	@Input() public class: string;
	@Input() public for: null | string;
	@Input() public id: null | string;
	@Input() public max: null | string;
	@Input() public value: null | string;

	private uniqueProgressInputId: number;
	private uniqueProgressLabelId: number;

	public constructor(private progressService: ProgressService) {
		this.class = '';
		this.for = null;
		this.id = null;
		this.max = '100';
		this.value = null;
		this.uniqueProgressInputId = this.progressService.uniqueProgressInputId;
		this.uniqueProgressLabelId = this.progressService.uniqueProgressLabelId;
	}

	public ngOnInit(): void {
		this.uniqueProgressInputId = this.class.includes('progress-label') ? 0 : this.progressService.uniqueProgressInputId++;
		this.uniqueProgressLabelId = this.class.includes('progress-label') ? this.progressService.uniqueProgressLabelId++ : 0;
	}
}
