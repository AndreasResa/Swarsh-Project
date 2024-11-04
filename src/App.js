import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Home />
      <Header text="Header using pull" />
      <Footer text="Footer using" />
    </>
  );
};

export default App;
