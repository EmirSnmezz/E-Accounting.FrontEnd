import { CommonModule, NgFor } from '@angular/common';
import { Component, ElementRef, TemplateRef } from '@angular/core';
import { BlankCommonComponent } from '../../../../../Common/Components/Blank/blank/blank.component';
import { SectionComponent } from '../../../../../Common/Components/Blank/blank/Section/section/section.component';
import { NavModel } from '../../../../../Common/Components/Blank/blank/Models/Nav.model';
import { UCAFService } from '../../Services/ucaf.service';
import { UCAFModel } from './ucafModels/create.ucaf.models';
import { SearchOfKeywordPipe } from '../../Pipes/search-of-keyword.pipe';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { InputValidDirective } from '../../../../../Common/Directives/Input-validtation-directive/input-valid.directive';
import { LoadingButtonComponent } from "../../../../../Common/Components/loading-button/loading-button.component";
import { ToastrService, ToastrTypes } from '../../../../../Common/Services/ToastrService/toastr.service';
import { Router } from '@angular/router';
import { RemoveUcafModel } from './ucafModels/remove.ucaf.model';
import { SwalService } from '../../../../../Common/Services/SwalService/swal.service';
import { ExcelLoadingButtonComponent } from "../../../../../Common/Components/excel-loading-button/excel-loading-button/excel-loading-button.component";
import { ReportRequestModel } from '../../../../../Common/Models/report-request.model';
import { ReportService } from '../../../reports/services/report.service';

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
    LoadingButtonComponent,
    ExcelLoadingButtonComponent
],
  templateUrl: './ucafs.component.html',
  styleUrl: './ucafs.component.css'
})
export class UcafsComponent {
  navs: NavModel[] = [
    {
      backLinkName: "Anasayfa",
      backRouterLink: "/",
      class: "",
      insideLinkName: "Hesap Planı",
      insideRouterLink: "/ucafs"
    }]

  isAddForm: boolean = false;
  isUpdateForm: boolean = false;
  isLoading: boolean = false;
  excelIsLoading: boolean = false;
  isViewReport: boolean = false;
  filterText: string = "";
  openFormButtonIconString: string = "fa fa-plus";
  ucafType: string = "M"
  updateUcaf: UCAFModel = new UCAFModel();

  constructor(private _ucafService: UCAFService, private _toastr: ToastrService, private _router: Router, private _swalService: SwalService, private _reportService: ReportService) { }

  ucafs: UCAFModel[] = [];

  ngOnInit() {
    this.getAll();
  }

  showAddForm() {
    this.isAddForm = !this.isAddForm
    if (this.isAddForm == true) {
      this.openFormButtonIconString = "fa fa-minus"
    }

    if (this.isAddForm == false) {
      this.openFormButtonIconString = "fa fa-plus"
    }
  }

  showUpdateForm()
  {
    if(!this.isAddForm)
    {
      this.isUpdateForm = !this.isUpdateForm
    }
  }

  //            ********************************************* API Operations *********************************************
  //Create Operations
  add(form: NgForm) {
    if (form.valid) {
      let model = new UCAFModel();
      model.code = form.controls["code"].value;
      model.type = form.controls["type"].value;
      model.name = form.controls["name"].value;

      this._ucafService.add(model, (res) => {
        form.reset();
        this.ucafType = "M";
        this.getAll();
        this.isLoading = false;
        this._toastr.toast(ToastrTypes.Success, res.message, "Yeni Kayıt Eklendi.")
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

    this._swalService.callSwal("Sil", "Sil ?", "Hesap planı kodunu gerçekten silmek istiyor musunuz ?", ()=>{
      var model = new RemoveUcafModel();
          this._ucafService.remove(data, (res) => {
            model.id = data.id;
            model.companyId = data.companyId;
            this.getAll();
            this._toastr.toast(ToastrTypes.Success, res.message, "Silindi.");
          });
    })
  }

  //Get Operations
  getAll() {
    this._ucafService.getAll(res => this.ucafs = res.data)
  }

  get(ucaf: UCAFModel){ 
    if(!this.isAddForm)
    {
      this.isUpdateForm = true;
      this.updateUcaf = {...ucaf};
    }
  }

  setColorForTypeName(type: string)
  {
    if(type == 'A')
    {
      return "text-danger" ;
    }
    else if(type == 'G')
    {
      return "text-primary";
    }
    else{
      return "";
    }
  }

  update(form: NgForm){
    if(form.valid)
    {
      this.isAddForm = false;
      this._ucafService.update(this.updateUcaf, (res) => {
      this.cancel();
      this._toastr.toast(ToastrTypes.Success, res.message, "Güncellendi." )
      this.getAll();
    })
    }
  }

  cancel()
  {
    this.isAddForm = false;
    this.isUpdateForm = false;
  }

  exportExcel(){
    let model: ReportRequestModel = new ReportRequestModel();
    model.name = "Hesap Planı"
    
    this._reportService.request(model, (res) => {
      this._toastr.toast(ToastrTypes.Info, res.message, "");
      this._router.navigateByUrl("/reports")
    });
  }

}
