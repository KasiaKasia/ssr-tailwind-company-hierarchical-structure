export interface EmployeeInterface {
    firstName: string,
    lastName: string,
    readonly id: string,
}

export interface EmployeeStructureInterface extends EmployeeInterface {
    readonly subordinates: EmployeeStructureInterface[];
}

export class ReconstructEmployeeTreeStructure {
    reconstructEmployeeTree(data: EmployeeStructureInterface): EmployeeStructure {
        const subordinates = (data.subordinates || []).map(data => this.reconstructEmployeeTree(data));
        return new EmployeeStructure(data.id, data.firstName, data.lastName, subordinates);
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

    constructor(id: string,
        firstName: string,
        lastName: string,
        subordinates: EmployeeStructure[]) {
        super(id, firstName, lastName);
        this.subordinates = subordinates;
    }
    reconstructEmployeeTree(data: EmployeeStructureInterface): EmployeeStructure {
        const subordinates = (data.subordinates || []).map(this.reconstructEmployeeTree);
        return new EmployeeStructure(data.id, data.firstName, data.lastName, subordinates);
    }
    findEmployeeById(root: EmployeeStructure, id: string): EmployeeStructure[] | null {
        if (root.id === id) {
            return root.subordinates.length ? this.subordinates = root.subordinates : [root];
        }

        for (const subordinate of root.subordinates) {
            const found = this.findEmployeeById(subordinate, id);
            if (found) return found;
        }

        return null;
    }

    public getChildren(): EmployeeStructure[] {
        return this.subordinates;
    }
}