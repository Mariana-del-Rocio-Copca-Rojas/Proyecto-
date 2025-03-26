import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrComponent } from './hr.component';
import { AttendanceComponent } from './attendance/pages/attendance/attendance.component';
import { ShiftChangeComponent } from './shift-change/pages/shift-change/shift-change.component';
import { ShiftChangeFormComponent } from './shift-change/pages/shift-change-form/shift-change-form.component';
import { DisciplinaryReportsComponent } from './disciplinary-reports/pages/disciplinary-reports/disciplinary-reports.component';


const routes: Routes = [
  {
    path: '',
    component: HrComponent, 
    children: [
      { path: 'attendance', component: AttendanceComponent },
      { path: 'shift-change', component: ShiftChangeComponent },
      { path: 'disciplinary-reports', component: DisciplinaryReportsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
