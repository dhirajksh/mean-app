webpackJsonp([1,4],{

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 146;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(157);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        // Here write the code for constructor
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(222),
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servers_server_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__servers_servers_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_user_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_users_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_user_form_user_form_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__servers_server_form_server_form_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__students_student_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__students_students_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__students_student_form_student_form_component__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Users




// Students



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_6__servers_servers_component__["a" /* ServersComponent */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__users_user_form_user_form_component__["a" /* UserFormComponent */],
            __WEBPACK_IMPORTED_MODULE_12__servers_server_form_server_form_component__["a" /* ServerFormComponent */],
            __WEBPACK_IMPORTED_MODULE_14__students_students_component__["a" /* StudentsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__students_student_form_student_form_component__["a" /* StudentFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* Routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servers_server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_9__users_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_13__students_student_service__["a" /* StudentService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_users_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_user_form_user_form_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servers_servers_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servers_server_form_server_form_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__students_students_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__students_student_form_student_form_component__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_2__users_users_component__["a" /* UsersComponent */], children: [
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_3__users_user_form_user_form_component__["a" /* UserFormComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__users_user_form_user_form_component__["a" /* UserFormComponent */] },
        ]
    },
    { path: 'servers', component: __WEBPACK_IMPORTED_MODULE_4__servers_servers_component__["a" /* ServersComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_5__servers_server_form_server_form_component__["a" /* ServerFormComponent */] },
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_5__servers_server_form_server_form_component__["a" /* ServerFormComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_5__servers_server_form_server_form_component__["a" /* ServerFormComponent */] },
        ] },
    { path: 'adduser', component: __WEBPACK_IMPORTED_MODULE_3__users_user_form_user_form_component__["a" /* UserFormComponent */] },
    { path: 'addserver', component: __WEBPACK_IMPORTED_MODULE_5__servers_server_form_server_form_component__["a" /* ServerFormComponent */] },
    { path: 'edituser/:id', component: __WEBPACK_IMPORTED_MODULE_3__users_user_form_user_form_component__["a" /* UserFormComponent */] },
    { path: 'editserver/:id', component: __WEBPACK_IMPORTED_MODULE_5__servers_server_form_server_form_component__["a" /* ServerFormComponent */] },
    // Students
    { path: 'students', component: __WEBPACK_IMPORTED_MODULE_6__students_students_component__["a" /* StudentsComponent */] },
    { path: 'students/add', component: __WEBPACK_IMPORTED_MODULE_7__students_student_form_student_form_component__["a" /* StudentFormComponent */] },
    { path: 'students/edit/:id', component: __WEBPACK_IMPORTED_MODULE_7__students_student_form_student_form_component__["a" /* StudentFormComponent */] },
];
var Routing = (function () {
    function Routing() {
    }
    return Routing;
}());
Routing = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], Routing);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(223),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".container {\n  margin-top: 50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a routerLink=\"/\" class=\"navbar-brand\">CRUD App</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/users\">Users</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/servers\">Servers</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/students\">Students</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\" appDropdown>\n          <a style=\"cursor: pointer;\" class=\"dropdown-toggle\">Admin <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li routerLinkActive=\"active\"><a style=\"cursor: pointer;\" routerLink=\"/users\">Session</a></li>\n            <li routerLinkActive=\"active\"><a style=\"cursor: pointer;\" routerLink=\"/users\">Class</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <br><br><br><br>\n</div>  \n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form [formGroup]=\"serverForm\" (ngSubmit)=\"doSave()\">\n      <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"form-group\">\n              <label for=\"name\">Server Name</label>\n              <input formControlName=\"name\" type=\"text\" placeholder=\"Enter server name\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"form-group\">\n              <label for=\"name\">Capacity</label>\n              <input formControlName=\"capacity\" type=\"text\" placeholder=\"Enter server capacity\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"form-group\">\n              <label for=\"name\">Application</label>\n              <input formControlName=\"appname\" type=\"text\" placeholder=\"Specify application installed\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <button class=\"btn btn-primary\" type=\"submit\">Save</button>\n          </div>\n        </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-7\">\n      <h1>Servers</h1>\n      <button class=\"btn btn-primary\" (click)=\"onNewServer()\">Add Server</button>\n      <button class=\"btn btn-primary\" (click)=\"onGet()\">Get Servers</button>\n      <table class=\"table\">\n      <thead><tr><td>Name</td><td>Capacity</td><td>Application</td><td></td><td></td></tr></thead>\n      <tr *ngFor=\"let server of servers\">\n        <td>{{ server.name }} (Id: {{ server.id }})</td>\n        <td>{{ server.capacity }}</td>\n        <td>{{ server.appname }}</td>\n        <td>\n          <a style=\"cursor: pointer\" (click)=\"onEditServer(server.id)\">Edit</a>\n        </td>\n        <td>\n          <a style=\"cursor: pointer\" (click)=\"onDeleteItem(server.id)\">Delete</a>\n        </td>\n\n      </tr>\n      </table>\n  </div>\n  <div class=\"col-md-5\">\n    <router-outlet></router-outlet>\n  </div>"

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <br><br><br><br>\n</div>  \n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form [formGroup]=\"studentForm\" (ngSubmit)=\"doSave()\">\n      <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"form-group\">\n              <label for=\"name\">First Name</label>\n              <input formControlName=\"FName\" type=\"text\" placeholder=\"Your first name\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"form-group\">\n              <label for=\"name\">Last Name</label>\n              <input formControlName=\"LName\" type=\"text\" placeholder=\"Your last name\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"form-group\">\n              <label for=\"name\">Class</label>\n              <input formControlName=\"ClassName\" type=\"text\" placeholder=\"Your Class Name\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"form-group\">\n              <label for=\"name\">Address</label>\n              <input formControlName=\"Address\" type=\"text\" placeholder=\"Your Address\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"form-group\">\n              <label for=\"name\">Contact Number</label>\n              <input formControlName=\"ContactNo\" type=\"text\" placeholder=\"Your Contact No\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <button class=\"btn btn-primary\" type=\"submit\">Save</button>\n          </div>\n        </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-7\">\n      <h1>Student</h1>\n      <button class=\"btn btn-primary\" routerLink=\"/students/add\">Add Student</button>\n      <button class=\"btn btn-primary\" (click)=\"onGet()\">Get Users</button>\n      <table class=\"table\">\n      <thead><tr><td>Name</td><td>Address</td><td>Contact No</td><td></td><td></td></tr></thead>\n      <tr *ngFor=\"let student of students\">\n        <td>{{ student.FName }} (Student id: {{ student.SID }})</td>\n        <td>{{ student.Address }}</td>\n        <td>{{ student.ContactNo }}</td>\n        <td>\n          <a style=\"cursor: pointer\" (click)=\"onEditItem(student._id)\">Edit</a>\n        </td>\n        <td>\n          <a style=\"cursor: pointer\" (click)=\"onDeleteItem(student._id)\">Delete</a>\n        </td>\n\n      </tr>\n      </table>\n  </div>"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <br><br><br><br>\n</div>  \n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"doSave()\">\n      <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"form-group\">\n              <label for=\"name\">Name</label>\n              <input formControlName=\"name\" type=\"text\" placeholder=\"Your full name\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"form-group\">\n              <label for=\"name\">Login Id</label>\n              <input formControlName=\"username\" type=\"text\" placeholder=\"Your login name\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"form-group\">\n              <label for=\"name\">Email Id</label>\n              <input formControlName=\"email\" type=\"email\" placeholder=\"Your email\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"form-group\">\n              <label for=\"name\">Address</label>\n              <input formControlName=\"address\" type=\"text\" placeholder=\"Your Address\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"form-group\">\n              <label for=\"name\">Contact Number</label>\n              <input formControlName=\"mobile\" type=\"text\" placeholder=\"Your Contact No\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <button class=\"btn btn-primary\" type=\"submit\">Save</button>\n          </div>\n        </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-7\">\n      <h1>Users</h1>\n      <button class=\"btn btn-primary\" routerLink=\"/adduser\">Add User</button>\n      <button class=\"btn btn-primary\" (click)=\"onGet()\">Get Users</button>\n      <table class=\"table\">\n      <thead><tr><td>Name</td><td>Email Id</td><td>Contact No</td><td></td><td></td></tr></thead>\n      <tr *ngFor=\"let user of users\">\n        <td>{{ user.name }} (login id: {{ user.username }})</td>\n        <td>{{ user.email }}</td>\n        <td>{{ user.mobile }}</td>\n        <td>\n          <a style=\"cursor: pointer\" (click)=\"onEditItem(user._id)\">Edit</a>\n        </td>\n        <td>\n          <a style=\"cursor: pointer\" (click)=\"onDeleteItem(user._id)\">Delete</a>\n        </td>\n\n      </tr>\n      </table>\n  </div>\n  <div class=\"col-md-5\">\n    <app-user-form></app-user-form>\n  </div>"

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServerService = (function () {
    function ServerService(http) {
        this.http = http;
        this.serverChanged = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    ServerService.prototype.addServer = function (server) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.post('http://localhost:3000/api/server', server, { headers: headers });
    };
    ServerService.prototype.updateServer = function (server) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.put('http://localhost:3000/api/server', server, { headers: headers });
    };
    ServerService.prototype.getServers = function () {
        return this.http.get('http://localhost:3000/api/server')
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    ServerService.prototype.getServer = function (id) {
        return this.http.get('http://localhost:3000/api/server/' + id)
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    ServerService.prototype.deleteServer = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.delete('http://localhost:3000/api/server/' + id, { headers: headers });
    };
    return ServerService;
}());
ServerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ServerService);

