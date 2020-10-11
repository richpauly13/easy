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
		}).compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(AppComponent);
		app = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the app', (): void => {
		expect(app).toBeTruthy();
	});
});
