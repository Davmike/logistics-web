import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { MyContext } from "./Components/Context";

function App() {
  return (
    <>
      <MyContext.Provider value={{}}>
        <Header />
        <Home />
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default App;
