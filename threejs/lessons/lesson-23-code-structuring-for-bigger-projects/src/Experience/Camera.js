// packages
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// classes
import Experience from "./Experience";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.setInstance();
    this.setControls();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      35, // focal length
      this.sizes.width / this.sizes.height,
      0.1, // near
      100 // far
    );

    this.instance.position.set(6, 4, 8);
    this.scene.add(this.instance);
  }

  setControls() {
      this.controls = new OrbitControls(this.instance, this.canvas);
      this.controls.enableDamping = true;
  }

  resize() {
      this.instance.aspect = this.sizes.width / this.sizes.height;
      this.instance.updateProjectionMatrix();
  }

  update() {
      this.controls.update();
  }
}