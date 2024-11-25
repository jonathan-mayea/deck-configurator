/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/deck-meshes-blender.glb 
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import * as THREE from "three";
import { useCustomization } from "../contexts/Customization";
import { create } from "zustand";

function Deck(props) {
  const { nodes, materials } = useGLTF("./models/deck-meshes-blender.glb");
  const { material, deckStain, setMaterial } = useCustomization();

  const TextureLoader = new THREE.TextureLoader();

  const texturePaths = {
    natural: "public/textures/stains/texture-stain-natural.png",
    teal: "public/textures/stains/texture-stain-teal.png",
  };

  const stainNaturalTextureProps = useTexture({
    map: "./textures/stains/texture-stain-natural.png",
  });

  const stainTealTextureProps = useTexture({
    map: "./textures/stains/texture-stain-teal.png",
  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.stain.geometry}>
        <meshStandardMaterial
          {...(material === "stains"
            ? stainNaturalTextureProps
            : stainTealTextureProps)}
          position={[0.013, -0.004, 0.023]}
          rotation={[0, 0.506, 0]}
          scale={0.149}
        />
      </mesh>

      <mesh
        geometry={nodes.finish.geometry}
        material={materials.finish_blank_material}
        position={[0, 0, -0.077]}
      />

      <mesh
        geometry={nodes.graphic.geometry}
        material={materials.blank_graphic_material}
        position={[0, 0, -0.06]}
      />

      <mesh
        geometry={nodes.hologram.geometry}
        material={materials.blank_hologram_material}
        position={[-0.014, 0.005, -0.08]}
        scale={[0.985, 0.985, 1]}
      />

      <mesh
        geometry={nodes.top.geometry}
        material={materials.blank_top_material}
        position={[-0.008, 0.005, -0.224]}
      />
    </group>
  );
}

export default Deck;

useGLTF.preload("./models/deck-meshes-blender.glb");
