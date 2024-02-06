import { BrowserRouter } from "react-router-dom";
import  { AppRoutes } from "./routes";
import { Navbar } from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
     <AppRoutes />
     <Navbar />
    </BrowserRouter>
  )
}

export { App };
