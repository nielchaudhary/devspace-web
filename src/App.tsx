import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { pageRoutes } from './router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {pageRoutes.map((pageRoute) => (
          <Route key={pageRoute.path} path={pageRoute.path} element={<pageRoute.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
