import { Routes } from "@angular/router";
import { LoginPageComponent } from "./pages/login-page/login-page.component";

export const authRoutes: Routes = [
    {
        path: 'login', // https://localhost:4200/auth/login
        component: LoginPageComponent
    },

    {
        path: '**', // https://localhost:4200/auth/login
        redirectTo: '/auth/login'
    }
];