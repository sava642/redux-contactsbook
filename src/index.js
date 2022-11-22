import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { Provider } from 'react-redux';
import { store, persistor } from "./components/redux/store";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='redux-contactsbook'>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

