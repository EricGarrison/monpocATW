import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from '../top-nav/top-nav.component';

@Component({
  selector: 'app-fiends',
  templateUrl: './fiends.component.html',
  styleUrls: ['./fiends.component.css'],
  standalone: true,
  imports: [CommonModule, TopNavComponent]
})
export class FiendsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
