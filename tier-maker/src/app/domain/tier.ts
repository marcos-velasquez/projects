import { ElementList } from './element-list';

export class Tier extends ElementList {
  constructor(public readonly title: string) {
    super();
  }
}
