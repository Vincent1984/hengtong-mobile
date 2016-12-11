import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'defaultImgPipe'
})
export class DefaultImgPipe implements PipeTransform {

  transform(value: string) {
    if (value) {
      return 'http://218.61.0.14:8080/dlqzysgweb/Public/upload/article/' + value;
    } else {
      return '/assets/images/culture.jpg';
    }
  }

}