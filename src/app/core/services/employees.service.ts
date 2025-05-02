import { Injectable, signal, WritableSignal } from '@angular/core';
import { EmployeeInterface } from './interfaces/employee';
import { employess } from './data/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employeesSignal: WritableSignal<EmployeeInterface[]> = signal(employess);
  getEmployeesSignal(): WritableSignal<EmployeeInterface[]> {
    return this.employeesSignal;
  }
}
