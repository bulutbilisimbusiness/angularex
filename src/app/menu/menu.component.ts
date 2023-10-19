import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [
    { name: 'Red', color: 'red' },
    { name: 'Blue', color: 'blue' },
    { name: 'Green', color: 'green' },
    // Add more menu items with unique colors
  ];

  @Output() colorChange = new EventEmitter<string>();

  constructor(private menuService: MenuService) {}

  ngOnInit() {}

  // Function to change menu item color
  changeColor(color: string) {
    this.colorChange.emit(color);
    this.menuService.changeColor(color);
  }
}
