import { ProjectInterface } from "../data/employee-structure";

export interface EmployeeInterface {
    firstName: string,
    lastName: string,
    readonly id: string,
    projects?: ProjectInterface[];
}

export interface EmployeeStructureInterface extends EmployeeInterface {
    readonly subordinates: EmployeeStructureInterface[];
}

export class ReconstructEmployeeTreeStructure {
    reconstructEmployeeTree(data: EmployeeStructureInterface): EmployeeStructure {
        const subordinates = (data.subordinates || []).map(data => this.reconstructEmployeeTree(data));
        return new EmployeeStructure(data.id, data.firstName, data.lastName, data.projects ?? [], subordinates);
    }
}

export class Employee {
    constructor(public readonly id: string,
        public firstName: string,
        public lastName: string) { }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

export class EmployeeStructure extends Employee {
    protected subordinates: EmployeeStructure[] = [];
    projects: ProjectInterface[] = [];

    constructor(id: string,
        firstName: string,
        lastName: string,
        projects: ProjectInterface[],
        subordinates: EmployeeStructure[]) {
        super(id, firstName, lastName);
        this.subordinates = subordinates;
        this.projects = projects;
    }

    findEmployeeById(root: EmployeeStructure, id: string): EmployeeStructure[] | null {
        if (root.id === id) {
            return this.subordinates = [root];
        }
        for (const subordinate of root.subordinates) {
            const found = this.findEmployeeById(subordinate, id);

            if (found) return found;
        }
        return null;
    }
    
    findEmployeeProjects(root: EmployeeStructure, id: string): ProjectInterface[] {

        if (root.id === id) {
            return root.projects;
        }

        for (const subordinate of root.subordinates) {
            const found = this.findEmployeeProjects(subordinate, id);

            if (found.length > 0) {
                return found;
            }
        }
        return [];
    }
    public getChildren(): EmployeeStructure[] {
        return this.subordinates;
    }
}