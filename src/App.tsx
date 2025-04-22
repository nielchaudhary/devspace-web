import { useCallback, useState, useMemo } from 'react';
import { Landing } from './components/Landing';
import { ShootingStars } from './components/ShootingStars';
import { StarsBackground } from './components/Stars';

function App() {
  const [landingLoaded, setLandingLoaded] = useState(false);
  const handleGlobeLoad = useCallback(() => setLandingLoaded(true), []);

  const memoizedShootingStars = useMemo(() => {
    return landingLoaded ? <ShootingStars className="absolute inset-0 z-0" /> : null;
  }, [landingLoaded]);

  const memoizedStarsBackground = useMemo(() => {
    return <StarsBackground className="absolute inset-0 z-0" />;
  }, []);

  return (
    <div className="relative w-full h-full">
      {memoizedShootingStars}
      {memoizedStarsBackground}
      <Landing onGlobeLoad={handleGlobeLoad} />
    </div>
  );
}

export default App;
