import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabComponent } from './tab.component';

describe('TabComponent', (): void => {
	let component: TabComponent;
	let fixture: ComponentFixture<TabComponent>;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [TabComponent]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(TabComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});
});
