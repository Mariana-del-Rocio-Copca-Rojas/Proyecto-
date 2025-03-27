import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { ShiftChangeModule } from './shift-change/shift-change.module';
import { AttendanceModule } from './attendance/attendance.module';
import { DisciplinaryReportsModule } from './disciplinary-reports/disciplinary-reports.module';



@NgModule({
  declarations: [
    HrComponent,
 
  ],
  imports: [
    CommonModule,
    RouterModule,
    HrRoutingModule,
    AttendanceModule,
    ShiftChangeModule,
    DisciplinaryReportsModule,

    
  ]
})
export class HrModule {}
