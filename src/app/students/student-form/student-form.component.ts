import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  editedid: string;
  editMode = false;
  studentForm: FormGroup;
  
  constructor(public fb: FormBuilder, private studentService : StudentService, private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit() {

    this.initForm();    

    this.route.params
      .subscribe(
        (params: Params) => {
          console.log('Subscrip for student edit request');
          this.editedid = params['id'];
          console.log('Param id :- ' + params['id'])
          this.editMode = params['id'] != null;
          if (this.editMode){
            this.studentService.getStudent(this.editedid).subscribe(
                (student) => {
                  console.log("received student detail");
                  console.log(student);
                  this.studentForm.setValue({
                      SID: student.SID,
                      FName: student.FName,
                      LName: student.LName,
                      ClassName: student.ClassName,
                      Address: student.Address,
                      ContactNo: student.ContactNo
                      })
                },
                (error) => console.log(error)
              );
          }
        }
      );    

  }

private initForm(){
  this.studentForm = this.fb.group({
    SID: [this.generateId()],
    FName: ["", Validators.required],
    LName: ["", Validators.required],
    ClassName: ["", Validators.required],
    Address: ["", Validators.required],
    ContactNo: ["", Validators.required]
  });
}

doSave(){
  //console.log(event);
  console.log(this.studentForm.value);
  if (this.editMode){
      this.studentService.updateStudent(this.studentForm.value, this.editedid)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
  }else{
      this.studentService.addStudent(this.studentForm.value)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
  }
  this.router.navigate(['students']);
}

private generateId() {
    return Math.round(Math.random() * 10000);
  }


}
