import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes , RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent},
  { path: 'accounts', component: AccountsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountsComponent,
    UsersComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
