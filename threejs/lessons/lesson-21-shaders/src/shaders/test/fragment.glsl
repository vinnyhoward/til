precision mediump float;
// Step 13: Retrieving color values from "script"
// uniform vec3 uniformColor;
// Step 14 - part b: Retrieving texture values from "script"
uniform sampler2D uniformTexture;
// Step 14 - part e: fetching "vary" from "vertex"
varying vec2 varyingUV;
// Step 15  - part d: fetching "vary" from "vertex"
varying float varyingElvation;

void main() {
    // Step 14 - part f: fassigning values
    vec4 textureColor = texture2D(uniformTexture, varyingUV);
    textureColor.rgb *= varyingElvation * 2.0 + 0.9;
    gl_FragColor = textureColor;
    // gl_FragColor = vec4(uniformColor, 1);
}

// adding random color values
// precision mediump float;
// // fetch value sent from "vertex"
// varying float varyRandom;

// void main() {
//     gl_FragColor = vec4(0.5, varyRandom, 1.0, 1);
// }