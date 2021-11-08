// packages
import * as THREE from "three";
// classes
import Experience from "../Experience/Experience";

export default class World {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ wireframe: true })
        )
        this.scene.add(testMesh);
    }
}