import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TextComponent } from './text.component';

describe('TextComponent', (): void => {
	let component: TextComponent;
	let fixture: ComponentFixture<TextComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [TextComponent]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(TextComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});
});
