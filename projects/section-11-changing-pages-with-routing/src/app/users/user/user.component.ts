import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // ActivatedRoute gives us access to our route parameters
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    this.route.params.subscribe(      // params is an Observable and can take 3 functions that may be passed as arguments
      (params: Params) => {           // 1st argument is fired when new data is sent through this observable (ex: route params changed)
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }
}
