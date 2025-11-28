import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial, MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

// Floating colored sphere component
const FloatingSphere = ({
  position,
  color,
  scale,
  speed,
}: {
  position: [number, number, number]
  color: string
  scale: number
  speed: number
}) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.3
      meshRef.current.position.x = position[0] + Math.cos(time * speed * 0.5) * 0.2
      meshRef.current.rotation.x = time * 0.2
      meshRef.current.rotation.y = time * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[scale, 32, 32]} />
      <meshStandardMaterial
        color={color}
        roughness={0.3}
        metalness={0.4}
        transparent
        opacity={0.85}
      />
    </mesh>
  )
}

// Paint splatter component (organic shape instead of sphere)
const PaintSplatter = ({
  position,
  color,
  scale,
}: {
  position: [number, number, number]
  color: string
  scale: number
}) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      meshRef.current.rotation.z = time * 0.15
      const breathing = 1 + Math.sin(time * 0.5) * 0.05
      meshRef.current.scale.set(breathing, breathing, breathing)
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <dodecahedronGeometry args={[scale, 1]} />
      <meshStandardMaterial
        color={color}
        roughness={0.9}
        metalness={0.05}
        transparent
        opacity={0.65}
        flatShading
      />
    </mesh>
  )
}

// Main distorted sphere (moved to the side) - Character Design Purple
const MainShape = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
    }
  })

  return (
    <Sphere ref={meshRef} args={[2.0, 64, 64]} position={[-4, 0.5, -2]}>
      <MeshDistortMaterial
        color="#8a2be2"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0.2}
        metalness={0.3}
        transparent
        opacity={0.85}
      />
    </Sphere>
  )
}

// Secondary shape on the right - Comic Yellow
const SecondaryShape = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * -0.08
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.12
    }
  })

  return (
    <Sphere ref={meshRef} args={[1.6, 64, 64]} position={[4.5, -0.5, -2]}>
      <MeshDistortMaterial
        color="#ffc107"
        attach="material"
        distort={0.45}
        speed={1.8}
        roughness={0.25}
        metalness={0.25}
        transparent
        opacity={0.8}
      />
    </Sphere>
  )
}

