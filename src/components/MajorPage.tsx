import { MajorData } from "../data/types";
import Course from "./Course";
import { useState } from "react";

function MajorPage({ data }: { data: MajorData }) {
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  return (
    <div className="semesters-container">
      {data.semesters.map((sem) => (
        <div className="semester" key={sem.label}>
          <h2>{sem.label}</h2>
          {sem.courses.map((code, index) => {
            const course = data.courses[code];
            return (
              <Course
                key={code + index}
                courseCode={code}
                courseName={course.name}
                credits={course.credits}
                prereqs={course.prereqs}
                hoveredCourse={hoveredCourse}
                onMouseEnter={setHoveredCourse}
                onMouseLeave={() => setHoveredCourse(null)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default MajorPage;
