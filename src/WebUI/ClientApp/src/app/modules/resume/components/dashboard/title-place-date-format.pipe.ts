import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlePlaceDateFormat'
})
export class TitlePlaceDateFormatPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (value.includes('|')) {
      const part = value.split('|');
      return part.map((p, i, a) => `<span class='titlePlaceDate_${i}'>${p}</span>`).join('');
    }
    return value;
  }

}
