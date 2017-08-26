import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordAuthComponent } from './password-auth.component';

describe('PasswordAuthComponent', () => {
  let component: PasswordAuthComponent;
  let fixture: ComponentFixture<PasswordAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
