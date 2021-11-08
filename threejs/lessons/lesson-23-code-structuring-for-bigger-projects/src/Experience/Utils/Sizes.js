import EventEmitter from "./EventEmitter";

export default class Sizes extends EventEmitter {
  constructor() {
    super()
    // Setup
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio);

    window.addEventListener("resize", () => {
      // Update sizes
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      this.trigger('resize');
    });
  }
}
