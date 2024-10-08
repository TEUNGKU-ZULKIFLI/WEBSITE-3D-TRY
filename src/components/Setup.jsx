import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Environment, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

gsap.registerPlugin(ScrollTrigger);

export function Setup(props) {
    const { nodes, materials } = useGLTF('./models/setupTeungku.gltf');
    const wrapperRef = useRef();
    const groupRef = useRef();
    const popIn = useRef();
    const slideOfleft = useRef();
    const [direction, setDirection] = useState(1);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += direction * 0.001;

            if (groupRef.current.rotation.y > Math.PI / 6) { 
                setDirection(-1);
            } else if (groupRef.current.rotation.y < -Math.PI / 6) {
                setDirection(1);
            }
        }
    });

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });
        const meshes = popIn.current.children;
    
        Array.from(meshes).forEach((mesh, index) => {
    
            if (mesh.material) {
                mesh.material.transparent = true;
                mesh.material.opacity = 0;
                tl.to(mesh.material, { opacity: 1, duration: 0.5 }, index * 0.2);
            }
    
            tl.from(mesh.scale, { x: 0, y: 0, z: 0, duration: 0.5 }, index * 0.2);
        });
    }, []);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 1 } });
        const meshes = slideOfleft.current.children;
    
        Array.from(meshes).forEach((mesh, index) => {
    
            if (mesh.material) {
                mesh.material.transparent = true;
                mesh.material.opacity = 0;
                tl.to(mesh.material, { opacity: 1, duration: 0.5 }, index * 0.2);
            }
    
            tl.from(mesh.position, { x: "-=10", duration: 0.5 }, index * 0.2);
        });
    }, []);

    return (
        <>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 0, 0]} intensity={500} color={'#FF4500'}/>
        <pointLight position={[-10, 0, 0]} intensity={500} color={'#F0F8FF'}/>
        <pointLight position={[2, 2, 2]} intensity={10} />
        <Environment preset="night" />
    <group ref={wrapperRef} rotation={[Math.PI / 6, Math.PI, 0]} >
        <group ref={groupRef} {...props} dispose={null} >
            <group
                name="Kursi"
                position={[5.636, 3.8, -4.678]}
                rotation={[Math.PI, -0.713, Math.PI]}
                scale={0.955}
                userData={{ name: 'Kursi' }}>
                <mesh
                    name="chair_Cube026-Mesh"
                    castShadow
                    receiveShadow
                    geometry={nodes['chair_Cube026-Mesh'].geometry}
                    material={materials['795548']}
                />
                <mesh
                    name="chair_Cube026-Mesh_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['chair_Cube026-Mesh_1'].geometry}
                    material={materials.DD9944}
                />
            </group>
            <mesh
                name="Kopi"
                castShadow
                receiveShadow
                geometry={nodes.Kopi.geometry}
                material={materials['In-Game_Collectables_Color_Palette_01.001']}
                position={[5.655, 12.038, 0.739]}
                rotation={[-Math.PI, 0.694, -Math.PI]}
                scale={3.852}
                userData={{ name: 'Kopi' }}
            />
            <mesh
                name="Mouse"
                castShadow
                receiveShadow
                geometry={nodes.Mouse.geometry}
                material={materials.ComputerMouse_mat1}
                position={[-4.685, 10.711, 1.247]}
                rotation={[0, 0.556, 0]}
                scale={0.358}
                userData={{ name: 'Mouse' }}
            />
            <mesh
                name="Keyboard"
                castShadow
                receiveShadow
                geometry={nodes.Keyboard.geometry}
                material={materials['lambert3SG.001']}
                position={[-0.833, 10.693, 1.305]}
                rotation={[Math.PI, -0.001, Math.PI]}
                scale={0.014}
                userData={{ name: 'Keyboard' }}
            />
            <group ref={popIn}
                name="LapTop"
                position={[-0.663, 10.7, 3.722]}
                rotation={[-Math.PI, 1.57, -Math.PI]}
                scale={3.852}
                userData={{ name: 'LapTop' }}
                >
                <mesh
                    name="LapTop_Cube002-Mesh"
                    castShadow
                    receiveShadow
                    geometry={nodes['LapTop_Cube002-Mesh'].geometry}
                    material={materials.DarkGray}
                />
                <mesh
                    name="LapTop_Cube002-Mesh_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['LapTop_Cube002-Mesh_1'].geometry}
                    material={materials.lighterGray}
                />
                <mesh
                    name="LapTop_Cube002-Mesh_2"
                    castShadow
                    receiveShadow
                    geometry={nodes['LapTop_Cube002-Mesh_2'].geometry}
                    material={materials.Gray2}
                />
                <mesh
                    name="LapTop_Cube002-Mesh_3"
                    castShadow
                    receiveShadow
                    geometry={nodes['LapTop_Cube002-Mesh_3'].geometry}
                    material={materials.Screen}
                />
            </group>
            <group 
                name="Asbak"
                position={[3.77, 11.025, 1.272]}
                rotation={[0, -0.799, 0]}
                scale={1.837}
                userData={{ name: 'Asbak' }}>
                <mesh
                    name="Node-Mesh"
                    castShadow
                    receiveShadow
                    geometry={nodes['Node-Mesh'].geometry}
                    material={materials.mat22}
                />
                <mesh
                    name="Node-Mesh_1"
                    castShadow
                    receiveShadow
                    geometry={nodes['Node-Mesh_1'].geometry}
                    material={materials.mat18}
                />
                <mesh
                    name="Node-Mesh_2"
                    castShadow
                    receiveShadow
                    geometry={nodes['Node-Mesh_2'].geometry}
                    material={materials.mat21}
                />
                <mesh
                    name="Node-Mesh_3"
                    castShadow
                    receiveShadow
                    geometry={nodes['Node-Mesh_3'].geometry}
                    material={materials.mat20}
                />
            </group>
            <mesh
                name="Meja"
                castShadow
                receiveShadow
                geometry={nodes.Meja.geometry}
                material={materials['wood.001']}
                position={[7.335, 3.8, -1.056]}
                scale={[17.172, 21.149, 17.836]}
                userData={{ name: 'Meja' }}
            />
            <mesh 
                name="Project"
                castShadow
                receiveShadow
                geometry={nodes.Project.geometry}
                material={materials.BingkaiFoto}
                position={[0, 3.191, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-13.537, -0.56, -13.537]}
                userData={{ name: 'Project' }}
            />
            <group ref={slideOfleft}
                name="TeungkubgMerah"
                position={[4.752, 11.858, 4.435]}
                rotation={[Math.PI / 2, 0, 2.63]}
                scale={2.293}
                userData={{ name: 'TeungkubgMerah' }}>
                <mesh
                    name="TeungkubgMerah_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.TeungkubgMerah_1.geometry}
                    material={materials.TeungkubgMerah}
                />
                <mesh
                    name="TeungkubgMerah_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.TeungkubgMerah_2.geometry}
                    material={materials.BingkaiFoto}
                />
                <mesh 
                    name="Cube"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials.BingkaiFoto}
                    position={[0, -0.172, 0.207]}
                    rotation={[0.592, 0, -3.142]}
                    scale={[0.097, 0.054, 0.387]}
                    userData={{ name: 'Cube' }}
                />
            </group>
        </group>
    </group>
        </>
        )
    }

useGLTF.preload('./models/setupTeungku.gltf')