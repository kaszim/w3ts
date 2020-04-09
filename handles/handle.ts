/** @noSelfInFile **/

const map: WeakMap<handle, any> = new WeakMap<handle, any>();

export class Handle<T extends handle> {

  public readonly handle: T;

  protected constructor(handle: T) {
    this.handle = handle;
    map.set(this.handle, this);
  }

  public get id() {
    return GetHandleId(this.handle);
  }

  protected static getObject(handle: handle) {
    const obj = map.get(handle);
    if (obj !== undefined) {
      return obj;
    }
    const newObj = new this(handle);
    return newObj;
  }

}
