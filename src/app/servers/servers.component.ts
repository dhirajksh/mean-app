import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  private subscription: Subscription;
  servers = [];

  constructor(private serverService: ServerService, private router: Router,
              private route: ActivatedRoute) {}

    ngOnInit() {
    //loading users data
    this.onGet();

    this.subscription = this.serverService.serverChanged
      .subscribe(
        () => {
          console.log('Refresh after deletion');
          this.onGet();
        }
      );
  }

  onGet() {
    this.serverService.getServers()
      .subscribe(
        (servers: any[]) => this.servers = servers,
        (error) => console.log(error)
      );
  }

  onDeleteItem(id:string) {
    console.log("Delete item for :- " + id);
    this.serverService.deleteServer(id).subscribe(
        (response) => {
          console.log(response);
          //this.serverService.serverChanged.next();
          this.onCancel();
        },
        (error) => console.log(error)
      );
  }

  onNewServer() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEditServer(id:Number) {
    this.router.navigate(['edit', id], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

}
