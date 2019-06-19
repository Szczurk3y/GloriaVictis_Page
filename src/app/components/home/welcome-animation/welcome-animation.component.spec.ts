import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAnimationComponent } from './welcome-animation.component';

describe('WelcomeAnimationComponent', () => {
  let component: WelcomeAnimationComponent;
  let fixture: ComponentFixture<WelcomeAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
