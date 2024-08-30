import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Staff from "./pages/Staff";
import ErrorPage from "./pages/ErrorPage";
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/style.css'
import '../src/assets/js/all'
import { MyContextProvider } from "./context/context";
import Careers from "./pages/Careers";

function App() {

  const router = createBrowserRouter ([
    {
    path:"/",
    element:<Root />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:"/about",
        element:<About />  
      },
      {
        path:"/staff",
        element:<Staff />

      },
      {
        path:"/careers",
        element:<Careers />

      }
    ],
    errorElement:<ErrorPage />


    }
  ])
  return (
<>
<MyContextProvider>
  <RouterProvider router={router} />
</MyContextProvider>
   
</>


  );
}

export default App;
