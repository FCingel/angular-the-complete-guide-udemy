import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate.guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server/server-resolver.service";
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
            { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
            { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ] },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }                   // ** is the wildcard route. This catches all routes you do not know. Must be last in list since routes are parsed from top to bottom.
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)

        // only set useHash to true if you cannot get the server hosting your app to return index.html when there is a 404 error or you need to support very old browsers that can't parse these paths
        // RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]         // exports tells Angular, if this module was added to the imports of another module, what should be accessible to that module
})
export class AppRoutingModule {

}