import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { TabService } from './tab.service';

@Component({
	selector: '.tab-btn, .tab-content, .tab-link, .tabs',
	templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnInit {
	@HostBinding('attr.aria-controls')
	public get hostAriaControls(): null | string {
		return this.class.includes('tab-btn') ? `tab-content-${this.uniqueTabId}` : null;
	}

	@HostBinding('attr.aria-labelledby')
	public get hostAriaLabelledby(): null | string {
		return this.class.includes('tab-content') ? `tab-btn-${this.uniqueContentId}` : null;
	}

	@HostBinding('attr.aria-posinset')
	public get hostAriaPosinset(): null | string {
		return this.class.includes('tab-btn') ? `${this.uniqueTabId + 1}` : null;
	}

	@HostBinding('attr.aria-pressed')
	public get hostAriaPressed(): null | string {
		return this.class.includes('tab-btn') ? 'false' : null;
	}

	@HostBinding('attr.aria-setsize')
	public get hostAriaSetsize(): null | string {
		return this.class.includes('tab-btn') ? `${this.tabButtons.length}` : null;
	}

	@HostBinding('attr.id')
	public get hostId(): null | string {
		if (this.class.includes('tab-btn')) {
			return `tab-btn-${this.uniqueTabId}`;
		} else if (this.class.includes('tab-content')) {
			return `tab-content-${this.uniqueContentId}`;
		} else {
			return null;
		}
	}

	@HostBinding('attr.role')
	public get hostRole(): null | string {
		if (this.class.includes('tab-btn')) {
			return 'tab';
		} else if (this.class.includes('tab-content')) {
			return 'tabpanel';
		} else if (this.class.includes('tabs')) {
			return 'tablist';
		} else {
			return null;
		}
	}

	@HostListener('click', ['$event.target'])
	public onClick(event: HTMLButtonElement): void {
		this.renderer2.setAttribute(event, 'aria-pressed', 'true');
	}

	@Input() public class: string;

	private get tabButtons(): ElementRef<HTMLButtonElement>[] {
		return this.tabService.tabButtons;
	}

	private get tabContents(): ElementRef<HTMLElement>[] {
		return this.tabService.tabContents;
	}

	private uniqueContentId: null | number;
	private uniqueTabId: number;

	public constructor(private elementRef: ElementRef, private renderer2: Renderer2, private tabService: TabService) {
		this.class = '';
		this.uniqueContentId = this.tabService.uniqueContentId;
		this.uniqueTabId = this.tabService.uniqueTabId;
	}

	public ngOnInit(): void {
		if (this.class.includes('tab-btn')) {
			this.tabButtons.push(this.elementRef.nativeElement);
			this.uniqueTabId = this.tabService.uniqueTabId++;
		} else if (this.class.includes('tab-content')) {
			this.tabContents.push(this.elementRef.nativeElement);
			this.uniqueContentId = this.tabService.uniqueContentId++;
		} else {
			this.uniqueContentId = null;
			this.uniqueTabId = 0;
		}
	}
}
