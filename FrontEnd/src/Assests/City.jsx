/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
export function Model(props) {
  const { nodes, materials } = useGLTF("/City.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Street_Bench_metal_curvy_01.geometry}
        material={
          materials["Chrome Satin 1_152e02ff-4ca3-423d-aae0-ec007aa7876c"]
        }
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottom_part.geometry}
        material={materials["Bottom part_4c6f941a-1f13-448a-aaf3-6bc98194f8f8"]}
      /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screws.geometry}
        material={materials["Screws_c8d72103-10b6-4e9a-aa34-7c969c74d5f8"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_screws.geometry}
        material={materials["Big screws_1d7317a0-da88-4b3b-937a-08a7509ecf4a"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top.geometry}
        material={materials["Top_805f85ff-b7f9-4abb-a4b7-58c440d389bc"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Red_screws.geometry}
        material={materials["Red screws_eddaed58-8f95-4063-b0ae-bef745f82324"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Middle_part.geometry}
        material={materials["Middle part_29588177-4435-423d-89ad-fd4ca4a1bb96"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hot_dog_stand.geometry}
        material={materials["Wood_6359dfcf-3586-4ed1-99ee-a4437b07f942"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.outer_garbage_can.geometry}
        material={
          materials["Subsurface Textured_f6b37a7e-f7ea-48aa-b578-54955b5ffc86"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lid.geometry}
        material={
          materials["Chrome Satin_39afc3d8-1e6b-45aa-bd20-18983dccaa9b"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inner_container.geometry}
        material={
          materials["Titanium Satin_c57a4050-dff9-48c3-8a90-d94bbf6fca69"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.urban_bicycle_rack.geometry}
        material={materials["Noise Satin_35ea6378-c368-4367-a15c-fd58d0240147"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wood.geometry}
        material={materials["Wood 1_4b5c7454-7a3e-4337-aedb-97de3ff87523"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screws.geometry}
        material={
          materials["Aluminum Satin_4a67f5de-08b5-4588-93b1-b35431fde624"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.metal_frame.geometry}
        material={materials["Galvanized_804c0dad-b77a-4385-9617-9e6828407908"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass.geometry}
        material={materials["Grass_df3f676e-b411-4bae-b2ad-49d75f0a2daa"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Footpath.geometry}
        material={materials["Footpath 2_328421fc-fab8-4418-8d90-2c21a56d2398"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Road.geometry}
        material={materials["Road 2_5d033260-6ad1-4e23-b459-6d20c5a1bf35"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lines.geometry}
        material={materials["Lines 2_7eac1a39-dbfd-4e1c-9f62-31e86a624a10"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass_1.geometry}
        material={materials["Grass 2_be16c700-7beb-4893-a5e3-ac064f2a9067"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Footpath_1.geometry}
        material={materials["Footpath 1_c6d5dc99-e145-465c-be15-3dbc1472141e"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Road_1.geometry}
        material={materials["Road 1_95009374-b5af-4878-bf5a-1334f95ae01a"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lines_1.geometry}
        material={materials["Lines 1_2555cdd5-a321-4788-be09-3a0999a0f400"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass_2.geometry}
        material={materials["Grass 1_79aea7cc-65c9-4d17-860d-9d9b31b398dd"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.First_floor.geometry}
        material={
          materials["First floor 1_135e8c9c-6b9b-4dc4-bfdb-39836b7f604d"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof.geometry}
        material={
          materials["Grey material_9e7750d8-2755-4731-bf65-f2788b3eba64"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottom_section.geometry}
        material={
          materials["Grey material_9e7750d8-2755-4731-bf65-f2788b3eba64"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door.geometry}
        material={materials["Door_84718de8-3819-4404-a9d8-c4b01cbc993a"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_glass.geometry}
        material={
          materials["Window glass 2_136b421f-1b04-4a2f-81f2-6de39c3d0ce4"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_building.geometry}
        material={
          materials["Main building 2_12ec5e3d-43a2-47a0-afb6-3f602799e5a9"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={
          materials["Grey material_9e7750d8-2755-4731-bf65-f2788b3eba64"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_frames.geometry}
        material={
          materials["Grey material_9e7750d8-2755-4731-bf65-f2788b3eba64"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.First_floor_1.geometry}
        material={materials["First floor_af9fe263-1672-4e7e-b162-901856a62b7b"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_building_1.geometry}
        material={
          materials["Main building 1_50969961-cd16-417c-be60-def5654ea116"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_glass_1.geometry}
        material={
          materials["Window glass 1_52811875-6fd8-43e9-b173-be857565080b"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Balcony.geometry}
        material={materials["Balcony_34895235-dea7-4f8d-b899-6c0ea54deaf6"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_frames_1.geometry}
        material={
          materials[
            "Window frames and door_2f4ce613-3e58-49a6-b086-bb7fd328c93c"
          ]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_1.geometry}
        material={
          materials[
            "Window frames and door_2f4ce613-3e58-49a6-b086-bb7fd328c93c"
          ]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground_floor.geometry}
        material={
          materials["Ground floor_bc7a5a5d-1f6f-4931-8bba-c0490f1de00d"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_building_2.geometry}
        material={
          materials["Main building_6ca90302-3c89-41b9-a707-ea97fa201793"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Marquee.geometry}
        material={materials["Marquee_cd9c7e5a-50e0-4755-94a8-786d4f3e838f"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_frame.geometry}
        material={
          materials[
            "Window and door frame_053b4f85-23bc-4bf2-9bf7-224273d82a18"
          ]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_glass_2.geometry}
        material={
          materials["Window glass_2abfc7cf-f43e-40f4-bf4e-376c98beaf5f"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_2.geometry}
        material={
          materials[
            "Window and door frame_053b4f85-23bc-4bf2-9bf7-224273d82a18"
          ]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_frames_2.geometry}
        material={
          materials[
            "Window frames and roof_0afcae85-332a-46ce-b530-29b4cf665a35"
          ]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_1.geometry}
        material={
          materials[
            "Window frames and roof_0afcae85-332a-46ce-b530-29b4cf665a35"
          ]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Footpath_2.geometry}
        material={materials["Footpath 3_0d5f2dd6-6374-4e7d-83c7-c3d16f24914e"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Road_2.geometry}
        material={materials["Road 3_96bf6eec-f235-4edf-82d0-0ba1189bc560"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lines_2.geometry}
        material={materials["Lines 3_6fd78723-5ac7-4b19-a9dd-bfcedb5752d1"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass_3.geometry}
        material={materials["Grass 3_f628125c-ff98-4d85-9cc6-55848836a9b3"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Freya_d2bb72fb-cff9-4c1e-9287-5e242ebed1bc"]}
      />
    </group>
  );
}

useGLTF.preload("/City.gltf");