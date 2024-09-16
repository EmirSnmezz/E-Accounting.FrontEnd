export class Navigation{
    routerLink: string = "";
    name: string = "";
    icon: string = "";
}

export const Navigations: Navigation[] = [
    
    {
        routerLink: "/home-page",
        name: "Anasayfa",
        icon: "nav-icon fa fa-home text-info"
    },

    {
        routerLink: "/ucafs",
        name: "Hesap Planı",
        icon: "nav-icon fa fa-circle text-info"
    },
    {
        routerLink: "/logout",
        name: "Çıkış Yap",
        icon: "nav-icon fa fa-power-off text-danger"
    }
]