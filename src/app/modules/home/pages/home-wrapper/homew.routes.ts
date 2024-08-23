import { Routes } from "@angular/router";

export const homeWRoutes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('@modules/home/pages/home-page/home.routes').then(m => m.homeRoutes)

    },
    {
        path: 'barber-shop',
        loadChildren: () => import('@modules/BarberShop/pages/barber-shop-page/barbershop.routes').then(m => m.barberShopRoutes)
    },
    {
        path: 'scheduling',
        loadChildren: () => import('@modules/Scheduling/pages/scheduling-pages/scheduling.routes').then(m => m.schedulingRoutes)
    }
];    