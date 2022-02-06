import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) {      // ActivatedRoute injects the currently active route that loaded this component
  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // causes an error in the console since servers/servers does not match any routes
    // this.router.navigate(['servers'], {relativeTo: this.route});      // navigate() does not know what component we are in so we need to send it in the 2nd parameter
  }
}
