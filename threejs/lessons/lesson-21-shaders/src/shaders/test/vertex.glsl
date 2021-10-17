uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;
// Pull value set in "script.js" file on Step 9
// attribute float attributeRandom;
// Step 10: Sending data from "vertex" to "fragment"
// varying float varyRandom;
// Step 11 - part a:: Adding Frequency from "script.js"
uniform vec2 uniformFrequency;
 // Step 12 - part c: Retrieving values from "script"
uniform float uniformTime;
// Step 14  - part a: Sending "attribute" to "fragment"
attribute vec2 uv;
varying vec2 varyingUV;
// Step 15  - part b: Sending "attribute" to "fragment"
varying float varyingElvation;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    // Step 15 - step a: Adding color variations
    float elevation = sin(modelPosition.x * uniformFrequency.x - uniformTime) * 0.1;
    elevation += sin(modelPosition.y * uniformFrequency.y - uniformTime) * 0.1;
    // Creating flag effect
    modelPosition.z += sin(modelPosition.x * uniformFrequency.x - uniformTime) * 0.1;
    modelPosition.z += sin(modelPosition.y * uniformFrequency.y - uniformTime) * 0.1;
        
    // Spike effect
    // modelPosition.z = attributeRandom * 0.1;
    
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    // assign random attributes to "vary" which sends to fragment
    // varyRandom = attributeRandom;
    // Step 14  - part d: Sending "attribute" to "fragment"
    varyingUV = uv;
    // Step 15  - part c: Sending "attribute" to "fragment"
    varyingElvation = elevation;
}