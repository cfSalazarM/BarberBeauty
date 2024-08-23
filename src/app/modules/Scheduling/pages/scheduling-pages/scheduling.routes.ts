//haz el enrutamiento de la página de programación
import { Routes } from '@angular/router';
import { SchedulingPagesComponent } from './scheduling-pages.component';

export const schedulingRoutes: Routes = [
    {
        path: '',
        component: SchedulingPagesComponent
    }
];