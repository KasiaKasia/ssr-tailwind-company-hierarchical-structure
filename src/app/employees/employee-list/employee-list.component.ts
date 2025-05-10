import { Component, inject } from '@angular/core';
import { EmployeesService } from '../../core/services/employees.service';
import { Employee, EmployeeStructure } from '../../core/services/interfaces/employee';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from '../../shared/components/select/select.component';
import { EmployeeStructureComponent } from '../employee-structure/employee-structure.component';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [FormsModule, SelectComponent, EmployeeStructureComponent ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  protected selectedName: Employee | null = null;
  protected foundEmployee: EmployeeStructure[] = [];
  employeesSignal = inject(EmployeesService).getEmployeesSignal();
}
