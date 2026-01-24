import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from '../top-nav/top-nav.component';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css'],
  standalone: true,
  imports: [CommonModule, TopNavComponent]
})
export class RulesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
