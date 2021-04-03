import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AlignmentComponent } from './alignment/alignment.component';
import { ColorComponent } from './color/color.component';
import { ContainerComponent } from './container/container.component';
import { DimensionComponent } from './dimension/dimension.component';
import { DisplayComponent } from './display/display.component';
import { PositionComponent } from './position/position.component';
import { SpaceComponent } from './space/space.component';
import { TextComponent } from './text/text.component';
import { TypographyComponent } from './typography/typography.component';
import { UtilitiesComponent } from './utilities.component';
import { VisibilityComponent } from './visibility/visibility.component';

describe('UtilitiesComponent', (): void => {
	const routes: Routes = [
		{
			path: 'utilities',
			component: UtilitiesComponent,
			children: [
				{
					component: AlignmentComponent,
					path: 'alignment'
				},
				{
					component: ColorComponent,
					path: 'color'
				},
				{
					component: ContainerComponent,
					path: 'container'
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
				},
				{
					redirectTo: 'alignment',
					pathMatch: 'full',
					path: ''
				}
			]
		}
	];

	let component: UtilitiesComponent;
	let fixture: ComponentFixture<UtilitiesComponent>;
	let router: Router;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				AlignmentComponent,
				ColorComponent,
				ContainerComponent,
				DimensionComponent,
				DisplayComponent,
				PositionComponent,
				SpaceComponent,
				TextComponent,
				TypographyComponent,
				UtilitiesComponent,
				VisibilityComponent
			],
			imports: [RouterTestingModule.withRoutes(routes)]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(UtilitiesComponent);
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
