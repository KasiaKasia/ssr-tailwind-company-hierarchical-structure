import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { employeeStructure } from "../../core/services/data/employee-structure";
import { EmployeeStructure, ReconstructEmployeeTreeStructure } from "../../core/services/interfaces/employee";
import { computed } from "@angular/core";

interface EmployeeState {
    employees: EmployeeStructure;
    selectedEmployeeId: string | null;
}

const initialState: EmployeeState = {
    employees: new ReconstructEmployeeTreeStructure().reconstructEmployeeTree(employeeStructure),
    selectedEmployeeId: null
};
export const EmployeeStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),

    withComputed((store) => ({
        selectedEmployeeProjects: computed(() => {
            const employee = store.employees().findEmployeeProjects(store.employees(), store.selectedEmployeeId()!) ?? [];

            return employee ? employee : [];
        }),
    })),

    withMethods((store) => ({
        selectEmployee: (employeeId: string) => {
            patchState(store, { selectedEmployeeId: employeeId });
        },
    }))
);