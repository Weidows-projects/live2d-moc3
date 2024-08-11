/*
 * @!: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @Date: 2023-02-04 20:29:50
 * @LastEditTime: 2024-04-24 02:43:27
 * @FilePath: \Live2dLoader\src\main.ts
 * @Description: live2d loader
 * @?: *********************************************************************
 */

import * as PIXI from "pixi.js";
import { Live2DModel } from "pixi-live2d-display";
import * as device from "is-mobile";
import { GetLive2dIndex } from "./cookie";

export class Live2dLoader {
  private app: PIXI.Application;
  private model: Live2DModel;

  constructor(models: any[]) {
    console.log(
      "%cLive2D using: https://github.com/Weidows-projects/Live2dLoader",
      "color: #6aff00;background: #0c222e;"
    );
    const config = models[GetLive2dIndex(models)];
    if (!config.mobile && device.isMobile()) return;
    this.load(config);
  }

  async load(config: any): Promise<void> {
    let canvas = document.createElement("canvas");
    canvas.id = "canvas";
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    if (config.left) canvas.style.left = config.left;
    if (config.right) canvas.style.right = config.right;
    if (config.top) canvas.style.top = config.top;
    else if (config.bottom) canvas.style.bottom = config.bottom;
    else canvas.style.bottom = "0px";
    if (config.opacity) canvas.style.opacity = config.opacity;
    if (config.background) {
      canvas.style.background = "url(" + config.background + ")";
      canvas.style.backgroundSize = "cover";
    }

    this.app = new PIXI.Application({
      // TODO
      view: canvas,
      width: config.width || 800,
      height: config.height || 600,
      transparent: true,
      antialias: true, // 抗锯齿
      autoStart: true,
    });
    this.model = await live2d.Live2DModel.from(config.role);
    this.app.stage.addChild(this.model);
    this.model.position.set(
      parseInt(canvas.style.width) * 0.5,
      parseInt(canvas.style.height) * 0.5
    );
    this.model.scale.set(config.scale || 0.1);
    if (config.draggable === true) this.draggable(this.model);
    this.addListener(config, canvas, this.initMotionIndex());
  }
}
