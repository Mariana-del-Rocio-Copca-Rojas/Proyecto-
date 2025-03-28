import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- Agrega esta línea

import { DisciplinaryReportsComponent } from './pages/disciplinary-reports/disciplinary-reports.component';
import { NewDisciplinaryReportComponent } from './pages/new-disciplinary-report/new-disciplinary-report.component';
import { EmployeeSearchModalComponent } from './components/employee-search-modal/employee-search-modal.component';

@NgModule({
  declarations: [
    DisciplinaryReportsComponent,
    NewDisciplinaryReportComponent,
    EmployeeSearchModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule  // <-- y esta línea
  ],
  exports: [DisciplinaryReportsComponent]
})
export class DisciplinaryReportsModule { }
