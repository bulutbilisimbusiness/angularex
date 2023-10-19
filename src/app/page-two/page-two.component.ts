import { Component } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent {
  headerStyle = {
    // Define your header styles here
    backgroundColor: '#3498db', // Blue
    color: 'white'
  };

  footerStyle = {
    // Define your footer styles here
    backgroundColor: '#2ecc71', // Green
    color: 'white'
  };
}
