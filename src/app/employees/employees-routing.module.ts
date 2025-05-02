import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [{
  path: '',
  component: EmployeesComponent,
  data: { title: 'Pracownicy' },
}, {
  path: 'employee-list',
  loadComponent: () => import('./employee-list/employee-list.component').then(m => m.EmployeeListComponent),
  data: { title: 'Lista pracowników' },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
