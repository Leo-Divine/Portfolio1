import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Nav } from './Navagation.jsx';
import { Home, About, Projects, Resume, Certification, Contact } from './App.jsx';
import { Footer } from './Footer.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/Portfolio1/",
    element: <Home />,
  },
  {
    path: "/Portfolio1/home",
    element: <Home />,
  },
  {
    path: "/Portfolio1/about",
    element: <About />,
  },
  {
    path: "/Portfolio1/projects",
    element: <Projects />,
  },
  {
    path: "/Portfolio1/resume",
    element: <Resume />,
  },
  {
    path: "/Portfolio1/certification",
    element: <Certification />,
  },
  {
    path: "/Portfolio1/contact",
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
