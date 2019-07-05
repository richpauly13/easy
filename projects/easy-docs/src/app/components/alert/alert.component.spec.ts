import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertModule } from 'easy-framework';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
	let component: AlertComponent;
	let fixture: ComponentFixture<AlertComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				AlertModule
			],
			declarations: [
				AlertComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AlertComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create alert page', () => {
		expect(component).toBeTruthy();
	});
});
