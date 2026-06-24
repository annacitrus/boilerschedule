import { majors } from "./data/majors";
import MajorPage from "./components/MajorPage";
import { Routes, Route, Link } from "react-router-dom";

const colleges = [...new Set(majors.map(m => m.college))];

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          {colleges.map(college => (
            <div key={college}>
              <h1>{college}</h1>
              <div className="majors-container">
                {majors.filter(m => m.college === college).map(m => (
                  <Link key={m.path} to={`/${m.path}`}>
                    <button className="major">{m.label}</button>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </>
      } />
      {majors.map(m => (
        <Route key={m.path} path={`/${m.path}`} element={<MajorPage data={m.data} />} />
      ))}
    </Routes>
  );
}

export default App;

// engineering majors: https://engineering.purdue.edu/Engr/Academics/Undergraduate/majors


