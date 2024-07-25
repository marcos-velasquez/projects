import { Pipe, type PipeTransform } from '@angular/core';
import { Character } from '../../domain/Character';

@Pipe({ name: 'isSymbol', standalone: true })
export class IsSymbolPipe implements PipeTransform {
  transform(value: string): boolean {
    return new Character(value).isSymbol();
  }
}
