import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtml',
  standalone: false
})
export class StripHtmlPipe implements PipeTransform {

  transform(text: string): string {
    return text.replace(/<(?:.|\s)*?>/g, '');
  }

}
