

import React from 'react';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './Redux/store'
import "../node_modules/video-react/dist/video-react.css"; // import css
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {action as projectAction} from "./Components/ActiveProject/ActiveProject";

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
  // {
  //   path: "/projects/:projectId",
  //   element: <App />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
    <RouterProvider router={router} />
  {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


