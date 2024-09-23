import { CommonModule, NgFor } from '@angular/common';
import { Component, ElementRef, TemplateRef } from '@angular/core';
import { BlankCommonComponent } from '../../../../../Common/Components/Blank/blank/blank.component';
import { SectionComponent } from '../../../../../Common/Components/Blank/blank/Section/section/section.component';
import { NavModel } from '../../../../../Common/Components/Blank/blank/Models/Nav.model';
import { UCAFService } from '../../Services/ucaf.service';
import { UCAFModel } from './ucafModels/create.ucaf.models';
import { ResponseModel } from '../../../../../Common/Models/response.model';
import { SearchOfKeywordPipe } from '../../Pipes/search-of-keyword.pipe';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { InputValidDirective } from '../../../../../Common/Directives/Input-validtation-directive/input-valid.directive';
import { LoadingButtonComponent } from "../../../../../Common/Components/loading-button/loading-button.component";
import { ToastrService, ToastrTypes } from '../../../../../Common/Services/ToastrService/toastr.service';
import { Router } from '@angular/router';
import { RemoveUcafModel } from './ucafModels/remove.ucaf.model';

@Component({
  selector: 'app-ucafs',
  standalone: true,
  imports: [
    CommonModule,
    BlankCommonComponent,
    SectionComponent,
    SearchOfKeywordPipe,
    FormsModule,
    InputValidDirective,
    LoadingButtonComponent
  ],
  templateUrl: './ucafs.component.html',
  styleUrl: './ucafs.component.css'
})
export class UcafsComponent {
  navs: NavModel[] = [
    {
      routerLink: "/",
      class: "",
      name: "Hesap Planı"
    }]

  filterText: string = "";
  issAddForm: boolean = false;
  openFormButtonIconString: string = "fa fa-plus";
  ucafType: string = "M"
  isLoading: boolean = false;

  constructor(private _ucafService: UCAFService, private _toastr: ToastrService, private _router: Router) { }

  ucafs: UCAFModel[] = [];

  ngOnInit() {
    this.getAll();
  }

  showAddForm() {
    this.issAddForm = !this.issAddForm
    if (this.issAddForm == true) {
      this.openFormButtonIconString = "fa fa-minus"
    }

    if (this.issAddForm == false) {
      this.openFormButtonIconString = "fa fa-plus"
    }
  }

  //            ********************************************* API Operations *********************************************
  //Create Operations
  add(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;
      let model = new UCAFModel();
      model.code = form.controls["code"].value;
      model.type = form.controls["type"].value;
      model.name = form.controls["name"].value;

      this._ucafService.add(model, (res) => {
        form.reset();
        this.ucafType = "M".toString();
        this.getAll();
        this.isLoading = false;
        this._toastr.toast(ToastrTypes.Success, res.message, "Ekleme İşlemi Başarılı...")
      })
    }
  }
  
  addMainUcafs() {

    this._ucafService.createMainUcafs((res) => {
      this._toastr.toast(ToastrTypes.Success, res.message, "Ana Hesap Planı Kayıtları Eklendi...")
      this.getAll()
    })
  }

  //Remove Operations
  remove(data: RemoveUcafModel) {
    var result = confirm("Hesap Planını Gerçekten Silmek İstiyor Musunuz ?");
    if(result)
    {
      this._ucafService.remove(data, (res) => {
        var model = new RemoveUcafModel();
        model.id = data.id;
        model.companyId = data.companyId;
        this.getAll();
        this._toastr.toast(ToastrTypes.Success, res.message, "Silme İşlemi Başarılı...");
      });
    }
  }

  //Get Operations
  getAll() {
    this._ucafService.getAll(res => this.ucafs = res.data)
  }

}