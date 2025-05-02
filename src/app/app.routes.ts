import { Routes } from '@angular/router';
import { StartComponent } from './start/start/start.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        component: StartComponent
    },
    {
        path: 'employees',
        loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
