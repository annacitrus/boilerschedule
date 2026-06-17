import Course from "./Course";
import { useState } from "react";

type CourseInfo = {
  name: string;
  credits: number;
  prereqs?: string[];
};

function DataScience() {
  const courses: Record<string, CourseInfo> = {
    MA161: {
      name: "Calculus I (or MA 165)",
      credits: 5,
    },
    "AI Working Competency": { name: "AI Working Competency", credits: 0 },
    CS193: { name: "CS 193 (Recommended)", credits: 1 },
    CS180: {
      name: "Problem Solving and Object-Oriented Programming",
      credits: 4,
    },
    CS182: { name: "Foundations of Computer Science", credits: 3, prereqs: ["CS180"] },
    MA162: {
      name: "Calculus II (or MA 166)",
      credits: 5,
      prereqs: ["MA161"],
    },
    MA261: {
      name: "Multivariable Calculus",
      credits: 5,
      prereqs: ["MA161", "MA162"],
    },
    PHIL207: { name: "Ethics (or PHIL 208 or ILS 230)", credits: 3 },
    "Science Core Selection": { name: "", credits: 3 },
    CS253: {
      name: "Data Structures and Algorithms for DS/AI",
      credits: 3,
      prereqs: ["CS176", "CS180", "CS182", "MA161"],
    },
    MA265: {
      name: "Linear Algebra (or MA 351)",
      credits: 3,
      prereqs: ["MA161", "MA162"],
    },
    MA416: {
      name: "Probability (or STAT 416)",
      credits: 3,
      prereqs: ["MA162", "MA161", "MA261"],
    },
    PHIL221: {
      name: "Introduction To Philosophy of Science (or PHIL 322)",
      credits: 3,
    },
    CS373: {
      name: "Data Mining And Machine Learning",
      credits: 3,
      prereqs: ["CS182", "CS180", "CS253", "STAT350"],
    },
    CS381: {
      name: "Introduction To The Analysis Of Algorithms",
      credits: 3,
      prereqs: ["CS253", "CS180", "CS182", "MA161", "MA 162", "MA261"],
    },
    CS471: {
      name: "Introduction To Artificial Intelligence",
      credits: 3,
      prereqs: ["CS176", "CS180", "CS182", "MA161", "CS253"],
    },
    "AI Capstone Experience": { name: "", credits: 3 },
    "CS Selective": { name: "", credits: 3 },
    "Philosophy Selective": { name: "", credits: 3 },
    Elective: { name: "", credits: 3 },
  };

  const ArtificialIntelligenceSem1 = [
    "CS176",
    "PSY120",
    "MA161",
    "Science Core Selection",
    "AI Working Competency",
    "CS193",
  ];
  const ArtificialIntelligenceSem2 = ["CS180", "CS182", "MA162", "PSY200"];
  const ArtificialIntelligenceSem3 = [
    "CS243",
    "MA261",
    "STAT350",
    "PHIL207",
    "Science Core Selection",
  ];
  const ArtificialIntelligenceSem4 = [
    "CS253",
    "MA265",
    "MA416",
    "PHIL221",
    "Science Core Selection",
  ];
  const ArtificialIntelligenceSem5 = [
    "CS373",
    "CS Selective",
    "Philosophy Selective",
    "Science Core Selection",
    "Elective",
  ];
  const ArtificialIntelligenceSem6 = [
    "CS381",
    "Science Core Selection",
    "Science Core Selection",
    "Elective",
    "Elective",
  ];
  const ArtificialIntelligenceSem7 = [
    "CS471",
    "CS Selective",
    "Science Core Selection",
    "Science Core Selection",
    "Science Core Selection",
  ];
  const ArtificialIntelligenceSem8 = [
    "AI Capstone Experience",
    "CS Selective",
    "Science Core Selection",
    "Science Core Selection",
    "Elective",
  ];
  const relatedCourses: { [key: string]: string[] } = {
    CS243: ["CS373", "CS471"],
    "MA 161": ["MA162", "MA261", "MA265"],
  };

  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  const onMouseEnter = (courseCode: string) => {
    setHoveredCourse(courseCode);
  };

  const onMouseLeave = () => {
    setHoveredCourse(null);
  };

  const renderSemester = (title: string, semesterCourses: string[]) => (
    <div className="semester">
      <h2>{title}</h2>
      {semesterCourses.map((courseCode) => {
        const course = courses[courseCode];

        return (
          <Course
            key={courseCode}
            courseCode={courseCode}
            courseName={course.name}
            credits={course.credits}
            prereqs={course.prereqs}
            hoveredCourse={hoveredCourse}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        );
      })}
    </div>
  );

  return (
    <div className="semesters-container">
      {renderSemester("Semester 1", ArtificialIntelligenceSem1)}
      {renderSemester("Semester 2", ArtificialIntelligenceSem2)}
      {renderSemester("Semester 3", ArtificialIntelligenceSem3)}
      {renderSemester("Semester 4", ArtificialIntelligenceSem4)}
      {renderSemester("Semester 5", ArtificialIntelligenceSem5)}
      {renderSemester("Semester 6", ArtificialIntelligenceSem6)}
      {renderSemester("Semester 7", ArtificialIntelligenceSem7)}
      {renderSemester("Semester 8", ArtificialIntelligenceSem8)}
    </div>
  );
}

export default DataScience;
