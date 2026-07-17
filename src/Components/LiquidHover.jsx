import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const FragmentShader = `
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uTextureResolution;
varying vec2 vUv;

void main() {
    // 1. Calculate UV for object-cover (prevent stretching)
    vec2 ratio = vec2(
        min((uResolution.x / uResolution.y) / (uTextureResolution.x / uTextureResolution.y), 1.0),
        min((uResolution.y / uResolution.x) / (uTextureResolution.y / uTextureResolution.x), 1.0)
    );
    
    // Shift image perspective on mobile to make room for text
    float offsetX = 0.5;
    if (uResolution.x < 768.0) {
        offsetX = 0.35; // Shifts the background image slightly to the right
    }
    
    vec2 uv = vec2(
        vUv.x * ratio.x + (1.0 - ratio.x) * offsetX,
        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );
    
    // 2. Ripple effect based on screen coordinates (vUv)
    vec2 screenRatio = vec2(max(uResolution.x / uResolution.y, 1.0), max(uResolution.y / uResolution.x, 1.0));
    float dist = distance(vUv * screenRatio, uMouse * screenRatio);
    
    float ripple = sin(dist * 30.0 - uTime * 8.0) * exp(-dist * 3.5);
    
    // 3. Apply displacement
    vec2 displacedUv = uv + (vUv - uMouse) * ripple * 0.15;
    
    gl_FragColor = texture2D(uTexture, displacedUv);
}
`;

const VertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const LiquidPlane = ({ image }) => {
    const mesh = useRef();
    const texture = useTexture(image);
    const { viewport, mouse, size } = useThree();

    const uniforms = useMemo(
        () => ({
            uTexture: { value: texture },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(0, 0) },
            uTextureResolution: { value: new THREE.Vector2(0, 0) }
        }),
        [texture]
    );

    useEffect(() => {
        if (mesh.current && texture && texture.image) {
            mesh.current.material.uniforms.uResolution.value.set(size.width, size.height);
            mesh.current.material.uniforms.uTextureResolution.value.set(texture.image.width, texture.image.height);
        }
    }, [size.width, size.height, texture]);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.material.uniforms.uTime.value = state.clock.elapsedTime;

            // Convert mouse coordinates from -1 to 1 to 0 to 1
            const targetX = (mouse.x * 0.5) + 0.5;
            const targetY = (mouse.y * 0.5) + 0.5;

            // Lerp mouse position for smooth trailing effect
            mesh.current.material.uniforms.uMouse.value.x += (targetX - mesh.current.material.uniforms.uMouse.value.x) * 0.05;
            mesh.current.material.uniforms.uMouse.value.y += (targetY - mesh.current.material.uniforms.uMouse.value.y) * 0.05;
        }
    });

    return (
        <mesh ref={mesh}>
            <planeGeometry args={[viewport.width, viewport.height, 32, 32]} />
            <shaderMaterial
                vertexShader={VertexShader}
                fragmentShader={FragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

const LiquidHover = ({ image, className }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile screen or touch device
        const checkMobile = () => {
            const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
            const isSmallScreen = window.innerWidth <= 768;
            setIsMobile(isTouch || isSmallScreen);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) {
        return (
            <div className={`w-full h-full ${className || ''}`}>
                <img src={image} alt="Background" className="w-full h-full object-cover" />
            </div>
        );
    }

    return (
        <div className={`w-full h-full ${className || ''}`}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <LiquidPlane image={image} />
            </Canvas>
        </div>
    );
};

export default LiquidHover;
