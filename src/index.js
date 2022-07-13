import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { mStore } from './mobx/mstore';
import VComponent from './valtio/vusers';
import MComponent from './mobx//musers';
import RComponent from './react/rusers';
import SeparatorLine from './utils/SeparatorLine';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <SeparatorLine text={'with Valtio'} />
      <VComponent />
      <SeparatorLine text={'with Mobx'} />
      <MComponent store={mStore} />
      <SeparatorLine text={'with React useState'} />
      <RComponent />
    </App>
  </React.StrictMode>
);
