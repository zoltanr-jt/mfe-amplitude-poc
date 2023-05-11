import * as React from 'react';

import NxWelcome from './nx-welcome';
import * as amplitude from '@amplitude/analytics-browser';

import { Link, Route, Routes } from 'react-router-dom';

const RemoteApp1 = React.lazy(() => import('remote-app1/Module'));

const RemoteApp2 = React.lazy(() => import('remote-app2/Module'));


amplitude.init('967b712e56d9a1b85b09e12ab140068e', undefined, { defaultTracking: { sessions: true, pageViews: true, formInteractions: true, fileDownloads: true }});


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
        <Route path="/" element={<NxWelcome title="host" />} />

        <Route path="/remote-app1" element={<RemoteApp1 />} />

        <Route path="/remote-app2" element={<RemoteApp2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
