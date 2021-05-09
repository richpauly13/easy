import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabComponent } from './tab.component';

@Component({
	selector: '.mock-tab-btn',

	// eslint-disable-next-line @angular-eslint/component-max-inline-declarations
	template: `
		<button class="tab-btn" type="button">test 1</button>
		<button class="tab-btn">test 2</button>
		<p class="tab-content">tab-content 1</p>
		<p class="tab-content">tab-content 2</p>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
class MockTabComponent { }

describe('TabComponent', (): void => {
	let component: TabComponent;
	let fixture: ComponentFixture<TabComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				MockTabComponent,
				TabComponent
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(TabComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a hostAriaControls of tab-content-0', (): void => {
		component.class = 'tab-btn';

		expect(component.hostAriaControls).toEqual('tab-content-0');
	});

	it('should not have a hostAriaControls', (): void => {
		component.class = 'tabs';

		expect(component.hostAriaControls).toBeNull();
	});

	it('should have a hostAriaLabelledby of tab-btn-0', (): void => {
		component.class = 'tab-content';

		expect(component.hostAriaLabelledby).toEqual('tab-btn-0');
	});

	it('should not have a hostAriaLabelledby', (): void => {
		component.class = 'tabs';

		expect(component.hostAriaLabelledby).toBeNull();
	});

	it('should have a hostAriaPosinset of 1', (): void => {
		component.class = 'tab-btn';

		expect(component.hostAriaPosinset).toEqual('1');
	});

	it('should not have a hostAriaPosinset', (): void => {
		component.class = 'tabs';

		expect(component.hostAriaPosinset).toBeNull();
	});

	it('should have a hostAriaSelected of false', (): void => {
		component.class = 'tab-btn';

		expect(component.hostAriaSelected).toEqual('false');
	});

	it('should not have a hostAriaSelected', (): void => {
		component.class = 'tabs';

		expect(component.hostAriaSelected).toBeNull();
	});

	it('should have a hostAriaSetsize of 1', (): void => {
		component.class = 'tab-btn';

		component.ngOnInit();

		expect(component.hostAriaSetsize).toEqual('1');
	});

	it('should not have a hostAriaSetsize', (): void => {
		component.class = 'tabs';

		expect(component.hostAriaSetsize).toBeNull();
	});

	it('should have a hostId of tab-btn-0', (): void => {
		component.class = 'tab-btn';

		expect(component.hostId).toEqual('tab-btn-0');
	});

	it('should have a hostId of tab-content-0', (): void => {
		component.class = 'tab-content';

		component.ngOnInit();

		expect(component.hostId).toEqual('tab-content-0');
	});

	it('should not have a hostId', (): void => {
		component.class = 'tabs';

		component.ngOnInit();

		expect(component.hostId).toBeNull();
	});

	it('should have a hostRole of tab', (): void => {
		component.class = 'tab-btn';

		expect(component.hostRole).toEqual('tab');
	});

	it('should have a hostRole of tabpanel', (): void => {
		component.class = 'tab-content';

		expect(component.hostRole).toEqual('tabpanel');
	});

	it('should have a hostRole of tablist', (): void => {
		component.class = 'tabs';

		expect(component.hostRole).toEqual('tablist');
	});

	it('should have a hostType of button when type is set to button', (): void => {
		component.class = 'tab-btn';
		component.type = 'button';

		expect(component.hostType).toEqual('button');
	});

	it('should have a hostType of button when no type is set', (): void => {
		component.class = 'tab-btn';
		component.type = null;

		expect(component.hostType).toEqual('button');
	});

	it('should have mockButton1 with aria-selected of false', (): void => {
		const event: MouseEvent = new MouseEvent('click', {});
		const mockTabComponent: ComponentFixture<MockTabComponent> = TestBed.createComponent(MockTabComponent);
		const mockButton1: DebugElement = mockTabComponent.debugElement.queryAll(By.css('button'))[0];
		const mockButton2: DebugElement = mockTabComponent.debugElement.queryAll(By.css('button'))[1];

		(mockButton1.nativeElement as HTMLButtonElement).dispatchEvent(event);
		mockTabComponent.detectChanges();

		(mockButton2.nativeElement as HTMLButtonElement).dispatchEvent(event);
		mockTabComponent.detectChanges();

		expect((mockButton1.nativeElement as HTMLButtonElement).getAttribute('aria-selected')).toEqual('false');
	});
});
