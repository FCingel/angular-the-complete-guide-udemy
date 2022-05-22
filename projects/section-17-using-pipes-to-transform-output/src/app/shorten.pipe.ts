import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {     // good practice to implement PipeTransform interface
    transform(value: any) {
        if (value.length > 10) {
            return value.substr(0, 10) + ' ...';
        }
        return value;
    }
}