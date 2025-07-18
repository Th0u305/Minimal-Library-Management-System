import { Outlet } from "react-router";
import { Navbar } from "./components/layout/navbar";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;