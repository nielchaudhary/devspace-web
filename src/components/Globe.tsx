import { useState, useEffect, Suspense } from 'react';
import { globeArcs, globeConfig } from '../data/globeData';

export function GlobeComponent() {
  const [World, setWorld] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    import('../utils/globeConfig').then((module) => {
      setWorld(() => module.World);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-start w-full bg-black relative pt-20 pb-20 min-h-[calc(100vh-80px)]">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="relative z-20 w-full text-center mb-8 mt-10">
          <div className="relative mx-auto inline-block w-max">
            <h1
              className="absolute inset-0 animate-gradient bg-gradient-to-r from-[#ff4da6] via-[#45caff] to-[#ff4da6] bg-[length:200%_auto] bg-clip-text text-transparent font-bold"
              style={{ marginTop: '2.5rem', fontSize: '3.5rem' }}
            >
              devspace
            </h1>
            <h1 className="invisible font-bold" style={{ marginTop: '2.5rem', fontSize: '3.5rem' }}>
              devspace
            </h1>
          </div>

          <div className="relative z-20 text-center px-4">
            <h1
              className="font-bold bg-gradient-to-r from-[#ff4da6] via-[#45caff] to-[#ff4da6] bg-[length:200%_auto] bg-clip-text text-transparent inline-block"
              style={{ marginTop: '-2rem', fontSize: '2.25rem' }}
            >
              bridging designers & developers across the globe
            </h1>
          </div>
        </div>

        <div className="relative w-full" style={{ height: '700px' }}>
          <Suspense
            fallback={
              <div className="absolute inset-0 flex items-center justify-center text-white">
                Loading globe...
              </div>
            }
          >
            {World ? (
              <World data={globeArcs} globeConfig={globeConfig} />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-white">
                Loading globe...
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
