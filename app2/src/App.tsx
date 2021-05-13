import React from 'react';

//@ts-ignore
const HeaderApp1 = React.lazy(() => import('app1/Header'));

export default () => (
  <div style={{ margin: '20px' }}>
    <React.Suspense fallback="Loading header...">
      <div>APP-2</div>
      <HeaderApp1 />
    </React.Suspense>
  </div>
);
