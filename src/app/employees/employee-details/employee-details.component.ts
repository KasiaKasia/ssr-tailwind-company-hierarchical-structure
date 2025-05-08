import { Component, Input } from '@angular/core';
import { EmployeeStructure } from '../../core/services/interfaces/employee';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  @Input() node!: EmployeeStructure;
  
  getChildren(): EmployeeStructure | EmployeeStructure[] | null {
    return this.node ? this.node.getChildren() : [];
  }
}
