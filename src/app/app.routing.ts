import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { ServersComponent } from './servers/servers.component';
import { ServerFormComponent } from './servers/server-form/server-form.component';
import { StudentsComponent } from './students/students.component';
import { StudentFormComponent } from './students/student-form/student-form.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent, children:[
    { path: 'new', component: UserFormComponent },
    { path: ':id', component: UserFormComponent },
    //{ path: ':id/edit', component: RecipeEditComponent },
  ] 
  },
  { path: 'servers', component: ServersComponent, children:[
    { path: '', component: ServerFormComponent},
    { path: 'new', component: ServerFormComponent },
    { path: 'edit/:id', component: ServerFormComponent },
    //{ path: ':id/edit', component: RecipeEditComponent },
  ] },
  { path: 'adduser', component: UserFormComponent },
  { path: 'addserver', component: ServerFormComponent },
  { path: 'edituser/:id', component: UserFormComponent },
  { path: 'editserver/:id', component: ServerFormComponent },

  // Students
  { path: 'students', component: StudentsComponent },
  { path: 'students/add', component: StudentFormComponent },
  { path: 'students/edit/:id', component: StudentFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class Routing {

}