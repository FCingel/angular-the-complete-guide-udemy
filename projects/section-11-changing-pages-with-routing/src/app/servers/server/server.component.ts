import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // data returned by resolver will be in the data object
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server'];     // the name 'server' has to match the name in the resolve section in AppRoutingModule
        }
      );


    // Commented out since we are now using a resolver instead
    // const id = +this.route.snapshot.params['id'];     // id in route is a string. + can be used (like parseInt) to convert to number
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
