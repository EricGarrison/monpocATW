import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-basic-rules',
  templateUrl: './basic-rules.component.html',
  styleUrls: ['./basic-rules.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, TopNavComponent]
})
export class BasicRulesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
