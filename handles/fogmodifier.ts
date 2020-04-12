/** @noSelfInFile **/

import { Handle } from "./handle";
import { MapPlayer } from "./player";
import { Rectangle } from "./rect";

export class FogModifier extends Handle<fogmodifier> {
  public static create(
    forWhichPlayer: MapPlayer,
    whichState: fogstate,
    centerX: number,
    centerY: number,
    radius: number,
    useSharedVision: boolean,
    afterUnits: boolean
  ) {
    return new this(
      CreateFogModifierRadius(forWhichPlayer.handle, whichState, centerX, centerY, radius, useSharedVision, afterUnits)
    );
  }

  public static fromHandle(handle: fogmodifier): FogModifier {
    return this.getObject(handle);
  }

  public static fromRect(
    forWhichPlayer: MapPlayer,
    whichState: fogstate,
    where: Rectangle,
    useSharedVision: boolean,
    afterUnits: boolean
  ): FogModifier {
    return this.fromHandle(
      CreateFogModifierRect(forWhichPlayer.handle, whichState, where.handle, useSharedVision, afterUnits)
    );
  }

  public destroy() {
    DestroyFogModifier(this.handle);
  }

  public start() {
    FogModifierStart(this.handle);
  }

  public stop() {
    FogModifierStop(this.handle);
  }
}
