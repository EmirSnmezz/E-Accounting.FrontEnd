import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SectionComponent } from "./Section/section/section.component";
import { RouterModule } from '@angular/router';
import { NavModel } from './Models/Nav.model';

@Component({
  selector: 'app-blank-common',
  standalone: true,
  imports: [CommonModule, SectionComponent, RouterModule],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.css'
})
export class BlankCommonComponent {
@Input()title: string = "";
@Input() navs: NavModel[] = [];

}
