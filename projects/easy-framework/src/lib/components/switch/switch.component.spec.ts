import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SwitchComponent } from './switch.component';

describe('SwitchComponent', (): void => {
	let component: SwitchComponent;
	let fixture: ComponentFixture<SwitchComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [SwitchComponent]
		}).compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(SwitchComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a hostAriaLabel of on', (): void => {
		component.class = 'switch-label';
		component['isChecked'] = true;

		expect(component.hostAriaLabel).toEqual('on');
	});

	it('should have a hostAriaLabel of off', (): void => {
		component.class = 'switch-label';
		component['isChecked'] = false;

		expect(component.hostAriaLabel).toEqual('off');
	});

	it('should have a hostAriaLabel of null', (): void => {
		component.class = 'switch-circle';

		expect(component.hostAriaLabel).toBeNull();
	});

	it('should have a hostChecked of true', (): void => {
		component['isChecked'] = true;

		expect(component.hostChecked).toEqual('true');
	});

	it('should have a hostChecked of null', (): void => {
		component.class = 'switch-label';

		expect(component.hostChecked).toBeNull();
	});

	it('should have a hostClass containing show-sr', (): void => {
		component.class = 'switch-circle';

		expect(component.hostClass).toContain('show-sr');
	});

	it('should have a hostClass equal to class', (): void => {
		component.class = 'switch-label';

		expect(component.hostClass).toEqual(component.class);
	});

	it('should have a hostFor of switch-0', (): void => {
		component.class = 'switch-label';

		component.ngOnInit();

		expect(component.hostFor).toEqual('switch-0');
	});

	it('should not have a hostFor', (): void => {
		component.class = 'switch-circle';

		component.ngOnInit();

		expect(component.hostFor).toBeNull();
	});

	it('should have a hostId of switch-0', (): void => {
		component.class = 'switch-circle';

		component.ngOnInit();

		expect(component.hostId).toEqual('switch-0');
	});

	it('should not have a hostId', (): void => {
		component.class = 'switch-label';

		component.ngOnInit();

		expect(component.hostId).toBeNull();
	});

	it('should have a hostRole of switch', (): void => {
		component.class = 'switch-circle';

		expect(component.hostRole).toEqual('switch');
	});

	it('should have a hostRole of null', (): void => {
		component.class = 'switch-label';

		expect(component.hostRole).toBeNull();
	});

	it('should have isChecked as true after click event', (): void => {
		component.onClick();

		expect(component['isChecked']).toBeTrue();
	});
});
