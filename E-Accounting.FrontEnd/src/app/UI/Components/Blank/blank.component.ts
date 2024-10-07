import { Component } from '@angular/core';
import { SectionComponent } from "../../../Common/Components/Blank/blank/Section/section/section.component";
import { BlankCommonComponent } from '../../../Common/Components/Blank/blank/blank.component';
import { NavModel } from '../../../Common/Components/Blank/blank/Models/Nav.model';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [BlankComponent, SectionComponent, BlankCommonComponent],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.css'
})
export class BlankComponent {
title: string = "Anasayfa"
sectionTitle: string = "Anasayfa"
navs: NavModel[] = [
  {
    backLinkName: "",
    backRouterLink: "",
    insideLinkName: "Anasayfa",
   insideRouterLink: "/" ,
   class: ""
  }
]
}
