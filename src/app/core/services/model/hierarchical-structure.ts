export abstract class HierarchicalStructure {
    protected parent!: HierarchicalStructure | null;

    public setParent(parent: HierarchicalStructure | null) {
        this.parent = parent;
    }

    public getParent(): HierarchicalStructure | null {
        return this.parent;
    }

    public isComposite(): boolean {
        return false;
    }

    public abstract getName(): string;
    public abstract getId(): string;
}
export class Employee extends HierarchicalStructure {
    private firstName: string;
    private lastName: string;
    private id: string;
    constructor(firstName: string, lastName: string, id: string) {
        super()
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }

    public getName(): string {
        return this.firstName + ' ' + this.lastName;
    }
    
    public getId(): string {
        return this.id;
    }

    public override isComposite(): boolean {
        return false;
    }
}