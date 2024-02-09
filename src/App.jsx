import { BrowserRouter } from "react-router-dom";
import  { AppRoutes } from "./routes";
import { Navbar } from "./Components/Navbar";
import { BaseLayout } from "./Layouts/BaseLayout";
import { ShoppinCartProvider } from "./Context";

const App = () => {
  return (
    <ShoppinCartProvider>
      <BrowserRouter>
        <Navbar />
        <BaseLayout>
          <AppRoutes />
        </BaseLayout>
      </BrowserRouter>
    </ShoppinCartProvider>
  )
}

export { App };
