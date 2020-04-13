import { EventDispatcher } from "../common/index";

const map: WeakMap<handle, any> = new WeakMap<handle, any>();

export class Handle<T extends handle> {
  public readonly handle: T;
  private destroyEvent: EventDispatcher<[], void> = new EventDispatcher();

  protected constructor(handle: T) {
    this.handle = handle;
    map.set(this.handle, this);
  }

  protected static getObject(handle: handle) {
    const obj = map.get(handle);
    if (obj !== undefined) {
      return obj;
    }
    const newObj = new this(handle);
    return newObj;
  }

  public get id() {
    return GetHandleId(this.handle);
  }

  public destroy() {
    map.delete(this.handle);
    this.destroyEvent.dispatch();
  }

  public onDestroy(handler: () => void) {
    this.destroyEvent.register(handler);
  }
}
