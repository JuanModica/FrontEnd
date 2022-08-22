import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginapComponent } from './loginap.component';

describe('LoginapComponent', () => {
  let component: LoginapComponent;
  let fixture: ComponentFixture<LoginapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
