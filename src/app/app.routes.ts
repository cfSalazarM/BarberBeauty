import { Routes } from '@angular/router';
import { HomeWrapperComponent } from '@modules/home/pages/home-wrapper/home-wrapper.component';
export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.routes').then(m => m.authRoutes)
    },
    {
        path: '',
        component: HomeWrapperComponent,
        loadChildren: () => import('./modules/home/pages/home-wrapper/homew.routes').then(m => m.homeWRoutes),
        
    }
];
