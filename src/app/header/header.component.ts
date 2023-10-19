import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  headerStyle: any = {}; // Initialize with default styles

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    // Subscribe to menu color changes
    this.menuService.colorSubject.subscribe((color) => {
      this.headerStyle.backgroundColor = color;
    });
  }

  // Function to change header color
  changeHeaderColor(color: string) {
    this.headerStyle.backgroundColor = color;
  }
}
