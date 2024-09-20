import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchOfKeyword',
  standalone: true
})
export class SearchOfKeywordPipe implements PipeTransform {

  transform(value: any[], filterText: string): any {
   if(filterText == ""){
    return value;
   }

   return value.filter( p =>{
    const code = p.code.toLowerCase().includes(filterText.toLocaleLowerCase())
    const name = p.name.toLowerCase().includes(filterText.toLocaleLowerCase())
    return code + name ;
   } )
  }

}
