import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrComponent } from './hr.component';
import { AttendanceComponent } from './attendance/pages/attendance/attendance.component';
import { ShiftChangeComponent } from './shift-change/pages/shift-change/shift-change.component';
import { ShiftChangeFormComponent } from './shift-change/pages/shift-change-form/shift-change-form.component'; // 👈 IMPORTANTE

const routes: Routes = [
  {
    path: '',
    component: HrComponent, // 👈 Aseguramos que esté anidado dentro de HR
    children: [
      { path: 'attendance', component: AttendanceComponent },
      { path: 'shift-change', component: ShiftChangeComponent },
      { path: 'shift-change/form', component: ShiftChangeFormComponent } // 👈 NUEVA RUTA
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
