import { Injectable } from '@angular/core';
import { toPng } from 'html-to-image';
import { NodeService as INodeService } from '../domain/services/node.service';

@Injectable({ providedIn: 'root' })
export class NodeService implements INodeService {
  constructor(private readonly node: HTMLElement) {}

  public get to() {
    return {
      image: (name: string) => {
        toPng(this.node).then((dataUrl) => {
          const link = document.createElement('a');
          link.download = `${name}.png`;
          link.href = dataUrl;
          link.click();
        });
      },
    };
  }
}
