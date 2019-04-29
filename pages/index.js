import { useEffect, useMemo, useRef, useState } from 'react';
import { apply, Canvas, useRender, useThree, useUpdate } from 'react-three-fiber';
import * as THREE from 'three';

import { OrbitControls } from '../resources';

apply({ OrbitControls });

const affectPosition = (x, y, z, trait) => {
    return [x, y, z].map(p => {
        return p * Math.cos(p * trait) * Math.abs(Math.sin(p * trait)) * 2;
    });
};

const Orb = ({ value }) => {
    const color = useMemo(() => {
        return `#${Math.round(0xFFFFFF / value).toString(16)}`;
    }, [value]);

    const geoRef = useUpdate(geometry => {
        geometry.morphAttributes.position = [];
        const positions = geometry.attributes.position.array;
        const scalePositions = [];
        const vertex = new THREE.Vector3();
        for (let p = 0; p < positions.length; p += 3) {
            const x = positions[p];
            const y = positions[p + 1];
            const z = positions[p + 2];
            vertex.set(...affectPosition(x, y, z, value));
            vertex.toArray(scalePositions, scalePositions.length);
        }
        geometry.morphAttributes.position[0] = new THREE.Float32BufferAttribute(scalePositions, 3);
    }, [value]);

    return (
        <mesh
            position={[0, 0, 0]}
            morphTargetInfluences={[1]}
        >
            <icosahedronBufferGeometry
                args={[50, 1]}
                ref={geoRef}
                attach="geometry"
                onUpdate={geometry => {
                    geometry.attributes.position.needsUpdate = true;
                    geometry.computeBoundingSphere();
                }}
            />
            <meshPhongMaterial
                attach="material"
                flatShading={true}
                morphTargets={true}
                color={color}
            />
        </mesh>
    );
};

const Content = ({ value }) => {
    const cameraRef = useRef();
    const controlsRef = useRef();
    const { canvas, size, setDefaultCamera } = useThree();

    useEffect(() => void setDefaultCamera(cameraRef.current), []);
    useRender(() => controlsRef.current.update());

    return (
        <>
            <perspectiveCamera
                ref={cameraRef}
                aspect={size.width / size.height}
                radius={(size.width + size.height) / 4}
                fov={55}
                position={[70, 70, 200]}
                onUpdate={self => self.updateProjectionMatrix()}
            />

            <ambientLight args={[0x404040]} />
            <pointLight args={[0xCCCCCC, 0.8]} position={[-400, 400, 500]} />
            <pointLight args={[0xCCCCCC, 0.8]} position={[300, 100, -500]} />
            <pointLight args={[0xCCCCCC, 0.8]} position={[400, -400, 500]} />

            {cameraRef.current && (
                <>
                    <orbitControls
                        ref={controlsRef}
                        args={[cameraRef.current, canvas]}
                    />
                    <Orb value={value} />
                </>
            )}
        </>
    );
};

export default () => {
    const [value, setValue] = useState(10);
    return (
        <>
            <style jsx global>{`
                html,
                body,
                #__next {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    background: #272727;
                }
            `}</style>
            <Canvas>
                <Content value={value} setValue={setValue} />
            </Canvas>
        </>
    );
};
