import { Routes } from '@angular/router';
import { AuthenticationGuard } from './UI/Components/Authentication/Guards/authentication.guard';

export const routes: Routes =
    [
        {
            path: "",
            canActivateChild: [AuthenticationGuard],
            loadComponent: () => import("./UI/Components/Layouts/layout/layout.component")
                .then(c => c.LayoutComponent),
            children: [
                {
                    path: "",
                    loadComponent: () => import("./UI/Components/Blank/blank.component")
                        .then(c => c.BlankComponent)
                },
                {
                    path: "ucafs",
                    loadComponent: () => import("./UI/Components/UCAFs/ucafs/ucafs.component")
                        .then(c => c.UcafsComponent)
                }
            ]

        },
        {
            path: "login",
            loadComponent: () => import("./UI/Components/Authentication/Login/login.component")
                .then(x => x.LoginComponent)
        }
    ];
