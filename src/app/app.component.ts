import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  //constructor(private router: Router) {}
  // ngOnInit(): void {
  //   setTimeout(() => {
  //    this.router.navigate(['/users']);
  //   }, 5000);
  // }

  constructor() {}
    ngOnInit(): void {
     }
}
