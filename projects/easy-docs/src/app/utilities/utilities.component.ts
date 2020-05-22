import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'docs-utilities',
	templateUrl: './utilities.component.html',
	styleUrls: ['./utilities.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UtilitiesComponent implements OnInit {
	public navs: string[];

	public ngOnInit(): void {
		this.navs = [
			'color',
			'dimension',
			'display',
			'position',
			'space',
			'text',
			'typography',
			'visibility'
		];
	}
}
