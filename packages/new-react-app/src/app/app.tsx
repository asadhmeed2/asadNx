// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';
import { Landing } from '../modules/landing';
import { Home } from '../modules/home';

export function App() {
  return (
    <div>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={<Landing />}
        />
        <Route
          path="/Home"
          element={
            <Home />
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
