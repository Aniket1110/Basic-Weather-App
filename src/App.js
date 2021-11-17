import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-dark">
      <Header />
      <WeatherInfo />
      <Footer/>
    </div>
  );
}

export default App;
