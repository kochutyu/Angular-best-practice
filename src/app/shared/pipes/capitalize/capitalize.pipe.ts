import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown): unknown {
    if (typeof value !== 'string') {
      return value;
    }
    return (value && value[0].toUpperCase() + value.slice(1)) || "";
  }

}
