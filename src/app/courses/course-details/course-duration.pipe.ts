import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {

  transform(minutes: number): string {
    if (minutes < 60) {
      return `${minutes} m`;
    }
    let hours: number = 0;
    while (minutes >= 60) {
      minutes -= 60;
      hours++;
    }
    let result: string = `${hours} h `;
    if (minutes > 0) {
      result += `${minutes} m`;
    }

    return result;
  }

}
