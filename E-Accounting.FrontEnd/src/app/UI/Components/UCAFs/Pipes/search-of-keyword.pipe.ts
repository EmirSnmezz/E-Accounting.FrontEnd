import { Pipe, PipeTransform } from '@angular/core';
import { ToLowerCaseService } from '../../../../Common/Services/toLowerCase/to-lower-case.service';

@Pipe({
  name: 'searchOfKeyword',
  standalone: true
})
export class SearchOfKeywordPipe implements PipeTransform {

  constructor(private toLowerCaseTr: ToLowerCaseService){}

  transform(value: any[], filterText: string): any {
   if(filterText == ""){
    return value;
   }

   return value.filter( p =>{
    const code = p.code.includes(this.toLowerCaseTr.toLowerCaseForTr(filterText));
    const name = this.toLowerCaseTr.toLowerCaseForTr(p.name).includes(this.toLowerCaseTr.toLowerCaseForTr(filterText));
    return code + name ;
   } )
  }

}
