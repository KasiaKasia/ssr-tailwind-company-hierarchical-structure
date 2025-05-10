import { Component, Input } from '@angular/core';
import { EmployeeStructure } from '../../core/services/interfaces/employee';

@Component({
  selector: 'app-employee-nested-list',
  standalone: true,
  templateUrl: './employee-nested-list.component.html',
  styleUrl: './employee-nested-list.component.css'
})
export class EmployeeNestedListComponent {
  @Input() node!: EmployeeStructure;
  
  getChildren(): EmployeeStructure | EmployeeStructure[] | null {
    return this.node ? this.node.getChildren() : [];
  }
}
