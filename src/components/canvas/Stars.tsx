import { useState, useRef, useEffect, Suspense } from "react";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { random } from "maath";
import { TypedArray } from "three";

const Stars = (props: any) => {
  const ref = useRef<THREE.Points>();
  const [sphere] = useState<TypedArray>(() =>
    random.inSphere(new Float32Array(5001), { radius: 1.2 })
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  // ✅ PLACE CLEANUP USEEFFECT HERE
  useEffect(() => {
    const temp = canvasRef.current;
    return () => {
      if (temp) {
        temp.innerHTML = "";
      }
    };
  }, []);

  return (
    <div ref={canvasRef} className="absolute inset-0 z-[-1] h-auto w-full">
      <Canvas camera={{ position: [0, 0, 1] }} gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default React.memo(StarsCanvas);
