import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EasyModule } from 'easy-framework';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
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

	it('should create the app', () => {
		const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
		const app: AppComponent = fixture.debugElement.componentInstance;

		expect(app).toBeTruthy();
	});
});
