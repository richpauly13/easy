import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { EasyModule } from 'easy-framework';

describe('AppComponent', (): void => {
	let app: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
			imports: [
				EasyModule,
				RouterTestingModule
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(AppComponent);
		app = fixture.componentInstance;
	});

	it('should be created', (): void => {
		expect(app).toBeTruthy();
	});

	it('should have called trackById', (): void => {
		const trackByIdSpy: jasmine.Spy = spyOn(app, 'trackById').and.callThrough();

		app.trackById(0, 'components');

		expect(trackByIdSpy).toHaveBeenCalledWith(0, 'components');
	});
});
