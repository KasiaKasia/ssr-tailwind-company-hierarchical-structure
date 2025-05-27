import { Component, inject, input } from '@angular/core';
import { Employee, EmployeeStructure } from '../../core/services/interfaces/employee';
import { EmployeeNestedListComponent } from '../employee-nested-list/employee-nested-list.component';
import { TreeNodeComponent } from '../../shared/components/tree-node/tree-node.component';
import { EmployeeStore } from '../signal-store/employee.store';

@Component({
  selector: 'app-employee-structure',
  standalone: true,
  imports: [EmployeeNestedListComponent, TreeNodeComponent],
  templateUrl: './employee-structure.component.html',
  styleUrl: './employee-structure.component.css'
})
export class EmployeeStructureComponent {
  readonly foundEmployee = input<EmployeeStructure[]>()
  readonly selectedName = input<Employee | null>();
  store = inject(EmployeeStore);
}
