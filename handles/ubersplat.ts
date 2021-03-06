import { Handle } from "./handle";

export class Ubersplat extends Handle<ubersplat> {
  public static create(
    x: number,
    y: number,
    name: string,
    red: number,
    green: number,
    blue: number,
    alpha: number,
    forcePaused: boolean,
    noBirthTime: boolean
  ) {
    return new this(CreateUbersplat(x, y, name, red, green, blue, alpha, forcePaused, noBirthTime));
  }

  public static fromHandle(handle: ubersplat): Ubersplat {
    return this.getObject(handle);
  }

  public destroy() {
    super.destroy();
    DestroyUbersplat(this.handle);
  }

  public finish() {
    FinishUbersplat(this.handle);
  }

  public render(flag: boolean, always = false) {
    if (always) {
      SetUbersplatRenderAlways(this.handle, flag);
    } else {
      SetUbersplatRender(this.handle, flag);
    }
  }

  public reset() {
    ResetUbersplat(this.handle);
  }

  public show(flag: boolean) {
    ShowUbersplat(this.handle, flag);
  }
}
