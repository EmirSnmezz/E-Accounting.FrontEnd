import { Directive, ElementRef, HostListener, Input, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Directive({
  selector: '[validInput]',
  standalone: true,
})
export class InputValidDirective {
  constructor(private _viewContainerRef : ViewContainerRef, private _elementRef : ElementRef<HTMLInputElement>) 
  {}
  @Input("validInput") validInput : boolean = true;

  @HostListener("keyup") keyUp(){
    if(this.validInput)  
    {
      this._elementRef.nativeElement.className = "form-control is-valid"
    }

    else{
      this._elementRef.nativeElement.className = "form-control is-invalid"
    }
}

}