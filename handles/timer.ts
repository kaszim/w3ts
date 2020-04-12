/** @noSelfInFile **/

import { Handle } from "./handle";

export class Timer extends Handle<timer> {
  constructor(handle?: timer) {
    if (type(handle) === "userdata") {
      super(handle as timer);
    } else {
      super(CreateTimer());
    }
  }

  public static fromExpired(): Timer {
    return this.fromHandle(GetExpiredTimer());
  }

  public static fromHandle(handle: timer): Timer {
    return this.getObject(handle);
  }

  public get elapsed(): number {
    return TimerGetElapsed(this.handle);
  }

  public get remaining(): number {
    return TimerGetRemaining(this.handle);
  }

  public get timeout(): number {
    return TimerGetTimeout(this.handle);
  }

  public destroy() {
    DestroyTimer(this.handle);
    return this;
  }

  public pause() {
    PauseTimer(this.handle);
    return this;
  }

  public resume() {
    ResumeTimer(this.handle);
    return this;
  }

  public start(timeout: number, periodic: boolean, handlerFunc: () => void) {
    TimerStart(this.handle, timeout, periodic, handlerFunc);
    return this;
  }
}
