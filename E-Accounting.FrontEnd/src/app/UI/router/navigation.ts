export class Navigation{
    routerLink: string = "";
    name: string = "";
    icon: string = "";
}

export const Navigations: Navigation[] = [
    
    {
        routerLink: "/",
        name: "Anasayfa",
        icon: "nav-icon fa fa-home text-info"
    },

    {
        routerLink: "/ucafs",
        name: "Hesap Planı",
        icon: "nav-icon fa fa-file-signature"
    },

    {
        routerLink: "/reports",
        name: "Raporlar",
        icon: "fa fa-chart-pie"
    }
]