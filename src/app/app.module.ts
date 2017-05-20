import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerService } from './servers/server.service';
import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';

import { Routing } from './app.routing';

// Users
import { UserService } from './users/user.service';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { ServerFormComponent } from './servers/server-form/server-form.component';

// Students
import { StudentService } from './students/student.service';
import { StudentsComponent } from './students/students.component';
import { StudentFormComponent } from './students/student-form/student-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ServersComponent,
    HeaderComponent,
    UserFormComponent,
    ServerFormComponent,
    StudentsComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing
  ],
  providers: [ServerService, UserService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
