import { createBrowserRouter } from "react-router-dom";
import MailLayout from "./components/layout/main-layout";
import HomePage from "./pages/home";

export const router = createBrowserRouter(
[
  {
    path:"/",
    element:<MailLayout/>,
    children:[{
      index:true,
      element:<HomePage/>
    }]
  },
  
]
)