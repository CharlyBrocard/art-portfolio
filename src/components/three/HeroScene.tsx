import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import ArtisticParticles from './ArtisticParticles'
import styles from './HeroScene.module.css'

const HeroScene = () => {
  return (
    <div className={styles.sceneContainer}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 85 }}
        dpr={[1, 2]} // Limit pixel ratio to max 2 (not 3 on iPhone)
        performance={{ min: 0.5 }} // Allow performance degradation if needed
        gl={{
          antialias: false, // Disable for better mobile performance
          alpha: true,
          powerPreference: 'default', // Don't force high-performance mode
        }}
      >
        <Suspense fallback={null}>
          <ArtisticParticles />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default HeroScene
