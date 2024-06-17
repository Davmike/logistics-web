// import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { MyContext } from "./Components/Context";
import About from "./Components/About";

function App() {
  return (
    <>
      <MyContext.Provider value={{}}>
        {/* <Header /> */}
        <Home />
        <About />
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default App;
