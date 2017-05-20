import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { StudentService } from './student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  private subscription: Subscription;

  constructor(private studentService: StudentService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //loading users data
    this.onGet();

    this.subscription = this.studentService.studentChanged
      .subscribe(
        () => {
          console.log('Refresh after deletion');
          this.onGet();
        }
      );
  }

  students = [];

  onGet() {
    this.studentService.getStudents()
      .subscribe(
        (students: any[]) => this.students = students,
        (error) => console.log(error)
      );
  }

  onEditItem(id:Number) {
    this.router.navigate(['students/edit', id]);
  }

  onDeleteItem(id:string) {
    console.log("Delete item for :- " + id);
    this.studentService.deleteStudent(id).subscribe(
        (response) => {
          console.log(response);
          this.studentService.studentChanged.next();
        },
        (error) => console.log(error)
      );
  }

}
