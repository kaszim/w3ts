export class EventDispatcher<Parameters extends any[], Returns> {
  private handlers: ((...args: Parameters) => Returns)[] = [];

  public dispatch(...args: Parameters) {
    this.handlers.forEach((val, i) => {
      val.apply(args);
    });
  }

  public register(handler: (...args: Parameters) => Returns) {
    this.handlers.push(handler);
  }

  public remove(handler: (...args: Parameters) => Returns) {
    const i = this.handlers.indexOf(handler);
    if (i > -1) {
      this.handlers.splice(i, 0);
    }
  }
}
