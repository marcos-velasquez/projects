import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tierMakerFacade } from 'src/app/application';

@Component({
  selector: 'app-download',
  imports: [CommonModule],
  templateUrl: './download.component.html',
})
export class DownloadComponent {
  public download() {
    tierMakerFacade.download(document.getElementById('tierMaker') as HTMLElement);
  }
}
