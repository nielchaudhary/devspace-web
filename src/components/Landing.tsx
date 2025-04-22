import { lazy, Suspense } from 'react';

const GlobeComponent = lazy(() =>
  import('../components/Globe').then((m) => ({ default: m.GlobeComponent }))
);

export const Landing = () => {
  return (
    <div className="flex flex-col items-center bg-black w-full">
      <Suspense fallback={<div className="h-screen w-full bg-black" />}>
        <GlobeComponent />
      </Suspense>
    </div>
  );
};
