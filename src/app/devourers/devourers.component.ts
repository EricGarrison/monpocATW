import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from '../top-nav/top-nav.component';

@Component({
  selector: 'app-devourers',
  templateUrl: './devourers.component.html',
  styleUrls: ['./devourers.component.css'],
  standalone: true,
  imports: [CommonModule, TopNavComponent]
})
export class DevourersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
