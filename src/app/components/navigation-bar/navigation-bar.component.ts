import { Component } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MENUS } from './menus';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent {
  menus: Menu[] = MENUS;

  constructor() {}
}
