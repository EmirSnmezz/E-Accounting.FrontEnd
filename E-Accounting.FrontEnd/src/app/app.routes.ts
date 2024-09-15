import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationGuard } from './UI/Components/Authentication/Guards/authentication.guard';

export const routes: Routes = 
[
    {
        path : "",
        canActivateChild : [AuthenticationGuard],
        loadComponent: ()=> import("./UI/Components/Layouts/layout/layout.component")
        .then(c => c.LayoutComponent),
        children : [
            {
                path : "", 
                loadComponent : ()=> import("./UI/Components/Blank/blank.component")
                .then( c => c.BlankComponent)}
        ]
        
    },
    {
        path:"login",
        loadComponent: () => import("./UI/Components/Authentication/login/login.component").then(x => x.LoginComponent)
    }
];
