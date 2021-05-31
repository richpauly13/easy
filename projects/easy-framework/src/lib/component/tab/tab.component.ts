import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { TabService } from './tab.service';

@Component({
	selector: 'button.tab-btn, .tab-content, .tabs',
	templateUrl: './tab.component.html',
	styleUrls: [
		'./tab.component.scss'
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnInit {
	@HostBinding('attr.aria-controls')
	public get hostAriaControls(): string | null {
		return this.class.includes('tab-btn') ? `tab-content-${this.uniqueTabId}` : null;
	}

	@HostBinding('attr.aria-labelledby')
	public get hostAriaLabelledby(): string | null {
		return this.class.includes('tab-content') ? `tab-btn-${this.uniqueContentId}` : null;
	}

	@HostBinding('attr.aria-posinset')
	public get hostAriaPosinset(): string | null {
		return this.class.includes('tab-btn') ? String(this.uniqueTabId + 1) : null;
	}

	@HostBinding('attr.aria-selected')
	public get hostAriaSelected(): string | null {
		return this.class.includes('tab-btn') ? 'false' : null;
	}

	@HostBinding('attr.aria-setsize')
	public get hostAriaSetsize(): string | null {
		return this.class.includes('tab-btn') ? String(this.tabButtons.length) : null;
	}

	@HostBinding('attr.id')
	public get hostId(): string | null {
		if (this.class.includes('tab-btn')) {
			return `tab-btn-${this.uniqueTabId}`;
		} else if (this.class.includes('tab-content')) {
			return `tab-content-${this.uniqueContentId}`;
		} else {
			return null;
		}
	}

	@HostBinding('attr.role')
	public get hostRole(): string | null {
		if (this.class.includes('tab-btn')) {
			return 'tab';
		} else if (this.class.includes('tab-content')) {
			return 'tabpanel';
		} else {
			return 'tablist';
		}
	}

	@HostBinding('attr.type')
	public get hostType(): string | null {
		return this.class.includes('tab-btn') ? this.type ?? 'button' : null;
	}

	@HostListener('click', [
		'$event.target'
	])
	public onClick(event: HTMLButtonElement): void {
		this.tabButtons.forEach((tabButton: HTMLButtonElement) => {
			if (tabButton === event) {
				this.renderer2.addClass(event, 'active');
				this.renderer2.setAttribute(event, 'aria-selected', 'true');
			} else {
				this.renderer2.removeClass(tabButton, 'active');
				this.renderer2.setAttribute(tabButton, 'aria-selected', 'false');
			}
		});

		this.tabContents.forEach((tabContent: HTMLElement) => {
			if (tabContent.getAttribute('id') === event.getAttribute('aria-controls')) {
				this.renderer2.removeAttribute(tabContent, 'aria-hidden');
				this.renderer2.removeClass(tabContent, 'hide');
			} else {
				this.renderer2.setAttribute(tabContent, 'aria-hidden', 'true');
				this.renderer2.addClass(tabContent, 'hide');
			}
		});
	}

	@Input() public class: string;
	@Input() public type: string | null;

	private get tabButtons(): HTMLButtonElement[] {
		return this.tabService.tabButtons;
	}

	private get tabContents(): HTMLElement[] {
		return this.tabService.tabContents;
	}

	private uniqueContentId: number | null;
	private uniqueTabId: number;

	public constructor(private elementRef: ElementRef, private renderer2: Renderer2, private tabService: TabService) {
		this.class = '';
		this.type = '';
		this.uniqueContentId = this.tabService.uniqueContentId;
		this.uniqueTabId = this.tabService.uniqueTabId;
	}

	public ngOnInit(): void {
		if (this.class.includes('tab-btn')) {
			this.tabButtons.push(this.elementRef.nativeElement as HTMLButtonElement);
			this.uniqueTabId = this.tabService.uniqueTabId++;
		} else if (this.class.includes('tab-content')) {
			this.renderer2.setAttribute(this.elementRef.nativeElement, 'aria-hidden', 'true');
			this.renderer2.addClass(this.elementRef.nativeElement, 'hide');
			this.tabContents.push(this.elementRef.nativeElement as HTMLButtonElement);
			this.uniqueContentId = this.tabService.uniqueContentId++;
		} else {
			this.uniqueContentId = null;
			this.uniqueTabId = 0;
		}
	}
}
