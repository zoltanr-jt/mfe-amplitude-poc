import * as React from 'react';

import { createInstance }  from '@amplitude/analytics-browser';

import { Link, Route, Routes } from 'react-router-dom';
import Button from "./button";

const RemoteApp1 = React.lazy(() => import('remote-app1/Module'));

const RemoteApp2 = React.lazy(() => import('remote-app2/Module'));


export const amp1 = createInstance();
amp1.init('37c46696968a81dd4193b5c2e5b5ad9', undefined, { defaultTracking: { sessions: true, pageViews: true, formInteractions: true, fileDownloads: true }});


export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/remote-app1">RemoteApp1</Link>
        </li>

        <li>
          <Link to="/remote-app2">RemoteApp2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Button  />} />

        <Route path="/remote-app1" element={<RemoteApp1 />} />

        <Route path="/remote-app2" element={<RemoteApp2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
