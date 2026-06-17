import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ScienceArtificalIntelligence from "./components/ScienceArtificalIntelligence";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Link to="/science-artifical-intelligence">
            <button>ScienceArtificalIntelligence</button>
          </Link>
        }
      />
      
      
      <Route
        path="/science-artifical-intelligence"
        element={<ScienceArtificalIntelligence />}
      />
      <Route
      path = "/data-science"
      element={<DataScience />}
    </Routes>
  );
}

export default App;
