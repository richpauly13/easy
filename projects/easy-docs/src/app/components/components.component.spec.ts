import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ComponentsComponent } from './components.component';
import { ComponentsService } from './components.service';
import { SharedModule } from '../shared/shared.module';

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
	let component: ComponentsComponent;
	let fixture: ComponentFixture<ComponentsComponent>;
	let service: ComponentsService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ComponentsComponent
			],
			imports: [
				RouterTestingModule,
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
		service = TestBed.inject(ComponentsService);
	});

	it('should create the components page', () => {
		expect(component).toBeTruthy();
	});

	it('should set the nav to button', () => {
		component.onSetNav('button');

		expect(service.nav).toEqual('button');
	});
});
