import { Routes } from '@angular/router';
import { HomeWrapperComponent } from '@modules/home/pages/home-wrapper/home-wrapper.component';
import { BarberShopPageComponent } from '@modules/BarberShop/pages/barber-shop-page/barber-shop-page.component';
import { AppComponent } from './app.component';
import { LoginPageComponent } from '@modules/auth/pages/login-page/login-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,

    },
    {
        path: 'auth',
        component: LoginPageComponent,
        loadChildren: () => import('./modules/auth/auth.routes').then(m => m.authRoutes)
    },
    {
        path: '',
        component: HomeWrapperComponent,
        loadChildren: () => import('./modules/home/pages/home-wrapper/homew.routes').then(m => m.homeWRoutes),
        
    },
    {
        path:'BarberShop',
        component: BarberShopPageComponent,
        loadChildren: () => import('./modules/BarberShop/pages/barber-shop-page/barbershop.routes').then(m => m.barberShopRoutes),
    }
];