var _a;
//# sourceMappingURL=server.service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentService = (function () {
    function StudentService(http) {
        this.http = http;
        this.studentChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    StudentService.prototype.addStudent = function (student) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.post('http://localhost:3000/api/student', student, { headers: headers });
    };
    StudentService.prototype.updateStudent = function (student, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.put('http://localhost:3000/api/student/' + id, student, { headers: headers });
    };
    StudentService.prototype.deleteStudent = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.delete('http://localhost:3000/api/student/' + id, { headers: headers });
    };
    StudentService.prototype.getStudents = function () {
        return this.http.get('http://localhost:3000/api/students')
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    StudentService.prototype.getStudent = function (id) {
        return this.http.get('http://localhost:3000/api/student/' + id)
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    return StudentService;
}());
StudentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], StudentService);

var _a;
//# sourceMappingURL=student.service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.startedEditing = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.userChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    UserService.prototype.addUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.post('http://localhost:3000/api/user', user, { headers: headers });
    };
    UserService.prototype.updateUser = function (user, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.post('http://localhost:3000/api/updateuser/' + id, user, { headers: headers });
    };
    UserService.prototype.deleteUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.delete('http://localhost:3000/api/user/' + id, { headers: headers });
    };
    UserService.prototype.getUsers = function () {
        return this.http.get('http://localhost:3000/api/user')
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get('http://localhost:3000/api/user/' + id)
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__server_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServerFormComponent = (function () {
    function ServerFormComponent(serverService, fb, route, router) {
        this.serverService = serverService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.editMode = false;
    }
    ServerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.route.params
            .subscribe(function (params) {
            console.log('Subscrip for server edit request');
            _this.editedId = params['id'];
            console.log('Param id :- ' + params['id']);
            _this.editMode = params['id'] != null;
            if (_this.editMode) {
                _this.serverService.getServer(_this.editedId).subscribe(function (server) {
                    console.log("received server detail");
                    console.log(server);
                    _this.serverForm.setValue({
                        id: server.id,
                        name: server.name,
                        capacity: server.capacity,
                        appname: server.appname
                    });
                }, function (error) { return console.log(error); });
            }
        });
    };
    ServerFormComponent.prototype.initForm = function () {
        this.serverForm = this.fb.group({
            id: [this.generateId()],
            name: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            capacity: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            appname: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    ServerFormComponent.prototype.doSave = function () {
        var _this = this;
        //console.log(event);
        console.log(this.serverForm.value);
        console.log(this.editMode);
        if (this.editMode) {
            this.serverService.updateServer(this.serverForm.value)
                .subscribe(function (response) {
                console.log(response);
                _this.serverService.serverChanged.next();
            }, function (error) { return console.log(error); });
        }
        else {
            //this.serverForm
            this.serverService.addServer(this.serverForm.value)
                .subscribe(function (response) {
                console.log(response);
                _this.serverService.serverChanged.next();
            }, function (error) { return console.log(error); });
        }
        this.onCancel();
    };
    ServerFormComponent.prototype.onCancel = function () {
        this.router.navigate(['./'], { relativeTo: this.route });
    };
    ServerFormComponent.prototype.generateId = function () {
        return Math.round(Math.random() * 10000);
    };
    return ServerFormComponent;
}());
ServerFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-server-form',
        template: __webpack_require__(224),
        styles: [__webpack_require__(214)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], ServerFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=server-form.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServersComponent = (function () {
    function ServersComponent(serverService, router, route) {
        this.serverService = serverService;
        this.router = router;
        this.route = route;
        this.servers = [];
    }
    ServersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //loading users data
        this.onGet();
        this.subscription = this.serverService.serverChanged
            .subscribe(function () {
            console.log('Refresh after deletion');
            _this.onGet();
        });
    };
    ServersComponent.prototype.onGet = function () {
        var _this = this;
        this.serverService.getServers()
            .subscribe(function (servers) { return _this.servers = servers; }, function (error) { return console.log(error); });
    };
    ServersComponent.prototype.onDeleteItem = function (id) {
        var _this = this;
        console.log("Delete item for :- " + id);
        this.serverService.deleteServer(id).subscribe(function (response) {
            console.log(response);
            //this.serverService.serverChanged.next();
            _this.onCancel();
        }, function (error) { return console.log(error); });
    };
    ServersComponent.prototype.onNewServer = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    ServersComponent.prototype.onEditServer = function (id) {
        this.router.navigate(['edit', id], { relativeTo: this.route });
    };
    ServersComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    ServersComponent.prototype.generateId = function () {
        return Math.round(Math.random() * 10000);
    };
    return ServersComponent;
}());
ServersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-servers',
        template: __webpack_require__(225),
        styles: [__webpack_require__(215)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], ServersComponent);

var _a, _b, _c;
//# sourceMappingURL=servers.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentFormComponent = (function () {
    function StudentFormComponent(fb, studentService, route, router) {
        this.fb = fb;
        this.studentService = studentService;
        this.route = route;
        this.router = router;
        this.editMode = false;
    }
    StudentFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.route.params
            .subscribe(function (params) {
            console.log('Subscrip for student edit request');
            _this.editedid = params['id'];
            console.log('Param id :- ' + params['id']);
            _this.editMode = params['id'] != null;
            if (_this.editMode) {
                _this.studentService.getStudent(_this.editedid).subscribe(function (student) {
                    console.log("received student detail");
                    console.log(student);
                    _this.studentForm.setValue({
                        SID: student.SID,
                        FName: student.FName,
                        LName: student.LName,
                        ClassName: student.ClassName,
                        Address: student.Address,
                        ContactNo: student.ContactNo
                    });
                }, function (error) { return console.log(error); });
            }
        });
    };
    StudentFormComponent.prototype.initForm = function () {
        this.studentForm = this.fb.group({
            SID: [this.generateId()],
            FName: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            LName: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            ClassName: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            Address: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            ContactNo: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    StudentFormComponent.prototype.doSave = function () {
        //console.log(event);
        console.log(this.studentForm.value);
        if (this.editMode) {
            this.studentService.updateStudent(this.studentForm.value, this.editedid)
                .subscribe(function (response) {
                console.log(response);
            }, function (error) { return console.log(error); });
        }
        else {
            this.studentService.addStudent(this.studentForm.value)
                .subscribe(function (response) {
                console.log(response);
            }, function (error) { return console.log(error); });
        }
        this.router.navigate(['students']);
    };
    StudentFormComponent.prototype.generateId = function () {
        return Math.round(Math.random() * 10000);
    };
    return StudentFormComponent;
}());
StudentFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-student-form',
        template: __webpack_require__(226),
        styles: [__webpack_require__(216)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], StudentFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=student-form.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__student_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentsComponent = (function () {
    function StudentsComponent(studentService, router, route) {
        this.studentService = studentService;
        this.router = router;
        this.route = route;
        this.students = [];
    }
    StudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //loading users data
        this.onGet();
        this.subscription = this.studentService.studentChanged
            .subscribe(function () {
            console.log('Refresh after deletion');
            _this.onGet();
        });
    };
    StudentsComponent.prototype.onGet = function () {
        var _this = this;
        this.studentService.getStudents()
            .subscribe(function (students) { return _this.students = students; }, function (error) { return console.log(error); });
    };
    StudentsComponent.prototype.onEditItem = function (id) {
        this.router.navigate(['students/edit', id]);
    };
    StudentsComponent.prototype.onDeleteItem = function (id) {
        var _this = this;
        console.log("Delete item for :- " + id);
        this.studentService.deleteStudent(id).subscribe(function (response) {
            console.log(response);
            _this.studentService.studentChanged.next();
        }, function (error) { return console.log(error); });
    };
    return StudentsComponent;
}());
StudentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-students',
        template: __webpack_require__(227),
        styles: [__webpack_require__(217)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], StudentsComponent);

