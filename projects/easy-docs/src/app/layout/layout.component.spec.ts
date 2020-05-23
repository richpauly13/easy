import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LayoutComponent } from './layout.component';
import { LayoutService } from './layout.service';

class MockLayoutService {
	public get nav(): string {
		return this.currentNav || 'alert';
	}

	public set nav(nav: string) {
		this.currentNav = nav;
	}

	private currentNav: string;
}

describe('LayoutComponent', () => {
	let component: LayoutComponent;
	let fixture: ComponentFixture<LayoutComponent>;
	let service: LayoutService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				LayoutComponent
			],
			imports: [
				RouterTestingModule
			],
			providers: [
				{
					provide: LayoutService,
					useClass: MockLayoutService
				}
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		service = TestBed.inject(LayoutService);
	});

	it('should create the layout page', () => {
		expect(component).toBeTruthy();
	});

	it('should set the nav to grid', () => {
		component.onSetNav('grid');

		expect(service.nav).toEqual('grid');
	});
});
