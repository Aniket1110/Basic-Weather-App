import Header from "./components/Header";
import Mysvg from './wave.svg'

const backgroundStyle = {
  backgroundImage: `url(${Mysvg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh'
};

function App() {
  return (
    <div className="App bg-dark" style={backgroundStyle}>
      <Header />
    </div>
  );
}

export default App;
