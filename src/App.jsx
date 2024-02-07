import { BrowserRouter } from "react-router-dom";
import  { AppRoutes } from "./routes";
import { Navbar } from "./Components/Navbar";
import { BaseLayout } from "./Layouts/BaseLayout";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <BaseLayout>
        <AppRoutes />
      </BaseLayout>
    </BrowserRouter>
  )
}

export { App };
