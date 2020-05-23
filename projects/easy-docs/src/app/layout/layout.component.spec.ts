import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
}

describe('LayoutComponent', () => {
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

	beforeEach(async(() => {
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

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		router = TestBed.inject(Router);
		service = TestBed.inject(LayoutService);

		fixture.ngZone.run(() => {
			router.initialNavigation();
		});
	});

	it('should create the layout page', () => {
		expect(component).toBeTruthy();
	});

	it('should set the nav to the router.url if present', async(() => {
		fixture.ngZone.run(() => {
			fixture.whenStable().then(() => {
				router.navigate(['/layout/grid']).then(() => {
					fixture.detectChanges();
					expect(service.nav).toEqual('grid');
				});

			});
		});
	}));

	it('should set the nav to grid', () => {
		component.onSetNav('grid');

		expect(service.nav).toEqual('grid');
	});
});
