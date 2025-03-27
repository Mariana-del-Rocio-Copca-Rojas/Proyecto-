import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDisciplinaryReportComponent } from './new-disciplinary-report.component';

describe('NewDisciplinaryReportComponent', () => {
  let component: NewDisciplinaryReportComponent;
  let fixture: ComponentFixture<NewDisciplinaryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewDisciplinaryReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDisciplinaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
