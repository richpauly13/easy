import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ColorComponent } from './color/color.component';
import { DimensionComponent } from './dimension/dimension.component';
import { DisplayComponent } from './display/display.component';
import { PositionComponent } from './position/position.component';
import { SpaceComponent } from './space/space.component';
import { TextComponent } from './text/text.component';
import { TypographyComponent } from './typography/typography.component';
import { UtilitiesComponent } from './utilities.component';
import { UtilitiesService } from './utilities.service';
import { VisibilityComponent } from './visibility/visibility.component';

class MockUtilitiesService {
	public get nav(): string {
		return this.currentNav || 'color';
	}

	public set nav(nav: string) {
		this.currentNav = nav;
	}

	private currentNav: string;

	public constructor() {
		this.currentNav = '';
	}
}

describe('UtilitiesComponent', (): void => {
	const routes: Routes = [
		{
			path: 'utilities',
			component: UtilitiesComponent,
			children: [
				{
					component: ColorComponent,
					path: 'color'
				},
				{
					component: DimensionComponent,
					path: 'dimension'
				},
				{
					component: DisplayComponent,
					path: 'display'
				},
				{
					component: PositionComponent,
					path: 'position'
				},
				{
					component: SpaceComponent,
					path: 'space'
				},
				{
					component: TextComponent,
					path: 'text'
				},
				{
					component: TypographyComponent,
					path: 'typography'
				},
				{
					component: VisibilityComponent,
					path: 'visibility'
				}
			]
		}
	];

	let component: UtilitiesComponent;
	let fixture: ComponentFixture<UtilitiesComponent>;
	let router: Router;
	let service: UtilitiesService;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				ColorComponent,
				DimensionComponent,
				DisplayComponent,
				PositionComponent,
				SpaceComponent,
				TextComponent,
				TypographyComponent,
				UtilitiesComponent,
				VisibilityComponent
			],
			imports: [
				RouterTestingModule.withRoutes(routes)
			],
			providers: [
				{
					provide: UtilitiesService,
					useClass: MockUtilitiesService
				}
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(UtilitiesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		service = TestBed.inject(UtilitiesService);
		router = TestBed.inject(Router);

		fixture.ngZone!.run((): void => {
			router.initialNavigation();
		});
	});

	it('should create the utilities page', (): void => {
		expect(component).toBeTruthy();
	});

	it('should set the nav to the router.url if present', waitForAsync((): void => {
		fixture.ngZone!.run((): void => {
			fixture.whenStable().then((): void => {
				router.navigate(['/utilities/display']).then((): void => {
					fixture.detectChanges();
					expect(service.nav).toEqual('display');
				});

			});
		});
	}));

	it('should set the nav to display', (): void => {
		component.onSetNav('display');

		expect(service.nav).toEqual('display');
	});
});
