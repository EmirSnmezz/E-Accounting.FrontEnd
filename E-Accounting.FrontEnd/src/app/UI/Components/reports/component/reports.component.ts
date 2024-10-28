import { Component, OnInit } from '@angular/core';
import { BlankComponent } from "../../Blank/blank.component";
import { SectionComponent } from "../../../../Common/Components/Blank/blank/Section/section/section.component";
import { NavModel } from '../../../../Common/Components/Blank/blank/Models/Nav.model';
import { BlankCommonComponent } from '../../../../Common/Components/Blank/blank/blank.component';
import { ReportModel } from '../models/report.model';
import { CommonModule, DatePipe } from '@angular/common';
import { ReportService } from '../services/report.service';
import { get } from 'jquery';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [BlankCommonComponent, SectionComponent, DatePipe, CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {

  reports: ReportModel[] = [];
  navs: NavModel[] = []
  reportStatusText: string = "";

  constructor(private _report: ReportService)
  {
    this.navs.push(    {
      backRouterLink: undefined,
      backLinkName: undefined,
      insideRouterLink: "reports",
      insideLinkName: "Raporlar",
      class: "",
    })
  }

  ngOnInit()
  {
    this.getAll();
  }

  getAll()
  {
    this._report.getAll(res => this.reports = res)
  }

  changeSpanClassByStatus(status: boolean)
  {
    if(status){
      this.reportStatusText = "Hazır...";
      return "text-success";
    }
    else{
      this.reportStatusText = "Hazırlanıyor...."
      return "text-danger";
    }
  }
}
