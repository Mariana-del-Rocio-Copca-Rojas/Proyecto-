import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Importación necesaria
import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { ShiftChangeModule } from './shift-change/shift-change.module';

@NgModule({
  declarations: [
    HrComponent
  ],
  imports: [
    CommonModule,
    RouterModule,       // ✅ Añadido aquí
    HrRoutingModule,
    ShiftChangeModule 
  ]
})
export class HrModule { }
