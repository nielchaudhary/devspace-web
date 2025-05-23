import { lazy, Suspense } from 'react';

const GlobeComponent = lazy(() =>
  import('../components/Globe').then((m) => ({ default: m.GlobeComponent }))
);

export const Landing = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="h-full w-full">
        <Suspense fallback={<div className="h-full w-full bg-black" />}>
          <GlobeComponent />
        </Suspense>
      </div>
    </div>
  );
};
