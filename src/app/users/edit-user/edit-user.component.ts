import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { IUser } from '../../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  // @ViewChild('userId') userId: ElementRef;
  // @ViewChild ('username') userName: ElementRef;

  userId;
  userName;

  userSubscription: Subscription;
  user: IUser;

  allowEdit = false;

  constructor( private router: Router,
               private route: ActivatedRoute,
               private userService: UserService) { }

  ngOnInit() {
    this. userSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user = this.userService.getUser(+params['id']);
      });

    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this. allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      });

    // this.userId.nativeElement.value = this.user.id;
    // this.userName.nativeElement.value = this.user.name;
    this.userId = this.user.id;
    this.userName = this.user.name;
  }

  onsave() {

  }

}
