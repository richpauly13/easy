import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';

import { EasyModule } from 'easy-framework';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [EasyModule, RouterTestingModule],
			declarations: [AppComponent]
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});
});
