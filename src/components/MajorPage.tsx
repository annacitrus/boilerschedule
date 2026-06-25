import { MajorData } from "../data/types";
import Course from "./Course";
import { useState } from "react";

function MajorPage({ data }: { data: MajorData }) {
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="semesters-container">
      {data.semesters.map((sem) => (
        <div className="semester" key={sem.label}>
          <h2>{sem.label}</h2>
          {sem.courses.map((code, index) => {
            const course = data.courses[code];
            const uniqueId = sem.label + code + index;
            return (
              <Course
                key={uniqueId}
                id={uniqueId}
                courseCode={code}
                courseName={course.name}
                credits={course.credits}
                prereqs={course.prereqs}
                hoveredCourse={hoveredCourse}
                hoveredId={hoveredId}
                onMouseEnter={(code: string) => {
                  setHoveredCourse(code);
                  setHoveredId(uniqueId);
                }}
                onMouseLeave={() => {
                  setHoveredCourse(null);
                  setHoveredId(null);
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default MajorPage;
