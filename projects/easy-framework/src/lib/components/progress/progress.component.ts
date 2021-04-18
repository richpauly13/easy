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
	public get hostFor(): string | null {
		if (this.class.includes('progress-label') && this.for) {
			return this.for;
		} else if (this.class.includes('progress-label')) {
			return `progress-${this.uniqueProgressLabelId}`;
		} else {
			return null;
		}
	}

	@HostBinding('attr.id')
	public get hostId(): string | null {
		if (this.class.includes('progress-label')) {
			return null;
		} else if (this.id) {
			return this.id;
		} else {
			return `progress-${this.uniqueProgressInputId}`;
		}
	}

	@HostBinding('attr.max')
	public get hostMax(): string | null {
		if (this.class.includes('progress-label')) {
			return null;
		} else if (Number(this.max) > 0) {
			return this.max;
		} else {
			return '100';
		}
	}

	@HostBinding('attr.position')
	public get hostPosition(): string | null {
		if (this.class.includes('progress-label')) {
			return null;
		} else if (this.hostValue) {
			return String(Number(this.hostValue) / Number(this.hostMax));
		} else {
			return '-1';
		}
	}

	@HostBinding('attr.value')
	public get hostValue(): string | null {
		if (this.class.includes('progress-label') || !this.value) {
			return null;
		} else if (Number(this.value) >= 0 && Number(this.value) <= Number(this.max)) {
			return this.value;
		} else {
			return '0';
		}
	}

	@Input() public class: string;
	@Input() public for: string | null;
	@Input() public id: string | null;
	@Input() public max: string | null;
	@Input() public value: string | null;

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
