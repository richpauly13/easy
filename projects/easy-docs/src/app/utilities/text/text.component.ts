import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'docs-text',
	templateUrl: './text.component.html',
	styleUrls: ['./text.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextComponent {

}
