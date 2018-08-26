import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsComponent } from './components.component';

describe('ComponentsComponent', () => {
	let component: ComponentsComponent;
	let fixture: ComponentFixture<ComponentsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ComponentsComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ComponentsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the component component', () => {
		expect(component).toBeTruthy();
	});

	it(`should have as section 'Alert'`, async(() => {
		expect(component.section).toEqual('Alert');
	}));

	it('should render section in a h1 tag', async(() => {
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Alert');
	}));
});
