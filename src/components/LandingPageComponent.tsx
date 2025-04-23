import { Landing } from './Landing';
import { ShootingStars } from './ShootingStars';
import { StarsBackground } from './Stars';

export const LandingPageComponent = () => {
  return (
    <div className="relative w-full h-full">
      <ShootingStars className="absolute inset-0 z-0" />
      <StarsBackground className="absolute inset-0 z-0" />
      <Landing />
    </div>
  );
};
