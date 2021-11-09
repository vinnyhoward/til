// packages
import * as THREE from "three";
// classes
import Experience from "../Experience/Experience";
import Environment from "../World/Environment";

export default class World {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        // Test mesh
        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial()
        )
        this.scene.add(testMesh);

        // this.resources.on('ready', () => {
        //     console.log('resources are ready!!');
        // });
            console.log('resource', this.experience.resources)
        // Setup
        this.environment = new Environment();
    }
}