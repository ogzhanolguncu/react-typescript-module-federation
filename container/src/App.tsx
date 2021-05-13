import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

//@ts-ignore
const CounterAppOne = React.lazy(() => import('app1/CounterAppOne'));
//@ts-ignore
const CounterAppTwo = React.lazy(() => import('app2/CounterAppTwo'));

export default () => (
  <div style={{ margin: '20px' }}>
    <React.Suspense fallback="Loading header...">
      <div
        style={{
          border: '1px dashed black',
          height: '50vh',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1>CONTAINER</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <div
            style={{
              marginRight: '2rem',
              padding: '2rem',
              border: '1px dashed black',
            }}
          >
            <h2>APP-1</h2>
            <CounterAppOne />
          </div>
          <div style={{ border: '1px dashed black', padding: '2rem' }}>
            <h2>APP-2</h2>
            <CounterAppTwo />
          </div>
        </div>
      </div>
    </React.Suspense>
  </div>
);
