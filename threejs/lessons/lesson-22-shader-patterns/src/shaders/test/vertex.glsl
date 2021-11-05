varying vec2 varyingUv;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    varyingUv = uv;
}