import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtml'
})
export class StripHtmlPipe implements PipeTransform {

  transform(text: string): string {
    return text.replace(/<(?:.|\s)*?>/g, '');
  }

}
