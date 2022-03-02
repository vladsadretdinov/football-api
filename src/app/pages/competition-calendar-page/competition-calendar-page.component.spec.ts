import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionCalendarPageComponent } from './competition-calendar-page.component';

describe('CompetitionCalendarPageComponent', () => {
  let component: CompetitionCalendarPageComponent;
  let fixture: ComponentFixture<CompetitionCalendarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionCalendarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionCalendarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
