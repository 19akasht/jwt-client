import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  name: any[] = [];

  constructor(){
    this.name = [
      {fname: 'Akash', lname : 'Tayde'},
      {fname: 'Rutuja', lname: 'Patil'},
      {fname: 'Ritesh', lname : 'Yadav'},
      {fname: 'Ashish', lanme: 'Vishwakrma'}
    ]
  }

  message:any;

}
