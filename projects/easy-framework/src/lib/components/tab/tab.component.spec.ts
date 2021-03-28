import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabComponent } from './tab.component';

@Component({
	selector: '.mock-tab-btn',
	template: `<button class="tab-btn" type="button">test 1</button>`,
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
		}).compileComponents();
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

	it('should have a hostAriaPressed of false', (): void => {
		component.class = 'tab-btn';

		expect(component.hostAriaPressed).toEqual('false');
	});

	it('should not have a hostAriaPressed', (): void => {
		component.class = 'tabs';

		expect(component.hostAriaPressed).toBeNull();
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

	it('should not have a hostRole', (): void => {
		component.class = 'tab-link';

		expect(component.hostRole).toBeNull();
	});

	it('should have a hostType of button', (): void => {
		component.class = 'tab-btn';

		expect(component.hostType).toEqual('button');
	});

	it('should not have a hostType', (): void => {
		component.class = 'tab-link';

		expect(component.hostType).toBeNull();
	});

	it('should have a aria-pressed of true', (): void => {
		const event: MouseEvent = new MouseEvent('click', {});
		const mockTabComponent: ComponentFixture<MockTabComponent> = TestBed.createComponent(MockTabComponent);
		const mockButton: DebugElement = mockTabComponent.debugElement.query(By.css('button'));

		mockButton.nativeElement.dispatchEvent(event);

		expect(mockButton.nativeElement.getAttribute('aria-pressed')).toEqual('true');
	});
});
