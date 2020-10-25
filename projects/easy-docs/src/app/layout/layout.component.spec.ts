import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ContainerComponent } from './container/container.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './layout.component';
import { LayoutService } from './layout.service';
import { NavComponent } from './nav/nav.component';

class MockLayoutService {
	public get nav(): string {
		return this.currentNav || 'container';
	}

	public set nav(nav: string) {
		this.currentNav = nav;
	}

	private currentNav: string;

	public constructor() {
		this.currentNav = '';
	}
}

describe('LayoutComponent', (): void => {
	const routes: Routes = [
		{
			path: 'layout',
			component: LayoutComponent,
			children: [
				{
					component: ContainerComponent,
					path: 'container'
				},
				{
					component: FlexboxComponent,
					path: 'flexbox'
				},
				{
					component: GridComponent,
					path: 'grid'
				},
				{
					component: NavComponent,
					path: 'nav'
				}
			]
		}
	];

	let component: LayoutComponent;
	let fixture: ComponentFixture<LayoutComponent>;
	let router: Router;
	let service: LayoutService;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				ContainerComponent,
				FlexboxComponent,
				GridComponent,
				LayoutComponent,
				NavComponent
			],
			imports: [
				RouterTestingModule.withRoutes(routes)
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

	beforeEach((): void => {
		fixture = TestBed.createComponent(LayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		router = TestBed.inject(Router);
		service = TestBed.inject(LayoutService);

		fixture.ngZone!.run((): void => {
			router.initialNavigation();
		});
	});

	it('should create the layout page', (): void => {
		expect(component).toBeTruthy();
	});

	it('should set the nav to the router.url if present', waitForAsync((): void => {
		fixture.ngZone!.run((): void => {
			fixture.whenStable().then((): void => {
				router.navigate([
					'/layout/grid'
				]).then((): void => {
					fixture.detectChanges();
					expect(service.nav).toEqual('grid');
				});
			});
		});
	}));

	it('should set the nav to grid', (): void => {
		component.onSetNav('grid');

		expect(service.nav).toEqual('grid');
	});
});
