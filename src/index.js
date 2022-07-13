import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { myStore, loader } from './mstore';

import VComponent from './vusers';
import MComponent from './musers';
import RComponent from './rusers';
import SeparatorLine from './SeparatorLine';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <SeparatorLine text={'with Valtio'} />
      <VComponent />
      <SeparatorLine text={'with Mobx'} />
      <MComponent store={myStore} loadState={loader} />
      <SeparatorLine text={'Pur React'} />
      <RComponent />
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
