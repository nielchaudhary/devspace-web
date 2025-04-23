import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { pageRoutes } from './router';
import { StarsBackground } from './components/Stars';

function App() {
  return (
    <BrowserRouter>
      <StarsBackground className="absolute inset-0 z-0" />
      <Routes>
        {pageRoutes.map((pageRoute) => (
          <Route key={pageRoute.path} path={pageRoute.path} element={<pageRoute.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
