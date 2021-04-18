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
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});

	it('should have a title of Components - Alert - EASY', (): void => {
		component.ngOnInit();

		expect(component['title'].getTitle()).toEqual('Components - Alert - EASY');
	});
});
