import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AlertComponent } from './alert/alert.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ComponentsComponent } from './components.component';
import { FormComponent } from './form/form.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { SliderComponent } from './slider/slider.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SwitchComponent } from './switch/switch.component';
import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';
import { TooltipComponent } from './tooltip/tooltip.component';

describe('ComponentsComponent', (): void => {
	const routes: Routes = [
		{
			path: 'components',
			component: ComponentsComponent,
			children: [
				{
					component: AlertComponent,
					path: 'alert'
				},
				{
					component: BadgeComponent,
					path: 'badge'
				},
				{
					component: ButtonComponent,
					path: 'button'
				},
				{
					component: CardComponent,
					path: 'card'
				},
				{
					component: FormComponent,
					path: 'form'
				},
				{
					component: ProgressComponent,
					path: 'progress'
				},
				{
					component: SliderComponent,
					path: 'slider'
				},
				{
					component: SlideshowComponent,
					path: 'slideshow'
				},
				{
					component: SpinnerComponent,
					path: 'spinner'
				},
				{
					component: SwitchComponent,
					path: 'switch'
				},
				{
					component: TabComponent,
					path: 'tab'
				},
				{
					component: TableComponent,
					path: 'table'
				},
				{
					component: TooltipComponent,
					path: 'tooltip'
				},
				{
					redirectTo: 'alert',
					pathMatch: 'full',
					path: ''
				}
			]
		}
	];

	let component: ComponentsComponent;
	let fixture: ComponentFixture<ComponentsComponent>;
	let router: Router;

	beforeEach(waitForAsync((): void => {
		TestBed.configureTestingModule({
			declarations: [
				AlertComponent,
				BadgeComponent,
				ButtonComponent,
				CardComponent,
				ComponentsComponent,
				FormComponent,
				ProgressComponent,
				SliderComponent,
				SlideshowComponent,
				SpinnerComponent,
				SwitchComponent,
				TabComponent,
				TableComponent,
				TooltipComponent
			],
			imports: [
				RouterTestingModule.withRoutes(routes),
				SharedModule
			]
		})
		.compileComponents();
	}));

	beforeEach((): void => {
		fixture = TestBed.createComponent(ComponentsComponent);

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
