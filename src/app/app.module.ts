import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {Routes , RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserComponent } from './users/user/user.component';
import { EditAccountComponent } from './accounts/edit-account/edit-account.component';
import {UserService} from './users/user.service';
import { Notfound404Component } from './notfound-404/notfound-404.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { LoginService } from './login-service.service';
import { CanDeactivateGuard } from './users/edit-user/can-deactivate-guard.service';

// const routes: Routes = [
//   { path: '', component: HomeComponent},
//   { path: 'users', component: UsersComponent, children: [
//     { path: ':id', component: UserComponent},
//     { path: ':id/edit', component: EditUserComponent }
//   ]},
//   { path: 'accounts', component: AccountsComponent},
//   { path: 'accounts/:id/edit', component: EditAccountComponent},
//   { path: 'not-found', component: Notfound404Component },
//   //{ path: '**', component: Notfound404Component }
//   { path: '**', redirectTo: '/not-found' }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountsComponent,
    UsersComponent,
    EditUserComponent,
    UserComponent,
    EditAccountComponent,
    Notfound404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //RouterModule.forRoot(routes)
    AppRoutingModule
  ],
  providers: [UserService, AuthGuard, LoginService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
