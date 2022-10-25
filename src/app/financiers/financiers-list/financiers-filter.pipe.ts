import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'filterFinancier'
})

export class FilterPipe implements PipeTransform {
transform(value: any , key: string , property: string) {
    if(key !== '') {
       var  requestArry = [];
       for (let item of value) {
           if(item[property] === key) {
            requestArry.push(item);
           }
       }
       return requestArry;
    } else {
        return value;
    }
}
}