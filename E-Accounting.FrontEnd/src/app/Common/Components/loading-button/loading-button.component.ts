import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'loading-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-button.component.html',
  styleUrl: './loading-button.component.css'
})
export class LoadingButtonComponent {
  // isLoading: boolean = false;
  @Input("form") form: NgForm;
  @Input("isLoading") isLoading: boolean = false;
  @Input("btnName") btnName: string = "";
  @Input("btnLoadingDescription") btnLoadingDescription: string = "";
  @Input("btnClass") btnClass: string = "btn-outline-primary w-100";
}
