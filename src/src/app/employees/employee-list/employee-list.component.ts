import { Component, inject } from '@angular/core';
import { EmployeesService } from '../../core/services/employees.service';
import { FormsModule } from '@angular/forms';
import { employeeStructure as rawStructure } from '../../core/services/data/employee-structure';
import { Employee, EmployeeStructure, ReconstructEmployeeTreeStructure } from '../../core/services/interfaces/employee';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [EmployeeDetailsComponent, FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  protected selectedName: Employee | null = null;
  protected foundEmployee: EmployeeStructure[] = [];
  protected readonly getEmployeeStructure = new ReconstructEmployeeTreeStructure().reconstructEmployeeTree(rawStructure);
  protected readonly employeesSignal = inject(EmployeesService).getEmployeesSignal();

  onEmployeeChange(): void {
    const employeeStructureSelected = new EmployeeStructure(this.selectedName!.id, this.selectedName!.firstName, this.selectedName!.lastName, []);
    this.foundEmployee = employeeStructureSelected.findEmployeeById(this.getEmployeeStructure, this.selectedName!.id) ?? [];
  }  
 
  compareTypeFn(a: Employee, b: Employee): boolean {
    return a && b ? a.id === b.id : a === b;
  }
}
