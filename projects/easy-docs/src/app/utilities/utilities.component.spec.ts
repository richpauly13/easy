import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UtilitiesComponent } from './utilities.component';
import { UtilitiesService } from './utilities.service';

class MockUtilitiesService {
	public get nav(): string {
		return this.currentNav || 'alert';
	}

	public set nav(nav: string) {
		this.currentNav = nav;
	}

	private currentNav: string;
}

describe('UtilitiesComponent', () => {
	let component: UtilitiesComponent;
	let fixture: ComponentFixture<UtilitiesComponent>;
	let service: UtilitiesService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				UtilitiesComponent
			],
			imports: [
				RouterTestingModule
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

	beforeEach(() => {
		fixture = TestBed.createComponent(UtilitiesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		service = TestBed.inject(UtilitiesService);
	});

	it('should create the utilities page', () => {
		expect(component).toBeTruthy();
	});

	it('should set the nav to display', () => {
		component.onSetNav('display');

		expect(service.nav).toEqual('display');
	});
});
