import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionSlice',
})
export class DescriptionSlicePipe implements PipeTransform {
  transform(value: string ): string {
    return value?.split(' ').slice(0, 3).join(' ') + '...';
  }
}
