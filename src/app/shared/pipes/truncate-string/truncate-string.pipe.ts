import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateString',
})
/**
 * Truncate string 15 + ... + 12 = 30 Chars.
 * stringText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
 *
 * @returns `Lorem ipsum dol...piscing elit`
 *
 * @example
 *
 * `<p>{{ stringText | truncateString: 30 : '...' }}</p>`
 */
export class TruncateStringPipe implements PipeTransform {
  transform(valeuString: string, maxLength: number, replaceValue: string): any {
    if (valeuString.length > maxLength) {
      let lastChars = (valeuString.length - 15) + replaceValue.length;
      let stringA = valeuString.split('').splice(0, 15);
      let stringB = valeuString.split('').splice(lastChars, valeuString.length);

      return stringA.join('') + replaceValue + stringB.join('');
    } else {
      return valeuString;
    }
  }
}

