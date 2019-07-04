import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertModule } from 'projects/easy-framework/src/public-api';

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

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
