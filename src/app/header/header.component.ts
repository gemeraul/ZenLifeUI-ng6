import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  active: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  activateMenu() {
    this.active = !this.active
  }

}