const ArtisticParticles = () => {
  const pointsRef = useRef<THREE.Points>(null)
  const points2Ref = useRef<THREE.Points>(null)
  const points3Ref = useRef<THREE.Points>(null)
  const points4Ref = useRef<THREE.Points>(null)

  // Generate particle positions - Main group (increased)
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2500 * 3)

    for (let i = 0; i < 2500; i++) {
      const i3 = i * 3
      const radius = 4 + Math.random() * 3.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
    }

    return positions
  }, [])

  // Second particle layer (increased)
  const particlesPosition2 = useMemo(() => {
    const positions = new Float32Array(1500 * 3)

    for (let i = 0; i < 1500; i++) {
      const i3 = i * 3
      const radius = 5 + Math.random() * 2.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
    }

    return positions
  }, [])

  // Third particle layer (increased)
  const particlesPosition3 = useMemo(() => {
    const positions = new Float32Array(1000 * 3)

    for (let i = 0; i < 1000; i++) {
      const i3 = i * 3
      const radius = 6 + Math.random() * 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
    }

    return positions
  }, [])

  // Fourth particle layer - outer
  const particlesPosition4 = useMemo(() => {
    const positions = new Float32Array(600 * 3)

    for (let i = 0; i < 600; i++) {
      const i3 = i * 3
      const radius = 7 + Math.random() * 1.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
    }

    return positions
  }, [])

  // Animate particles with more dynamic movement
  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.06
      pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.2
      pointsRef.current.rotation.z = Math.cos(time * 0.08) * 0.1

      const scale = 1 + Math.sin(time * 0.6) * 0.12
      pointsRef.current.scale.set(scale, scale, scale)
    }

    if (points2Ref.current) {
      points2Ref.current.rotation.y = -time * 0.05
      points2Ref.current.rotation.z = Math.cos(time * 0.08) * 0.15
      points2Ref.current.rotation.x = Math.sin(time * 0.06) * 0.1
    }

    if (points3Ref.current) {
      points3Ref.current.rotation.x = time * 0.07
      points3Ref.current.rotation.y = Math.sin(time * 0.09) * 0.25
      points3Ref.current.rotation.z = Math.cos(time * 0.05) * 0.12
    }

    if (points4Ref.current) {
      points4Ref.current.rotation.y = time * 0.04
      points4Ref.current.rotation.x = -Math.sin(time * 0.11) * 0.18
      points4Ref.current.rotation.z = Math.sin(time * 0.07) * 0.15

      const scale4 = 1 + Math.cos(time * 0.45) * 0.1
      points4Ref.current.scale.set(scale4, scale4, scale4)
    }
  })

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={1.2} color="#8a2be2" />
      <pointLight position={[-4, 0, -1]} intensity={2.0} color="#6495ed" />
      <pointLight position={[4, 0, -1]} intensity={1.8} color="#ffc107" />
      <pointLight position={[0, -2, 0]} intensity={1.5} color="#dc3545" />

      {/* Main shapes on the sides */}
      <MainShape />
      <SecondaryShape />

      {/* Mix of floating spheres and paint splatters - colors from sections (tailles augmentées) */}
      <FloatingSphere position={[-5, 2, -1]} color="#8a2be2" scale={0.65} speed={0.7} />
      <PaintSplatter position={[5.5, -1.5, -0.5]} color="#ffc107" scale={0.75} />
      <PaintSplatter position={[-3.5, -2, -1]} color="#6495ed" scale={0.55} />
      <FloatingSphere position={[3.8, 2.2, -1.5]} color="#dc3545" scale={0.6} speed={0.6} />
      <PaintSplatter position={[-5.5, -1, 0]} color="#8a2be2" scale={0.5} />
      <FloatingSphere position={[6, 1, -2]} color="#ffb74d" scale={0.58} speed={0.75} />
      <PaintSplatter position={[-4.5, 0, -2.5]} color="#6495ed" scale={0.45} />
      <FloatingSphere position={[5, 2.5, -1]} color="#c62828" scale={0.52} speed={0.65} />
      <PaintSplatter position={[-6, -2.2, -0.8]} color="#8a2be2" scale={0.4} />
      <FloatingSphere position={[6.5, 0.5, -1.8]} color="#ffc107" scale={0.48} speed={0.7} />
      <PaintSplatter position={[-5.2, 3, -2]} color="#6495ed" scale={0.42} />
      <FloatingSphere position={[4.8, -2.5, -1.2]} color="#ff5722" scale={0.5} speed={0.62} />
      <PaintSplatter position={[-3.8, 1, 0.5]} color="#8a2be2" scale={0.38} />
      <FloatingSphere position={[7, -0.8, -2.5]} color="#ffc107" scale={0.44} speed={0.72} />

      {/* Multi-layer particle systems with section colors */}
      <Points ref={pointsRef} positions={particlesPosition}>
        <PointMaterial
          transparent
          color="#8a2be2"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.5}
        />
      </Points>

      <Points ref={points2Ref} positions={particlesPosition2}>
        <PointMaterial
          transparent
          color="#ffc107"
          size={0.018}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>

      <Points ref={points3Ref} positions={particlesPosition3}>
        <PointMaterial
          transparent
          color="#6495ed"
          size={0.024}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.45}
        />
      </Points>

      <Points ref={points4Ref} positions={particlesPosition4}>
        <PointMaterial
          transparent
          color="#dc3545"
          size={0.016}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.35}
        />
      </Points>

      {/* Wireframe rings with section colors */}
      <mesh position={[-4, 0.5, -2]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#8a2be2" wireframe transparent opacity={0.18} />
      </mesh>
      <mesh position={[4.5, -0.5, -2]} rotation={[Math.PI / 3, 0, Math.PI / 4]}>
        <torusGeometry args={[1.2, 0.015, 16, 100]} />
        <meshBasicMaterial color="#ffc107" wireframe transparent opacity={0.15} />
      </mesh>
      <mesh position={[0, 3, -3]} rotation={[0, 0, Math.PI / 6]}>
        <torusGeometry args={[1.8, 0.012, 16, 100]} />
        <meshBasicMaterial color="#6495ed" wireframe transparent opacity={0.1} />
      </mesh>
      <mesh position={[-5.5, -1.5, -2.5]} rotation={[Math.PI / 4, Math.PI / 3, 0]}>
        <torusGeometry args={[1.0, 0.012, 16, 100]} />
        <meshBasicMaterial color="#dc3545" wireframe transparent opacity={0.12} />
      </mesh>
      <mesh position={[5.8, 1.8, -2.2]} rotation={[Math.PI / 5, 0, Math.PI / 3]}>
        <torusGeometry args={[0.9, 0.01, 16, 100]} />
        <meshBasicMaterial color="#ffb74d" wireframe transparent opacity={0.14} />
      </mesh>

      {/* Small rotating geometric shapes with section colors */}
      <mesh position={[-6.5, 0, -1.5]} rotation={[0, 0, 0]}>
        <octahedronGeometry args={[0.15, 0]} />
        <meshBasicMaterial color="#8a2be2" wireframe transparent opacity={0.2} />
      </mesh>
      <mesh position={[6.8, -1, -1.8]} rotation={[0, 0, 0]}>
        <icosahedronGeometry args={[0.12, 0]} />
        <meshBasicMaterial color="#ffc107" wireframe transparent opacity={0.18} />
      </mesh>
      <mesh position={[-4.2, 2.8, -2]} rotation={[0, 0, 0]}>
        <tetrahedronGeometry args={[0.18, 0]} />
        <meshBasicMaterial color="#6495ed" wireframe transparent opacity={0.16} />
      </mesh>
      <mesh position={[5.5, 2.2, -2.5]} rotation={[0, 0, 0]}>
        <octahedronGeometry args={[0.14, 0]} />
        <meshBasicMaterial color="#dc3545" wireframe transparent opacity={0.19} />
      </mesh>
    </>
  )
}

export default ArtisticParticles
