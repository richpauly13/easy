import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsComponent } from './components.component';
import { SharedModule } from './../shared/shared.module';

describe('ComponentsComponent', () => {
	let component: ComponentsComponent;
	let fixture: ComponentFixture<ComponentsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				SharedModule
			],
			declarations: [
				ComponentsComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ComponentsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
