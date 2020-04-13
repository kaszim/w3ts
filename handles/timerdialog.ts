/** @noSelfInFile **/

import { Handle } from "./handle";
import { Timer } from "./timer";

export class TimerDialog extends Handle<timerdialog> {
  public static create(t: Timer) {
    return new this(CreateTimerDialog(t.handle));
  }

  public static fromHandle(handle: timerdialog): TimerDialog {
    return this.getObject(handle);
  }

  public get display() {
    return IsTimerDialogDisplayed(this.handle);
  }

  public set display(display: boolean) {
    TimerDialogDisplay(this.handle, display);
  }

  public destroy() {
    super.destroy();
    DestroyTimerDialog(this.handle);
  }

  public setSpeed(speedMultFactor: number) {
    TimerDialogSetSpeed(this.handle, speedMultFactor);
  }

  public setTimeRemaining(value: number) {
    TimerDialogSetRealTimeRemaining(this.handle, value);
  }

  public setTitle(title: string) {
    TimerDialogSetTitle(this.handle, title);
  }
}
