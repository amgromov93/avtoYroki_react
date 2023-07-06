import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/style.module.scss';
import { 
  RouterProvider, 
  createBrowserRouter 
} from "react-router-dom";

import Home from './Home';
import QuestionsPage from './routes/QuestionsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/questions",
    element: <QuestionsPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);