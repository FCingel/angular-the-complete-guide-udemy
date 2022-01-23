import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

// Injectable added to receiving service (service where you want to inject something). In newer versions of Angular, recommended to always add Injectable to service. 
@Injectable({providedIn: 'root'})           // For application-wide services, instead of adding service class to providers[] in AppModule, set this config in Injectable(). This allow for lazy loading which can lead to better performance.
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();

      constructor(private loggingService: LoggingService) { }

      addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
      }

      updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
      }
}