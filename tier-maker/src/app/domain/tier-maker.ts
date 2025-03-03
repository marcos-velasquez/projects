import { Element } from './element';
import { ElementList } from './element-list';
import { TierList } from './tier-list';
import { Title } from './vo/title';

export class TierMaker {
  private readonly tierList = new TierList();
  private readonly elementList = new ElementList();
  private title = new Title();

  public get get() {
    return {
      elements: this.elementList.values,
      tiers: this.tierList.values,
      title: this.title,
    };
  }

  public get change() {
    return {
      title: (value: string) => (this.title = new Title(value)),
    };
  }

  public get insert() {
    return {
      element: (url: string) => this.elementList.insert(new Element(url)),
    };
  }
}
