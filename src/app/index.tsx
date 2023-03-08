import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import './index.scss';
import pages from 'pages';
import { withRoutes } from './providers';

function App() {
  return (
    <React.Fragment>
      {pages.map(({ path, component: Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </React.Fragment>
  );
}

export default withRoutes(App);
