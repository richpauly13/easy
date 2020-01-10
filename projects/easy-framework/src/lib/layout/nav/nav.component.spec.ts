import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Renderer2 } from '@angular/core';

import { NavComponent } from './nav.component';

@Component({
	template: '<button class="nav-toggle" type="button"></button>'
})
class MockComponent { }

describe('NavComponent', () => {
	let component: NavComponent;
	let fixture1: ComponentFixture<NavComponent>;
	let fixture2: ComponentFixture<MockComponent>;
	let renderer2: Renderer2;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MockComponent,
				NavComponent
			],
			providers: [
				Renderer2
			]
		})
		.compileComponents();

	}));

	beforeEach(() => {
		fixture1 = TestBed.createComponent(NavComponent);
		component = fixture1.componentInstance;
		fixture1.detectChanges();

		fixture2 = TestBed.createComponent(MockComponent);
		fixture2.detectChanges();

		renderer2 = fixture1.componentRef.injector.get<Renderer2>(Renderer2);
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should add renderer2.listen event', () => {
		spyOn(renderer2, 'listen').and.callThrough();

		component.ngOnInit();

		expect(renderer2.listen).toHaveBeenCalled();
	});

	it('should add the active class', () => {
		component['isActive'] = false;
		component['onToggle'](fixture2.nativeElement);

		expect(fixture2.nativeElement).toHaveClass('active');
	});

	it('should remove the active class', () => {
		component['isActive'] = true;
		component['onToggle'](fixture2.nativeElement);

		expect(fixture2.nativeElement).not.toHaveClass('active');
	});
});
