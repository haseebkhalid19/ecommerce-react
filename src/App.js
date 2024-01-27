import { Outlet } from "react-router-dom";
import { Header, Footer } from "./Components";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
