import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Packages from "./components/Packages";
import SearchComponent from "./components/SearchComponent";
import CaDetails from "./components/CaDetails";

function App() {
  return (
    <Router>
      <div className="bg-custom-gradient h-screen w-screen overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchComponent />} />
          <Route path="/ca-details/:caName" element={<CaDetails/>}/>
        </Routes>
        <Packages />
      </div>
    </Router>
  );
}

export default App;
