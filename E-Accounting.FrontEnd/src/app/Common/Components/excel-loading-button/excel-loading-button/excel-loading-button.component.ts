import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'excel-loading-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './excel-loading-button.component.html',
  styleUrl: './excel-loading-button.component.css'
})
export class ExcelLoadingButtonComponent {

  @Input() isLoading: boolean = false;
  @Input() btnClass: string = "";
  @Input() btnLoadingClass: string = "";
  @Input() iconClass: string = "";
  @Input() loadingDescription: string = "";

  constructor(private _store : Store<{loading: boolean}>)
  {
    this._store.select("loading").subscribe(res =>{
      this.isLoading = res;
    });
  }
}
