import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EasyComponent } from './easy-framework.component';

describe('EasyComponent', () => {
	let component: EasyComponent;
	let fixture: ComponentFixture<EasyComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				EasyComponent
			],
			imports: [
				RouterTestingModule
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EasyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
