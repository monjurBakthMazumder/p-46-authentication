import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AppliedJob from "../Pages/AppliedJob/AppliedJob";
import Blogs from "../Pages/Blogs/Blogs";
import JobDetails from "../Pages/JobDetails/JobDetails";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import Root from "../Root/Root";
import PrivateRoute from "./PrivateRoute";
const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '',
          element: <Home/>
        },
        {
          path: '/applied',
          element: <PrivateRoute><AppliedJob/></PrivateRoute> ,
        },
        {
          path: '/blogs',
          element: <PrivateRoute><Blogs/></PrivateRoute>,
        },
        {
          path: '/job/:id',
          element: <PrivateRoute><JobDetails/> </PrivateRoute>,
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path:'/registration',
          element: <Registration/>
        }
      ]
    },
  ]);

export default Route;