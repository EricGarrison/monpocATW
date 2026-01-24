import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from '../top-nav/top-nav.component';

@Component({
  selector: 'app-paragons',
  templateUrl: './paragons.component.html',
  styleUrls: ['./paragons.component.css'],
  standalone: true,
  imports: [CommonModule, TopNavComponent]
})
export class ParagonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
