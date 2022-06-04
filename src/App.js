import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import { Home } from './home/Home';
import i18n from'./i18n'
import "swiper/css/bundle";
function App() {
  return (
    <BrowserRouter className="App">
      <Home/>
    </BrowserRouter>
  );
}

export default App;
