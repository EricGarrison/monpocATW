import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from '../top-nav/top-nav.component';

@Component({
  selector: 'app-radicals',
  templateUrl: './radicals.component.html',
  styleUrls: ['./radicals.component.css'],
  standalone: true,
  imports: [CommonModule, TopNavComponent]
})
export class RadicalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
