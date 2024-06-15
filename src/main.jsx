import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MiniDrawer from './App.jsx';
import  Dashboard  from './pages/dashboard/Dashboard.jsx';
import  Contacts  from './pages/contacts/Contacts.jsx';
import  Team  from './pages/team/Team.jsx';
import Invoices from './pages/invoices/Invoices.jsx';
import Calendar from './pages/calendar/Calendar.jsx';
import Faq from './pages/faq/Faq.jsx';
import Form from './pages/form/Form.jsx';
import Bar from './pages/bar-chart/Bar.jsx';
import Line from './pages/line-chart/Line.jsx';
import Pie from './pages/pie-chart/Pie.jsx';
import Geography from './pages/geograghy-chart/Geogrphy.jsx';
import NotFound from './pages/notFound/NotFound.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MiniDrawer />}>
      <Route index element={<Dashboard />} />
      <Route path='contacts' element={<Contacts />} />
      <Route path='invoices' element={<Invoices />} />
      <Route path='team' element={<Team />} />
      <Route path='calendar' element={<Calendar />} />
      <Route path='faq' element={<Faq />} />
      <Route path='form' element={<Form />} />
      <Route path='bar' element={<Bar />} />
      <Route path='line' element={<Line />} />
      <Route path='pie' element={<Pie />} />
      <Route path='geography' element={<Geography />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
