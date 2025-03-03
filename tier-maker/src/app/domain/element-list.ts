import { Element } from './element';

export class ElementList {
  private elements: Element[] = [];

  public get values() {
    return this.elements;
  }

  public insert(element: Element): void {
    this.elements.push(element);
  }

  public remove(element: Element): void {
    this.elements = this.elements.filter(({ url }) => element.is.equal(url));
  }
}
