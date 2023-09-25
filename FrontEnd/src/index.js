import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {NextUIProvider} from "@nextui-org/react";
import {Provider} from 'react-redux'
import Store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  <NextUIProvider>
      <App />
    </NextUIProvider>
    </Provider>

);


