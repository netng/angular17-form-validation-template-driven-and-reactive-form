import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveProfileFormComponent } from './reactive-profile-form.component';

describe('ReactiveProfileFormComponent', () => {
  let component: ReactiveProfileFormComponent;
  let fixture: ComponentFixture<ReactiveProfileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveProfileFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
