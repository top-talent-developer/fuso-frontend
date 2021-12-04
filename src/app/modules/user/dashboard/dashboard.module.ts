import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UserDashboardComponent } from "app/modules/user/dashboard/dashboard.component";

const UserDashboardRoutes: Route[] = [
    {
        path     : '',
        component: UserDashboardComponent
    }
];

@NgModule({
    declarations: [
        UserDashboardComponent
    ],
    imports     : [
        RouterModule.forChild(UserDashboardRoutes)
    ]
})
export class UserDashboardModule
{
}
