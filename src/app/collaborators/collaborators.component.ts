import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from '../top-nav/top-nav.component';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css'],
  standalone: true,
  imports: [CommonModule, TopNavComponent]
})
export class CollaboratorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
