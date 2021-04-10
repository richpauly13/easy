import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TypographyComponent } from './typography.component';

describe('TypographyComponent', (): void => {
	let component: TypographyComponent;
	let fixture: ComponentFixture<TypographyComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [TypographyComponent]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(TypographyComponent);
		component = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a title of Utilities - Typeography - EASY', (): void => {
		component.ngOnInit();

		expect(component['title'].getTitle()).toEqual('Utilities - Typography - EASY');
	});
});
