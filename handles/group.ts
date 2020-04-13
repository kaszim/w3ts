import { Handle } from "./handle";
import { MapPlayer } from "./player";
import { Point } from "./point";
import { Rectangle } from "./rect";
import { Unit } from "./unit";
import { Widget } from "./widget";

export class Group extends Handle<group> {
  public static create() {
    return new this(CreateGroup());
  }

  public static fromHandle(handle: group): Group {
    return this.getObject(handle);
  }

  public static getEnumUnit(): Unit {
    return Unit.fromHandle(GetEnumUnit());
  }

  public static getFilterUnit(): Unit {
    return Unit.fromHandle(GetFilterUnit());
  }

  public get first() {
    return FirstOfGroup(this.handle);
  }

  public get size(): number {
    return BlzGroupGetSize(this.handle);
  }

  public addGroupFast(addGroup: Group): number {
    return BlzGroupAddGroupFast(this.handle, addGroup.handle);
  }

  public addUnit(whichUnit: Unit): boolean {
    return GroupAddUnit(this.handle, whichUnit.handle);
  }

  public clear() {
    GroupClear(this.handle);
  }

  public destroy() {
    super.destroy();
    DestroyGroup(this.handle);
  }

  public enumUnitsInRange(x: number, y: number, radius: number, filter: boolexpr) {
    GroupEnumUnitsInRange(this.handle, x, y, radius, filter);
  }

  public enumUnitsInRangeCounted(x: number, y: number, radius: number, filter: boolexpr, countLimit: number) {
    GroupEnumUnitsInRangeCounted(this.handle, x, y, radius, filter, countLimit);
  }

  public enumUnitsInRangeOfPoint(whichPoint: Point, radius: number, filter: boolexpr) {
    GroupEnumUnitsInRangeOfLoc(this.handle, whichPoint.handle, radius, filter);
  }

  public enumUnitsInRangeOfPointCounted(whichPoint: Point, radius: number, filter: boolexpr, countLimit: number) {
    GroupEnumUnitsInRangeOfLocCounted(this.handle, whichPoint.handle, radius, filter, countLimit);
  }

  public enumUnitsInRect(r: Rectangle, filter: boolexpr) {
    GroupEnumUnitsInRect(this.handle, r.handle, filter);
  }

  public enumUnitsInRectCounted(r: Rectangle, filter: boolexpr, countLimit: number) {
    GroupEnumUnitsInRectCounted(this.handle, r.handle, filter, countLimit);
  }

  public enumUnitsOfPlayer(whichPlayer: MapPlayer, filter: boolexpr) {
    GroupEnumUnitsOfPlayer(this.handle, whichPlayer.handle, filter);
  }

  public enumUnitsOfType(unitName: string, filter: boolexpr) {
    GroupEnumUnitsOfType(this.handle, unitName, filter);
  }

  public enumUnitsOfTypeCounted(unitName: string, filter: boolexpr, countLimit: number) {
    GroupEnumUnitsOfTypeCounted(this.handle, unitName, filter, countLimit);
  }

  public enumUnitsSelected(whichPlayer: MapPlayer, radius: number, filter: boolexpr) {
    GroupEnumUnitsSelected(this.handle, whichPlayer.handle, filter);
  }

  public for(callback: () => void) {
    ForGroup(this.handle, callback);
  }

  public getUnitAt(index: number): Unit {
    return Unit.fromHandle(BlzGroupUnitAt(this.handle, index));
  }

  public hasUnit(whichUnit: Unit) {
    return IsUnitInGroup(whichUnit.handle, this.handle);
  }

  public orderCoords(order: string | number, x: number, y: number) {
    if (typeof order === "string") {
      GroupPointOrder(this.handle, order, x, y);
    } else {
      GroupPointOrderById(this.handle, order, x, y);
    }
  }

  public orderImmediate(order: string | number) {
    if (typeof order === "string") {
      GroupImmediateOrder(this.handle, order);
    } else {
      GroupImmediateOrderById(this.handle, order);
    }
  }

  public orderPoint(order: string | number, whichPoint: Point) {
    if (typeof order === "string") {
      GroupPointOrderLoc(this.handle, order, whichPoint.handle);
    } else {
      GroupPointOrderByIdLoc(this.handle, order, whichPoint.handle);
    }
  }

  public orderTarget(order: string | number, targetWidget: Widget | Unit) {
    if (typeof order === "string") {
      GroupTargetOrder(this.handle, order, targetWidget.handle);
    } else {
      GroupTargetOrderById(this.handle, order, targetWidget.handle);
    }
  }

  public removeGroupFast(removeGroup: Group): number {
    return BlzGroupRemoveGroupFast(this.handle, removeGroup.handle);
  }

  public removeUnit(whichUnit: Unit): boolean {
    return GroupRemoveUnit(this.handle, whichUnit.handle);
  }
}
