import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EasyModule } from 'easy-framework';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
	let app: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async(() => {
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

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		app = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the app', () => {
		expect(app).toBeTruthy();
	});
});
