import Routes from '../src/routes/Routes.js'
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  return <BrowserRouter>
       <Routes/>
      </BrowserRouter>
}

export default App;
