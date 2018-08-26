import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssComponent } from './css.component';

describe('CssComponent', () => {
	let component: CssComponent;
	let fixture: ComponentFixture<CssComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				CssComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CssComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
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
