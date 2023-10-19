import { Component } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent {
  headerStyle = {
    // Define your header styles here
    backgroundColor: '#e74c3c', // Red
    color: 'white'
  };

  footerStyle = {
    // Define your footer styles here
    backgroundColor: '#9b59b6', // Purple
    color: 'white'
  };
}
