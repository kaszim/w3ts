import { Handle } from "./handle";

export class Ability extends Handle<ability> {
  public static fromHandle(handle: ability): Ability {
    return this.getObject(handle);
  }
}
