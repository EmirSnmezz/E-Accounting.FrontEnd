import { Component, OnInit } from '@angular/core';
import { BlankComponent } from "../../Blank/blank.component";
import { SectionComponent } from "../../../../Common/Components/Blank/blank/Section/section/section.component";
import { NavModel } from '../../../../Common/Components/Blank/blank/Models/Nav.model';
import { BlankCommonComponent } from '../../../../Common/Components/Blank/blank/blank.component';
import { ReportModel } from '../models/report.model';
import { DatePipe } from '@angular/common';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [BlankCommonComponent, SectionComponent, DatePipe],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {

  reports: ReportModel[] = [];

  navs: NavModel[] = []

  constructor(private _report: ReportService)
  {
    this.navs.push(    {
      backRouterLink: undefined,
      backLinkName: undefined,
      insideRouterLink: "reports",
      insideLinkName: "Raporlar",
      class: "",
    })

    console.log(JSON.stringify(this.navs[0]));
  }
}
