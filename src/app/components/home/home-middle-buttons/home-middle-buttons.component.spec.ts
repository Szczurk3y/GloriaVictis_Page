import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMiddleButtonsComponent } from './home-middle-buttons.component';

describe('HomeMiddleButtonsComponent', () => {
  let component: HomeMiddleButtonsComponent;
  let fixture: ComponentFixture<HomeMiddleButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMiddleButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMiddleButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
