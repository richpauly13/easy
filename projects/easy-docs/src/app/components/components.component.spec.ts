import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AlertComponent } from './alert/alert.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ComponentsComponent } from './components.component';
import { ComponentsService } from './components.service';
import { FormComponent } from './form/form.component';
import { SharedModule } from '../shared/shared.module';
import { SliderComponent } from './slider/slider.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SwitchComponent } from './switch/switch.component';
import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';
import { TooltipComponent } from './tooltip/tooltip.component';

class MockComponentsService {
	public get nav(): string {
		return this.currentNav || 'alert';
	}

	public set nav(nav: string) {
		this.currentNav = nav;
	}

	private currentNav: string;
}

describe('ComponentsComponent', () => {
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
					component: CollapseComponent,
					path: 'collapse'
				},
				{
					component: FormComponent,
					path: 'form'
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
				}
			]
		}
	];

	let component: ComponentsComponent;
	let fixture: ComponentFixture<ComponentsComponent>;
	let router: Router;
	let service: ComponentsService;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [
				AlertComponent,
				BadgeComponent,
				ButtonComponent,
				CardComponent,
				CollapseComponent,
				ComponentsComponent,
				FormComponent,
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
			],
			providers: [
				{
					provide: ComponentsService,
					useClass: MockComponentsService
				}
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ComponentsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		router = TestBed.inject(Router);
		service = TestBed.inject(ComponentsService);

		fixture.ngZone.run(() => {
			router.initialNavigation();
		});
	});

	it('should create the components page', () => {
		expect(component).toBeTruthy();
	});

	it('should set the nav to the router.url if present', waitForAsync(() => {
		fixture.ngZone.run(() => {
			fixture.whenStable().then(() => {
				router.navigate(['/components/form']).then(() => {
					fixture.detectChanges();
					expect(service.nav).toEqual('form');
				});

			});
		});
	}));

	it('should set the nav to button', () => {
		component.onSetNav('button');

		expect(service.nav).toEqual('button');
	});
});
