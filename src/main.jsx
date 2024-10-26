import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Nav } from './Navagation.jsx';
import { Home, About, Projects, Resume, Certification, Contact } from './App.jsx';
import { Footer } from './Footer.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/certification",
    element: <Certification />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: (
      <p>Page Not Found</p>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>,
);
