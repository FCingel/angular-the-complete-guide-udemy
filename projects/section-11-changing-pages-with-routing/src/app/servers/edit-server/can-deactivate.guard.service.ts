import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

// interface is a contract which can be imported by another class, which forces this class to provide some logic
export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

// CanDeactivate is a generic type that wraps an interface and forces a component to implement the canDeactivate method
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

    canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        // canDeactivate called on component we are currently on. We created this interface so that Angular Router can execute canDeactivate in our service and that the component we are currently on has the canDeactivate method too.
        // this is where we would implement the logic checking if we are allowed to leave or not. We need this connection between guard and component.
        return component.canDeactivate();
    }
}