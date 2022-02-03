import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [     // nested routes
        { path: ':id/:name', component: UserComponent },
    ] },
    { 
        path: 'servers',
        // canActivate: [AuthGuard],           // servers and its children only accessible if AuthGuard's canActivate method returns true
        canActivateChild: [AuthGuard],          // servers is accessible but children only accessible if AuthGuard's canActivateChild method returns true
        component: ServersComponent,
        children: [
            { path: ':id', component: ServerComponent },
            { path: ':id/edit', component: EditServerComponent },
    ] },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }                   // ** is the wildcard route. This catches all routes you do not know. Must be last in list since routes are parsed from top to bottom.
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]         // exports tells Angular, if this module was added to the imports of another module, what should be accessible to that module
})
export class AppRoutingModule {

}