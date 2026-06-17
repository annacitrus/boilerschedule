import { useState } from "react";
import "./App.css";
import ScienceArtificalIntelligence from "./components/ScienceArtificalIntelligence";

function App() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <>
      <ScienceArtificalIntelligence />
    </>
  );
}

export default App;
