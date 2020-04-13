/** @noSelfInFile **/

import { Handle } from "./handle";
import { MapPlayer } from "./player";

export class DialogButton extends Handle<button> {
  public static addToDialog(
    whichDialog: Dialog,
    text: string,
    hotkey: number = 0,
    quit: boolean = false,
    score: boolean = false
  ) {
    if (!quit) {
      return new this(DialogAddButton(whichDialog.handle, text, hotkey));
    } else {
      return new this(DialogAddQuitButton(whichDialog.handle, score, text, hotkey));
    }
  }

  public static fromHandle(handle: button): DialogButton {
    return this.getObject(handle);
  }
}

export class Dialog extends Handle<dialog> {
  constructor(handle?: dialog) {
    if (type(handle) === "userdata") {
      super(handle as dialog);
    } else {
      super(DialogCreate());
    }
  }

  public static fromHandle(handle: dialog): Dialog {
    return this.getObject(handle);
  }

  public addButton(text: string, hotkey: number = 0, quit: boolean = false, score: boolean = false) {
    return DialogButton.addToDialog(this, text, hotkey, quit, score);
  }

  public clear() {
    DialogClear(this.handle);
  }

  public destroy() {
    super.destroy();
    DialogDestroy(this.handle);
  }

  public display(whichPlayer: MapPlayer, flag: boolean) {
    DialogDisplay(whichPlayer.handle, this.handle, flag);
  }

  public setMessage(whichMessage: string) {
    DialogSetMessage(this.handle, whichMessage);
  }
}
