import { useEffect, useState, useMemo, useCallback } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import './ParticleNetwork.css';

/**
 * ParticleNetwork — Interactive floating node network
 * Repels/attracts based on cursor position with subtle connecting lines.
 */
export default function ParticleNetwork() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Particles loaded — available for debugging if needed
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 60,
      background: { color: { value: 'transparent' } },
      particles: {
        number: {
          value: 70,
          density: { enable: true, area: 900 }
        },
        color: { value: '#66FCF1' },
        shape: { type: 'circle' },
        opacity: {
          value: { min: 0.1, max: 0.35 },
          animation: {
            enable: true,
            speed: 0.8,
            minimumValue: 0.1,
            sync: false
          }
        },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 1.5,
            minimumValue: 0.5,
            sync: false
          }
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'bounce' }
        },
        links: {
          enable: true,
          color: '#66FCF1',
          opacity: 0.1,
          distance: 160,
          width: 1
        }
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: { enable: true, mode: 'repulse' },
          onClick: { enable: true, mode: 'push' }
        },
        modes: {
          repulse: { distance: 130, duration: 0.4, speed: 0.5 },
          push: { quantity: 2 }
        }
      },
      detectRetina: true
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="particle-container">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  );
}
