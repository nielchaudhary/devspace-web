import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { pageRoutes } from './router';
import { StarsBackground } from './components/Stars';

function App() {
  return (
    <BrowserRouter>
      <div className="relative h-screen w-screen overflow-hidden">
        <StarsBackground className="absolute inset-0 z-0" />
        <div className="relative z-10">
          <Routes>
            {pageRoutes.map((pageRoute) => (
              <Route key={pageRoute.path} path={pageRoute.path} element={<pageRoute.component />} />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
