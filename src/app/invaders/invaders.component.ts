import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from '../top-nav/top-nav.component';

@Component({
  selector: 'app-invaders',
  templateUrl: './invaders.component.html',
  styleUrls: ['./invaders.component.css'],
  standalone: true,
  imports: [CommonModule, TopNavComponent]
})
export class InvadersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
