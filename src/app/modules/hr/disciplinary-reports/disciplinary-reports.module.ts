import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- Agrega esta línea

import { DisciplinaryReportsComponent } from './pages/disciplinary-reports/disciplinary-reports.component';
import { NewDisciplinaryReportComponent } from './pages/new-disciplinary-report/new-disciplinary-report.component';

@NgModule({
  declarations: [
    DisciplinaryReportsComponent,
    NewDisciplinaryReportComponent
  ],
  imports: [
    CommonModule,
    RouterModule  // <-- y esta línea
  ],
  exports: [DisciplinaryReportsComponent]
})
export class DisciplinaryReportsModule { }
