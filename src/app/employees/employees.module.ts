import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    EmployeesComponent,
    EmployeeListComponent
  ]
})
export class EmployeesModule {}
