import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('FormComponent', (): void => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(waitForAsync((): void => {
	TestBed.configureTestingModule({
		declarations: [ FormComponent ]
	})
	.compileComponents();
  }));

  beforeEach((): void => {
	fixture = TestBed.createComponent(FormComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', (): void => {
	expect(component).toBeTruthy();
  });
});
