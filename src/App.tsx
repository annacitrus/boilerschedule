import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ScienceArtificalIntelligence from "./components/ScienceArtificalIntelligence";
import DataScience from "./components/DataScience";
import Aerospace from "./components/Aerospace";
import ComputerEngineering from "./components/ComputerEngineering";
import MechanicalEngineering from "./components/MechanicalEngineering";
import BiomedicalEngineering from "./components/BiomedicalEngineering";
import CivilEngineering from "./components/CivilEngineering";
import ChemicalEngineering from "./components/ChemicalEngineering";
import ElectricalEngineering from "./components/ElectricalEngineering";
import EnvironmentalEngineering from "./components/EnvironmentalEngineering";
import IndustrialEngineering from "./components/IndustrialEngineering";
import MaterialsEngineering from "./components/MaterialsEngineering";
import NuclearEngineering from "./components/NuclearEngineering";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
          <h1> College of Science</h1>
          <div className="majors-container">
            <Link to="/data-science">
              <button className="major">Data Science</button>
            </Link>
            <Link to="/science-artifical-intelligence">
              <button className="major">Artifical Intelligence (College of Science)</button>
            </Link>
            </div>
            <h1> College of Engineering</h1>
            <div className="majors-container">
            <Link to="/aerospace">
              <button className="major">Aerospace Engineering</button>
            </Link>
            <Link to="/computer-engineering">
              <button className="major">Computer Engineering</button>
            </Link>
            <Link to="/mechanical-engineering">
              <button className="major">Mechanical Engineering</button>
            </Link>
            <Link to="/biomedical-engineering">
              <button className="major">Biomedical Engineering</button>
            </Link>
            <Link to="/civil-engineering">
              <button className="major">Civil Engineering</button>
            </Link>
            <Link to="/chemical-engineering">
              <button className="major">Chemical Engineering</button>
            </Link>
            <Link to="/electrical-engineering">
              <button className="major">Electrical Engineering</button>
            </Link>
            <Link to="/environmental-engineering">
              <button className="major">Environmental Engineering</button>
            </Link>
            <Link to="/industrial-engineering">
              <button className="major">Industrial Engineering</button>
            </Link>
            <Link to="/materials-engineering">
              <button className="major">Materials Engineering</button>
            </Link>
            <Link to="/nuclear-engineering">
              <button className="major">Nuclear Engineering</button>
            </Link>
          </div>
          </>
        }
      />

      <Route
        path="/science-artifical-intelligence"
        element={<ScienceArtificalIntelligence />}
      />
      <Route path="/data-science" element={<DataScience />} />
      <Route path="/aerospace" element={<Aerospace />} />
      <Route path="/computer-engineering" element={<ComputerEngineering />} />
      <Route path="/mechanical-engineering" element={<MechanicalEngineering />} />
      <Route path="/biomedical-engineering" element={<BiomedicalEngineering />} />
      <Route path="/civil-engineering" element={<CivilEngineering />} />
      <Route path="/chemical-engineering" element={<ChemicalEngineering />} />
      <Route path="/electrical-engineering" element={<ElectricalEngineering />} />
      <Route path="/environmental-engineering" element={<EnvironmentalEngineering />} />
      <Route path="/industrial-engineering" element={<IndustrialEngineering />} />
      <Route path="/materials-engineering" element={<MaterialsEngineering />} />
      <Route path="/nuclear-engineering" element={<NuclearEngineering />} />
    </Routes>
  );
}

export default App;
