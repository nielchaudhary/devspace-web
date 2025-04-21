import { Landing } from './components/Landing';
import { ShootingStars } from './components/ShootingStars';
import { StarsBackground } from './components/Stars';

function App() {
  return (
    <div className="relative w-full h-full">
      <ShootingStars className="absolute inset-0 z-0" />
      <StarsBackground className="absolute inset-0 z-0" />
      <Landing />
    </div>
  );
}

export default App;
