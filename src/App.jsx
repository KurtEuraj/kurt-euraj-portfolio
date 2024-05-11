import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import './App.scss';
import BlurryCircle from "./components/BlurryCircle/BlurryCircle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <BlurryCircle />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
