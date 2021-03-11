import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ContainerComponent } from './container/container.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';

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
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(LayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		router = TestBed.inject(Router);

		fixture.ngZone!.run((): void => {
			router.initialNavigation();
		});
	});

	it('should be created', (): void => {
		expect(component).toBeTruthy();
	});
});
