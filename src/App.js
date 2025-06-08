import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Service from "./components/service";
import EchoLayout from "./layout/EchoLayout";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EchoLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="*" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
