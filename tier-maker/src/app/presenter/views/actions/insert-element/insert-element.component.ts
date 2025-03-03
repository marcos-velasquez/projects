import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toast } from 'ngx-sonner';
import { URL$ } from '@shared/domain';
import { Element } from '../../../../domain/element';
import { tierMakerFacade } from '../../../../application';

@Component({
  selector: 'app-insert-element',
  imports: [CommonModule],
  templateUrl: './insert-element.component.html',
})
export class InsertElementComponent {
  public insert(fileList: FileList | null): void {
    if (fileList === null) return;
    const files = Array.from(fileList);
    Element.validate(files)
      .mapRight(() => {
        URL$.from(files).forEach((url) => tierMakerFacade.insertElement(url));
      })
      .mapLeft(() => toast.error('Only images are allowed'));
  }
}
