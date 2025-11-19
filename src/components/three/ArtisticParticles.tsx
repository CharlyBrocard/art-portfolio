import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

const ArtisticParticles = () => {
  const pointsRef = useRef<THREE.Points>(null)

  // Generate particle positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1000 * 3) // Reduced count for mobile (1000 particles)

    for (let i = 0; i < 1000; i++) {
      const i3 = i * 3
      // Create a sphere of particles
      const radius = 3
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
    }

    return positions
  }, [])

  // Animate particles
  useFrame((state) => {
    if (!pointsRef.current) return

    const time = state.clock.getElapsedTime()

    // Gentle rotation
    pointsRef.current.rotation.y = time * 0.05
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1

    // Gentle breathing effect
    const scale = 1 + Math.sin(time * 0.5) * 0.1
    pointsRef.current.scale.set(scale, scale, scale)
  })

  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.5} />
      {/* Directional light for depth */}
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Particle system */}
      <Points ref={pointsRef} positions={particlesPosition}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>

      {/* Optional: Add a subtle wireframe sphere */}
      <mesh>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial
          color="#f5f5f5"
          wireframe
          transparent
          opacity={0.05}
        />
      </mesh>
    </>
  )
}

export default ArtisticParticles
