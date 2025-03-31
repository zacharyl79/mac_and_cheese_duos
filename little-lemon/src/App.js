import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
