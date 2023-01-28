import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countLetters'
})
export class CountLettersPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value === "")
      return "0"
    value = value.trim()
    return value.split("").length.toString();
  }

}
