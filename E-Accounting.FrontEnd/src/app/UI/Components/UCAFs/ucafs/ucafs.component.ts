import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlankCommonComponent } from '../../../../Common/Components/Blank/blank/blank.component';
import { SectionComponent } from '../../../../Common/Components/Blank/blank/Section/section/section.component';
import { NavModel } from '../../../../Common/Components/Blank/blank/Models/Nav.model';
import { UCAFService } from '../Services/ucaf.service';
import { UCAFModel } from '../ucaf.models';
import { ResponseModel } from '../../../../Common/Models/response.model';

@Component({
  selector: 'app-ucafs',
  standalone: true,
  imports: [CommonModule, BlankCommonComponent, SectionComponent],
  templateUrl: './ucafs.component.html',
  styleUrl: './ucafs.component.css'
})
export class UcafsComponent {
navs: NavModel[] = [
  {
    routerLink : "/",
    class : "",
    name : "Hesap Planı"
  }]

  constructor(private _ucafService: UCAFService){}

  ucafs: UCAFModel[] = [];

  ngOnInit(){
    this.getAll();
  }

  getAll()
  {
    this._ucafService.getAll(res => this.ucafs = res.data)
  }
}
