import { Pipe, type PipeTransform } from '@angular/core';
import { Character } from '../../domain/Character';

@Pipe({ name: 'isNumber', standalone: true })
export class IsNumberPipe implements PipeTransform {
  transform(value: string): boolean {
    return new Character(value).isNumber();
  }
}
