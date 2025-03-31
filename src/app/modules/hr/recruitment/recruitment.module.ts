import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { RequisitionComponent } from './pages/requisition/requisition.component';
import { RequisitionComponent } from './pages/requisition/requisition.component';

import { RequisitionFormComponent } from './pages/requisition-form/requisition-form.component';

@NgModule({
  declarations: [
    RequisitionComponent,
    RequisitionFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [RequisitionComponent]
})
export class RecruitmentModule {}
