import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  footerStyle: any = {}; // Initialize with default styles

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    // Subscribe to menu color changes
    this.menuService.colorSubject.subscribe((color) => {
      this.footerStyle.backgroundColor = color;
    });
  }

  // Function to change footer color
  changeFooterColor(color: string) {
    this.footerStyle.backgroundColor = color;
  }
}
