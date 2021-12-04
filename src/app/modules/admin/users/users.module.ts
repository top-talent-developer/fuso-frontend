import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FuseCardModule } from '@fuse/components/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { UsersComponent } from "app/modules/admin/users/users.component";

const adminUserRoutes: Route[] = [
    {
        path: '',
        component: UsersComponent
    }
];

@NgModule({
    declarations: [
        UsersComponent
    ],
    imports     : [
        RouterModule.forChild(adminUserRoutes),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        FuseCardModule,
        MatTableModule,
        MatSortModule
    ]
})
export class AdminUserModule
{
}