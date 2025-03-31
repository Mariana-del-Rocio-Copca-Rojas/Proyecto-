import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrComponent } from './hr.component';
import { AttendanceComponent } from './attendance/pages/attendance/attendance.component';
import { ShiftChangeComponent } from './shift-change/pages/shift-change/shift-change.component';
import { ShiftChangeFormComponent } from './shift-change/pages/shift-change-form/shift-change-form.component';
import { DisciplinaryReportsComponent } from './disciplinary-reports/pages/disciplinary-reports/disciplinary-reports.component';
import { NewDisciplinaryReportComponent } from './disciplinary-reports/pages/new-disciplinary-report/new-disciplinary-report.component';
import { RequisitionComponent } from './recruitment/pages/requisition/requisition.component';
import { RequisitionFormComponent } from './recruitment/pages/requisition-form/requisition-form.component';




const routes: Routes = [
  {
    path: '',
    component: HrComponent, 
    children: [
      { path: 'attendance', component: AttendanceComponent },
      {
        path: 'requisition-form',
        component: RequisitionFormComponent // este lo crearemos ahora
      },
      
      { 
        path: 'shift-change', 
        children: [
          { path: '', component: ShiftChangeComponent },
          { path: 'form', component: ShiftChangeFormComponent }
        ]
      },
      { 
        path: 'disciplinary-reports', 
        children: [
          { path: '', component: DisciplinaryReportsComponent },
          { path: 'new', component: NewDisciplinaryReportComponent }
        ]
      },
      { path: 'requisition', component: RequisitionComponent },
    { path: 'requisition-form', component: RequisitionFormComponent }, // ✅ ESTA ES LA CLAVE
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
