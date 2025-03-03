import { Tier } from './tier';

export class TierList {
  private readonly tiers: Tier[] = [];

  constructor() {
    ['S', 'A', 'B', 'C', 'D', 'E', 'F'].forEach((value) => this.tiers.push(new Tier(value)));
  }

  public get values() {
    return this.tiers;
  }
}
