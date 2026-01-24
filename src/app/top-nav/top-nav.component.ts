import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class TopNavComponent implements OnInit {
  title = 'Monsterpocalypse Around The World';
  constructor() { }

  ngOnInit(): void {
  }

}
