/** @noSelfInFile **/

import { Widget } from "./widget";

export class Destructable extends Widget {
  public readonly handle!: destructable;

  public static create(
    objectId: number,
    x: number,
    y: number,
    face: number,
    scale: number,
    variation: number
  ): Destructable;
  public static create(
    objectId: number,
    x: number,
    y: number,
    z: number,
    face: number,
    scale: number,
    // tslint:disable-next-line: unified-signatures
    variation: number
  ): Destructable;
  public static create(...args: number[]): Destructable {
    if (args.length === 7) {
      return new this(CreateDestructableZ(args[0], args[1], args[2], args[3], args[4], args[5], args[6]));
    } else {
      return new this(CreateDestructable(args[0], args[1], args[2], args[3], args[4], args[5]));
    }
  }

  public static fromEvent() {
    return this.fromHandle(GetTriggerDestructable());
  }

  public static fromHandle(handle: destructable): Destructable {
    return this.getObject(handle);
  }

  public get invulnerable() {
    return IsDestructableInvulnerable(this.handle);
  }

  public set invulnerable(flag: boolean) {
    SetDestructableInvulnerable(this.handle, flag);
  }

  public get life() {
    return GetDestructableLife(this.handle);
  }

  public set life(value: number) {
    SetDestructableLife(this.handle, value);
  }

  public get maxLife() {
    return GetDestructableMaxLife(this.handle);
  }

  public set maxLife(value: number) {
    SetDestructableMaxLife(this.handle, value);
  }

  public get name() {
    return GetDestructableName(this.handle);
  }

  public get occluderHeight() {
    return GetDestructableOccluderHeight(this.handle);
  }

  public set occluderHeight(value: number) {
    SetDestructableOccluderHeight(this.handle, value);
  }

  public get typeId() {
    return GetDestructableTypeId(this.handle);
  }

  public get x() {
    return GetDestructableX(this.handle);
  }

  public get y() {
    return GetDestructableY(this.handle);
  }

  public destroy() {
    RemoveDestructable(this.handle);
  }

  public heal(life: number, birth: boolean) {
    DestructableRestoreLife(this.handle, life, birth);
  }

  public kill() {
    KillDestructable(this.handle);
  }

  public queueAnim(whichAnimation: string) {
    QueueDestructableAnimation(this.handle, whichAnimation);
  }

  public setAnim(whichAnimation: string) {
    SetDestructableAnimation(this.handle, whichAnimation);
  }

  public setAnimSpeed(speedFactor: number) {
    SetDestructableAnimationSpeed(this.handle, speedFactor);
  }

  public show(flag: boolean) {
    ShowDestructable(this.handle, flag);
  }
}
