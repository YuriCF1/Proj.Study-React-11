import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import { HookUseContext } from "./Components/HookUseContext";

//Hooks
// 8 - useContext

function App() {
  return (
    <div className="App">
      <HookUseContext>
        <h1>React Hooks</h1>
        
<BrowserRouter basename={process.env.PUBLIC_URL}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
