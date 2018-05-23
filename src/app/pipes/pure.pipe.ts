import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'purePipe' })
export class PurePipe implements PipeTransform {
    transform(value: string[]){
        let newArray;
        if(value && value.length){
            newArray =  value.filter(i => i.includes("flower"));
            console.log(newArray)
            return newArray;
        }
    }
}