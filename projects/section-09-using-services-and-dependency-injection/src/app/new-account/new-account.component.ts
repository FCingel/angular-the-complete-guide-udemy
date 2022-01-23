import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]     // Since we want the same instance of AccountsService as the one in the parent component (AppComponent), we do not add it to providers since it would be overridden. We still add it to the constructor.
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
