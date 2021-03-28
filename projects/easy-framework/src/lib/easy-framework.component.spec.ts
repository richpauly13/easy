import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EasyComponent } from './easy-framework.component';

describe('EasyComponent', (): void => {
	let component: EasyComponent;
	let fixture: ComponentFixture<EasyComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [EasyComponent],
			imports: [RouterTestingModule]
		}).compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(EasyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});
});
