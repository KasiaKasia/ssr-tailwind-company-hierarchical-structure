import { Component, Input } from '@angular/core';
import { EmployeeStructure } from '../../../core/services/interfaces/employee';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.css'
})
export class TreeNodeComponent {
  @Input() node!: EmployeeStructure;
  
  get fullName(): string {
    return `${this.node.firstName} ${this.node.lastName}`;
  }
}
