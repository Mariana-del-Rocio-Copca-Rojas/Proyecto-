import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShiftChangeComponent } from './pages/shift-change/shift-change.component';
import { ShiftChangeFormComponent } from './pages/shift-change-form/shift-change-form.component';

@NgModule({
  declarations: [
    ShiftChangeComponent,
    ShiftChangeFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule 
  ]
})
export class ShiftChangeModule { }
