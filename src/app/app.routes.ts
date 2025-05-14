import { Routes } from '@angular/router';
import { StartComponent } from './start/start/start.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

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
        path: 'website-map',
        loadChildren: () => import('./website-map/website-map.module').then(m => m.WebsiteMapModule)
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }
]
