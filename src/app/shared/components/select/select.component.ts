import { Component, inject, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee, EmployeeInterface, EmployeeStructure, ReconstructEmployeeTreeStructure } from '../../../core/services/interfaces/employee';
import { EmployeesService } from '../../../core/services/employees.service';
import { employeeStructure as rawStructure } from '../../../core/services/data/employee-structure';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  protected readonly getEmployeeStructure = new ReconstructEmployeeTreeStructure().reconstructEmployeeTree(rawStructure);
  readonly forId = input<string>('')
  readonly label = input<string>('')
  readonly name = input<string>('')
  readonly cssClassSelect = input<string>('')
  readonly cssClassOptions = input<string>('')
  readonly ariaLabel = input<string>('')
  readonly employeesSignal = input<EmployeeInterface[]>([])
  protected readonly selectedValue: Employee | null = null;  
  protected readonly foundEmployee = output<EmployeeStructure[]>()
  protected readonly selectedName = output<Employee>()

  onEmployeeChange(): void {
    const employeeStructureSelected = new EmployeeStructure(this.selectedValue!.id, this.selectedValue!.firstName, this.selectedValue!.lastName, []);
    this.foundEmployee.emit(employeeStructureSelected.findEmployeeById(this.getEmployeeStructure, this.selectedValue!.id) ?? []);
    this.selectedName.emit(this.selectedValue!)
  }
  compareTypeFn(a: Employee, b: Employee): boolean {
    return a && b ? a.id === b.id : a === b;
  }
}
