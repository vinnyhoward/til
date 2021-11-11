varying vec2 varyingUv;

void main() {
    // pattern 1
    // gl_FragColor = vec4(varyingUv.x, varyingUv.y, 1.0, 1.0);

    // pattern 2 - rhasta colors - used for game engines?
    // gl_FragColor = vec4(varyingUv.x, varyingUv.y, 0, 1.0);

    // pattern 3 - black and white gradient
    // float strength = varyingUv.y;

    // pattern 4
    // float strength = 1.0 - varyingUv.y;

    // pattern 5
    // float strength = varyingUv.y * 10.0;

    // pattern 6
    // float strength = mod(varyingUv.y * 10.0, 1.0);

    // pattern 7
    // float strength = mod(varyingUv.y * 10.0, 1.0);

    // if (strength < 0.5) strength = 0.0;
    // else strength = 1.0;

    // strength = strength < 0.5 ? 0.0 : 1.0;

    // more performant
    // strength = step(0.5, strength);

    // pattern 8
    // float strength = mod(varyingUv.y * 10.0, 1.0);
    // strength = step(0.8, strength);

    // pattern 9
    // float strength = mod(varyingUv.x * 10.0, 1.0);
    // strength = step(0.8, strength);

    // pattern 10
    // float strength = step(0.8, mod(varyingUv.x * 10.0, 1.0));
    // strength += step(0.8, mod(varyingUv.y * 10.0, 1.0));

    // pattern 11
    // float strength = step(0.8, mod(varyingUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(varyingUv.y * 10.0, 1.0));

    // pattern 12
    // float strength = step(0.8, mod(varyingUv.x * 20.0, 2.0));
    // strength *= step(0.8, mod(varyingUv.y * 10.0, 1.0));

    // pattern 13
    // float barX = step(0.4, mod(varyingUv.x * 10.0, 1.0)) * step(0.8, mod(varyingUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(varyingUv.x * 10.0, 1.0)) * step(0.4, mod(varyingUv.y * 10.0, 1.0));

    // float strength = barX + barY;

    // pattern 14
    float barX = step(0.4, mod(varyingUv.x * 10.0, 1.0)) * step(0.8, mod(varyingUv.y * 10.0 + 0.2, 1.0));
    float barY = step(0.8, mod(varyingUv.x * 10.0 + 0.2, 1.0)) * step(0.4, mod(varyingUv.y * 10.0, 1.0));

    float strength = barX + barY;

    gl_FragColor = vec4(strength, strength, strength, 1.0);

    // same result 
    // gl_FragColor = vec4(varyingUv, 1.0, 1.0);
}