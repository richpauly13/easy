import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UtilitiesComponent } from './utilities.component';

describe('UtilitiesComponent', () => {
	let component: UtilitiesComponent;
	let fixture: ComponentFixture<UtilitiesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			declarations: [
				UtilitiesComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UtilitiesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the utilities page', () => {
		expect(component).toBeTruthy();
	});
});
