import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLibComponent } from './theme-lib.component';

describe('ThemeLibComponent', () => {
  let component: ThemeLibComponent;
  let fixture: ComponentFixture<ThemeLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
