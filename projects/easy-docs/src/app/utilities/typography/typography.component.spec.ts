import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TypographyComponent } from './typography.component';

describe('TypographyComponent', (): void => {
	let component: TypographyComponent;
	let fixture: ComponentFixture<TypographyComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				TypographyComponent
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(TypographyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});
});
