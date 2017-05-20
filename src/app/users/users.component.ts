import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    //loading users data
    this.onGet();

    this.subscription = this.userService.userChanged
      .subscribe(
        () => {
          console.log('Refresh after deletion');
          this.onGet();
        }
      );
  }

  users = [];

  onGet() {
    this.userService.getUsers()
      .subscribe(
        (users: any[]) => this.users = users,
        (error) => console.log(error)
      );
  }

  onEditItem(id:string) {
    console.log("Edit item for :- " + id);
    this.userService.startedEditing.next(id);
  }

  onDeleteItem(id:string) {
    console.log("Delete item for :- " + id);
    this.userService.deleteUser(id).subscribe(
        (response) => {
          console.log(response);
          this.userService.userChanged.next();
        },
        (error) => console.log(error)
      );
  }

}
