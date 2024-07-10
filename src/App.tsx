import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { MyContext } from "./Components/Context";
import About from "./Components/About";
import withLoading from "./Components/WithLoading";
import { useState } from "react";

function App() {
  const [changeLanguage, setChangeLanguage] = useState<boolean>(false);
  return (
    <>
      <MyContext.Provider value={{ changeLanguage, setChangeLanguage }}>
        <Home />
        <About />
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default withLoading(App);
