/** @noSelfInFile **/

import { Handle } from "./handle";

export class Frame extends Handle<framehandle> {

  public static autoPosition(enable: boolean) {
    BlzEnableUIAutoPosition(enable);
  }
  public static create(name: string, owner: Frame, priority: number, createContext: number) {
    return new this(BlzCreateFrame(name, owner.handle, priority, createContext));
  }

  public static fromEvent() {
    return this.fromHandle(BlzGetTriggerFrame());
  }

  public static fromHandle(handle: framehandle): Frame {
    return this.getObject(handle);
  }

  public static fromName(name: string, createContext: number) {
    return this.fromHandle(BlzGetFrameByName(name, createContext));
  }

  public static fromOrigin(frameType: originframetype, index: number) {
    return this.fromHandle(BlzGetOriginFrame(frameType, index));
  }

  public static getEventHandle() {
    return BlzGetTriggerFrameEvent();
  }

  public static getEventText() {
    return BlzGetTriggerFrameValue();
  }

  public static getEventValue() {
    return BlzGetTriggerFrameValue();
  }

  public static hideOrigin(enable: boolean) {
    BlzHideOriginFrames(enable);
  }

  public static loadTOC(filename: string) {
    return BlzLoadTOCFile(filename);
  }

  public get alpha() {
    return BlzFrameGetAlpha(this.handle);
  }

  public set alpha(alpha: number) {
    BlzFrameSetAlpha(this.handle, alpha);
  }

  public get enabled() {
    return BlzFrameGetEnable(this.handle);
  }

  public set enabled(flag: boolean) {
    BlzFrameSetEnable(this.handle, flag);
  }

  public get height() {
    return BlzFrameGetHeight(this.handle);
  }

  public set height(height: number) {
    BlzFrameSetSize(this.handle, this.width, height);
  }

  public get parent() {
    return Frame.fromHandle(BlzFrameGetParent(this.handle));
  }

  public set parent(parent: Frame) {
    BlzFrameSetParent(this.handle, parent.handle);
  }

  public get text() {
    return BlzFrameGetText(this.handle);
  }

  public set text(text: string) {
    BlzFrameSetText(this.handle, text);
  }

  public get textSizeLimit() {
    return BlzFrameGetTextSizeLimit(this.handle);
  }

  public set textSizeLimit(size: number) {
    BlzFrameSetTextSizeLimit(this.handle, size);
  }

  public get value() {
    return BlzFrameGetValue(this.handle);
  }

  public set value(value: number) {
    BlzFrameSetValue(this.handle, value);
  }

  public get visible() {
    return BlzFrameIsVisible(this.handle);
  }

  public set visible(flag: boolean) {
    BlzFrameSetVisible(this.handle, flag);
  }

  public get width() {
    return BlzFrameGetWidth(this.handle);
  }

  public set width(width: number) {
    BlzFrameSetSize(this.handle, width, this.height);
  }

  public addText(text: string) {
    BlzFrameAddText(this.handle, text);
  }

  public cageMouse(enable: boolean) {
    BlzFrameCageMouse(this.handle, enable);
  }

  public clearPoints() {
    BlzFrameClearAllPoints(this.handle);
  }

  public click() {
    BlzFrameClick(this.handle);
  }

  public destroy() {
    BlzDestroyFrame(this.handle);
  }

  public setAbsPoint(point: framepointtype, x: number, y: number) {
    BlzFrameSetAbsPoint(this.handle, point, x, y);
  }

  public setAllPoints(relative: Frame) {
    BlzFrameSetAllPoints(this.handle, relative.handle);
  }

  public setFocus(flag: boolean) {
    BlzFrameSetFocus(this.handle, flag);
  }

  public setFont(filename: string, height: number, flags: number) {
    BlzFrameSetFont(this.handle, filename, height, flags);
  }

  public setLevel(level: number) {
    BlzFrameSetLevel(this.handle, level);
  }

  public setMinMaxValue(minValue: number, maxValue: number) {
    BlzFrameSetMinMaxValue(this.handle, minValue, maxValue);
  }

  public setModel(modelFile: string, cameraIndex: number) {
    BlzFrameSetModel(this.handle, modelFile, cameraIndex);
  }

  public setPoint(point: framepointtype, relative: Frame, relativePoint: framepointtype, x: number, y: number) {
    BlzFrameSetPoint(this.handle, point, relative.handle, relativePoint, x, y);
  }

  public setScale(scale: number) {
    BlzFrameSetScale(this.handle, scale);
  }

  public setSize(width: number, height: number) {
    BlzFrameSetSize(this.handle, width, height);
  }

  public setSpriteAnimate(primaryProp: number, flags: number) {
    BlzFrameSetSpriteAnimate(this.handle, primaryProp, flags);
  }

  public setStepSize(stepSize: number) {
    BlzFrameSetStepSize(this.handle, stepSize);
  }

  public setTextColor(color: number) {
    BlzFrameSetTextColor(this.handle, color);
  }

  public setTexture(texFile: string, flag: number, blend: boolean) {
    BlzFrameSetTexture(this.handle, texFile, flag, blend);
  }

  public setTooltip(tooltip: Frame) {
    BlzFrameSetTooltip(this.handle, tooltip.handle);
  }

  public setVertexColor(color: number) {
    BlzFrameSetVertexColor(this.handle, color);
  }
}
