import React from 'react'
import App from './App'
import NotFoundPage from './Screen/NotFound'
import './index.css'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import News from './Screen/News'
import Absentee from './Screen/Absentee'
import CloudCam from './Screen/CloudCam'
import ConsentForms from './Screen/ConsentForms'
import Gallery from './Screen/Gallery'
import LeavePermission from './Screen/LeavePermission'
import LateNote from './Screen/LateNote'
import NotefromParent from './Screen/NotefromParent'
import Outbox from './Screen/Outbox'
import Pending from './Screen/Pending'
import PicturePermission from './Screen/PicturePermission'
import Shop from './Screen/Shop'
import StudentBlog from './Screen/StudentBlog'
const components = [{
  element: <Absentee name="Absentee" />,
  path: "/absentee",
  errorElement: <NotFoundPage />,
}, {
  element: <News name="News" />,
  path: "/news",
  errorElement: <NotFoundPage />,
}, {
  element: <App name="Notification" />,
  path: "/",
  errorElement: <NotFoundPage />,
}, {
  element: <CloudCam name="CloudCam" />,
  path: "/cloudCam",
  errorElement: <NotFoundPage />,
}, {
  element: <ConsentForms name="ConsentForms" />,
  path: "/consentForms",
  errorElement: <NotFoundPage />,
}, {
  element: <Gallery name="Gallery" />,
  path: "/gallery",
  errorElement: <NotFoundPage />,
}, {
  element: <LateNote name="LateNote" />,
  path: "/lateNote",
  errorElement: <NotFoundPage />,
}, {
  element: <LeavePermission name="LeavePermission" />,
  path: "/leavePermission",
  errorElement: <NotFoundPage />,
}, {
  element: <NotefromParent name="NotefromParent" />,
  path: "/notefromParent",
  errorElement: <NotFoundPage />,
}, {
  element: <StudentBlog name="StudentBlog" />,
  path: "/studentBlog",
  errorElement: <NotFoundPage />,
}, {
  element: <Outbox name="Outbox" />,
  path: "/outbox",
  errorElement: <NotFoundPage />,
}, {
  element: <Pending name="Pending" />,
  path: "/pending",
  errorElement: <NotFoundPage />,
}, {
  element: <LeavePermission name="LeavePermission" />,
  path: "/leavePermission",
  errorElement: <NotFoundPage />,
}, {
  element: <PicturePermission name="PicturePermission" />,
  path: "/picturePermission",
  errorElement: <NotFoundPage />,
}, {
  element: <Shop name="Shop" />,
  path: "/shop",
  errorElement: <NotFoundPage />,
},]
const router = createBrowserRouter(components,{ basename: "/CommunicatorDemo" });
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
