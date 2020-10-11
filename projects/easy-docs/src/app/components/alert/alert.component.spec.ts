import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlertModule } from 'easy-framework';

import { AlertComponent } from './alert.component';

describe('AlertComponent', (): void => {
	let component: AlertComponent;
	let fixture: ComponentFixture<AlertComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				AlertComponent
			],
			imports: [
				AlertModule
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(AlertComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create alert page', (): void => {
		expect(component).toBeTruthy();
	});
});