var _a, _b, _c;
//# sourceMappingURL=students.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserFormComponent = (function () {
    function UserFormComponent(fb, userService, route, router) {
        this.fb = fb;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.editMode = false;
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.subscription = this.userService.startedEditing
            .subscribe(function (id) {
            console.log('In Edit Subscription for id :- ' + id);
            _this.editedid = id;
            _this.editMode = true;
            _this.userService.getUser(id).subscribe(function (user) {
                console.log("received user detail");
                console.log(user);
                _this.userForm.setValue({
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    address: user.address,
                    mobile: user.mobile
                });
            }, function (error) { return console.log(error); });
        });
    };
    UserFormComponent.prototype.initForm = function () {
        this.userForm = this.fb.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            username: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            email: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            address: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            mobile: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    UserFormComponent.prototype.doSave = function () {
        var _this = this;
        //console.log(event);
        console.log(this.userForm.value);
        if (this.editMode) {
            this.userService.updateUser(this.userForm.value, this.editedid)
                .subscribe(function (response) {
                console.log(response);
                _this.userService.userChanged.next();
            }, function (error) { return console.log(error); });
        }
        else {
            this.userService.addUser(this.userForm.value)
                .subscribe(function (response) {
                console.log(response);
                _this.userService.userChanged.next();
            }, function (error) { return console.log(error); });
        }
    };
    UserFormComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-user-form',
        template: __webpack_require__(228),
        styles: [__webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], UserFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //loading users data
        this.onGet();
        this.subscription = this.userService.userChanged
            .subscribe(function () {
            console.log('Refresh after deletion');
            _this.onGet();
        });
    };
    UsersComponent.prototype.onGet = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.users = users; }, function (error) { return console.log(error); });
    };
    UsersComponent.prototype.onEditItem = function (id) {
        console.log("Edit item for :- " + id);
        this.userService.startedEditing.next(id);
    };
    UsersComponent.prototype.onDeleteItem = function (id) {
        var _this = this;
        console.log("Delete item for :- " + id);
        this.userService.deleteUser(id).subscribe(function (response) {
            console.log(response);
            _this.userService.userChanged.next();
        }, function (error) { return console.log(error); });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-users',
        template: __webpack_require__(229),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], UsersComponent);

var _a;
//# sourceMappingURL=users.component.js.map

/***/ })

},[496]);
//# sourceMappingURL=main.bundle.js.map