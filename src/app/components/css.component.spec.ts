import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssComponent } from './css.component';
import { CssModule } from './css.module';

describe('CssComponent', () => {
	let component: CssComponent;
	let fixture: ComponentFixture<CssComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [CssModule]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CssComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it(`should have as section 'Alert'`, () => {
		expect(component.section).toEqual('Alert');
	});

	it('should render section in an h1 tag', () => {
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Alert');
	});
});
