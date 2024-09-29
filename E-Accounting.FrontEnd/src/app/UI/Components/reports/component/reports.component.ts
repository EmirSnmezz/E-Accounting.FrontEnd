import { Component } from '@angular/core';
import { BlankCommonComponent } from '../../../../Common/Components/Blank/blank/blank.component';
import { SectionComponent } from '../../../../Common/Components/Blank/blank/Section/section/section.component';
import { NavModel } from '../../../../Common/Components/Blank/blank/Models/Nav.model';
import { ReportModel } from '../models/report.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [BlankCommonComponent, SectionComponent, DatePipe],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  navs: NavModel[] = [
    {
      routerLink: "/reports",
      class: "",
      name: "Raporlar"
    }
  ]

  reports: ReportModel[] = [];
}
