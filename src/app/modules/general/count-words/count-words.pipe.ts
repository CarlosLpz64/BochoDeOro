import { Pipe, PipeTransform } from '@angular/core';
import { SPACE } from 'src/app/shared/constants/regex';

@Pipe({
  name: 'countWords'
})
export class CountWordsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value === "")
      return "0"
    value = value.trim()
    return value.split(SPACE).length.toString();
  }

}
