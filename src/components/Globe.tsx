'use client';
import dynamic from 'next/dynamic';
import { TextGenerateEffect } from './TextGenerateEffect';
import { globeArcs, globeConfig } from '../data/globeData';

const World = dynamic(() => import('../utils/globeConfig').then((m) => m.World), {
  ssr: false,
});

export function GlobeComponent() {
  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen bg-black relative w-full">
      <div className="mx-auto w-full relative overflow-hidden">
        <h1 className="relative z-20 font-bold text-center font-sans tracking-tight">
          <div className="relative mx-auto inline-block w-max" style={{ marginBottom: '0' }}>
            <span
              className="absolute inset-0 animate-gradient bg-gradient-to-r from-[#ff4da6] via-[#45caff] to-[#ff4da6] 
                bg-[length:200%_auto] bg-clip-text text-transparent"
              style={{
                fontSize: '1.5em',
                paddingBottom: '0',
              }}
            >
              devspace
            </span>
            <span
              className="invisible"
              style={{
                fontSize: '1.5em',
                paddingBottom: '0',
              }}
            >
              devspace
            </span>
          </div>
        </h1>
        <div className="relative z-20 text-center px-4" style={{ marginTop: '-1.5rem' }}>
          <TextGenerateEffect
            words="bridging designers & developers across the globe 🤝🏻"
            filter={true}
            duration={1}
            staggerDelay={0.3}
            className="text-3xl"
          />
        </div>

        <div className="relative w-full" style={{ height: '800px' }}>
          <World data={globeArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
