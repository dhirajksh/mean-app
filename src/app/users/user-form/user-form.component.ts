import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editedid: string;
  editMode = false;
  userForm: FormGroup;
  
  constructor(public fb: FormBuilder, private userService : UserService, private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit() {
    this.initForm();
    
    this.subscription = this.userService.startedEditing
      .subscribe(
        (id: string) => {
          console.log('In Edit Subscription for id :- ' + id);
          this.editedid = id;
          this.editMode = true;
          this.userService.getUser(id).subscribe(
              (user) => {
                console.log("received user detail");
                console.log(user);
                this.userForm.setValue({
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    address: user.address,
                    mobile: user.mobile
                    })
              },
              (error) => console.log(error)
            );
        }
      );
  }

private initForm(){
  this.userForm = this.fb.group({
    name: ["", Validators.required],
    username: ["", Validators.required],
    email: ["", Validators.required],
    address: ["", Validators.required],
    mobile: ["", Validators.required]
  });
}

doSave(){
  //console.log(event);
  console.log(this.userForm.value);
  if (this.editMode){
      this.userService.updateUser(this.userForm.value, this.editedid)
      .subscribe(
        (response) => {
          console.log(response);
          this.userService.userChanged.next();
        },
        (error) => console.log(error)
      );
  }else{
      this.userService.addUser(this.userForm.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.userService.userChanged.next();
        },
        (error) => console.log(error)
      );
  }
}

ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
