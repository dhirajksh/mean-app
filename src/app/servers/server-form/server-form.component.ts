import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent implements OnInit {
  serverForm: FormGroup;
  editMode = false;
  editedId: String;

  constructor(private serverService: ServerService, public fb: FormBuilder, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
    
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log('Subscrip for server edit request');
          this.editedId = params['id'];
          console.log('Param id :- ' + params['id'])
          this.editMode = params['id'] != null;
          if (this.editMode){
            this.serverService.getServer(this.editedId).subscribe(
                (server) => {
                  console.log("received server detail");
                  console.log(server);
                  this.serverForm.setValue({
                      id: server.id,
                      name: server.name,
                      capacity: server.capacity,
                      appname: server.appname
                      })
                },
                (error) => console.log(error)
              );
          }
        }
      );
  }

private initForm(){
  this.serverForm = this.fb.group({
    id:[this.generateId()],
    name: ["", Validators.required],
    capacity: ["", Validators.required],
    appname: ["", Validators.required]
  });
}

doSave(){
  //console.log(event);
  console.log(this.serverForm.value);
  console.log(this.editMode);
  if (this.editMode){
      this.serverService.updateServer(this.serverForm.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.serverService.serverChanged.next();
        },
        (error) => console.log(error)
      );
  }else{
      //this.serverForm
      this.serverService.addServer(this.serverForm.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.serverService.serverChanged.next();
        },
        (error) => console.log(error)
      );
  }
  this.onCancel();
}

onCancel() {
    this.router.navigate(['./'], {relativeTo: this.route});
  }


private generateId() {
    return Math.round(Math.random() * 10000);
  }

}
