

import React from 'react';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/store'
import "../node_modules/video-react/dist/video-react.css"; // import css
// import {
//     BrowserRouter as Router,
// } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  {/* <Router> */}
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  {/* </Router>, */}
    </Provider>,
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


