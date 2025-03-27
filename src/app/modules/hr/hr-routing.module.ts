import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrComponent } from './hr.component';
import { AttendanceComponent } from './attendance/pages/attendance/attendance.component';
import { ShiftChangeComponent } from './shift-change/pages/shift-change/shift-change.component';
import { ShiftChangeFormComponent } from './shift-change/pages/shift-change-form/shift-change-form.component';
import { DisciplinaryReportsComponent } from './disciplinary-reports/pages/disciplinary-reports/disciplinary-reports.component';
import { NewDisciplinaryReportComponent } from './disciplinary-reports/pages/new-disciplinary-report/new-disciplinary-report.component';

const routes: Routes = [
  {
    path: '',
    component: HrComponent, 
    children: [
      { path: 'attendance', component: AttendanceComponent },
      { 
        path: 'shift-change', 
        children: [
          { path: '', component: ShiftChangeComponent },
          { path: 'new', component: ShiftChangeFormComponent }
        ]
      },
      { 
        path: 'disciplinary-reports', 
        children: [
          { path: '', component: DisciplinaryReportsComponent },
          { path: 'new', component: NewDisciplinaryReportComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
