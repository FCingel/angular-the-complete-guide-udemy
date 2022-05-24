import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {j
  transform(value: any): any {
    return value.split('').reverse().join('');
  }
}
