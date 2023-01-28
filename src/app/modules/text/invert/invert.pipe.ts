import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invert'
})
export class InvertPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.split("").reverse().join("");
  }

}
