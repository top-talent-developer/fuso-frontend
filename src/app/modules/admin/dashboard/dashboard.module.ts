import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "app/modules/admin/dashboard/dashboard.component";

const adminDashboardRoutes: Route[] = [
    {
        path      : '',
        component : AdminDashboardComponent
    }
];

@NgModule({
    declarations: [
        AdminDashboardComponent
    ],
    imports     : [
        RouterModule.forChild(adminDashboardRoutes)
    ]
})

export class AdminDashboardModule
{
    
}