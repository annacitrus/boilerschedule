import Course from "./Course";
import { useState } from "react";

type CourseInfo = {
  name: string;
  credits: number;
  prereqs?: string[];
};

function ElectricalEngineering() {
  const courses: Record<string, CourseInfo> = {
    ENGR13100: { name: "Transforming Ideas To Innovation I", credits: 2 },
    ENGR13200: { name: "Transforming Ideas To Innovation II", credits: 2, prereqs: ["ENGR13100"] },
    "Written Communication": { name: "Written or Oral Communication", credits: 3 },
    CHM11510: { name: "General Chemistry I", credits: 3 },
    CHM11520: { name: "General Chemistry I - Laboratory", credits: 1 },
    MA16500: { name: "Analytic Geometry And Calculus I", credits: 4 },
    MA16600: { name: "Analytic Geometry And Calculus II", credits: 4, prereqs: ["MA16500"] },
    CS15900: { name: "C Programming", credits: 3 },
    PHYS27200: { name: "Electric And Magnetic Interactions", credits: 4, prereqs: ["MA16500", "MA16600"] },
    MA26100: { name: "Multivariate Calculus", credits: 4, prereqs: ["MA16500", "MA16600"] },
    ECE29401: { name: "ECE Sophomore Seminar", credits: 1 },
    ECE20001: { name: "Electrical Engineering Fundamentals I", credits: 3, prereqs: ["MA16500", "MA16600", "PHYS27200"] },
    ECE20007: { name: "Electrical Engineering Fundamentals I Lab", credits: 1, prereqs: ["ECE20001"] },
    ECE20875: { name: "Data Science Using Python", credits: 3 },
    ECE20002: { name: "Electrical Engineering Fundamentals II", credits: 3, prereqs: ["ECE20001"] },
    ECE20008: { name: "Electrical Engineering Fundamentals II Lab", credits: 1, prereqs: ["ECE20002"] },
    ECE26400: { name: "Advanced C Programming", credits: 3, prereqs: ["CS15900"] },
    ECE27000: { name: "Introduction To Digital System Design", credits: 4 },
    MA26200: { name: "Linear Algebra And Differential Equations", credits: 4, prereqs: ["MA16500", "MA16600", "MA26100"] },
    "General Education I": { name: "General Education I", credits: 3 },
    ECE30100: { name: "Signals And Systems", credits: 3, prereqs: ["ECE20001", "ECE20002", "MA26200"] },
    ECE39401: { name: "Communication & Collaboration", credits: 1, prereqs: ["ECE29401"] },
    "EE Area Selective": { name: "EE Area Selective", credits: 3 },
    "EE Advanced Lab": { name: "EE Advanced Lab", credits: 1 },
    "General Education II": { name: "General Education II", credits: 3 },
    "Science Selective": { name: "Science Selective", credits: 3 },
    ECE30200: { name: "Probabilistic Methods In ECE", credits: 3, prereqs: ["ECE30100", "MA26100"] },
    ECE30411: { name: "Electromagnetics I", credits: 3, prereqs: ["ECE20001", "ECE20002", "MA26100", "PHYS27200"] },
    MA26500: { name: "Linear Algebra (or Advanced Math Selective)", credits: 3, prereqs: ["MA16500", "MA16600"] },
    "General Education III": { name: "General Education III", credits: 3 },
    ECE49401: { name: "Professional Communication Capstone", credits: 1, prereqs: ["ECE39401"] },
    "Senior Design": { name: "Senior Design (ECE 47700 or 49022)", credits: 4, prereqs: ["ECE30100", "ECE30200", "ECE30411"] },
    "General Education IV": { name: "General Education IV", credits: 3 },
    "General Education V": { name: "General Education V", credits: 3 },
    "Complementary Selective": { name: "Complementary Selective", credits: 3 },
    "EE Selective": { name: "EE Selective", credits: 3 },
    "Engineering Breadth Selective": { name: "Engineering Breadth Selective", credits: 3 },
    "General Education VI": { name: "General Education VI", credits: 3 },
  };

  const EESem1 = ["ENGR13100", "Written Communication", "CHM11510", "CHM11520", "MA16500"];
  const EESem2 = ["ENGR13200", "Written Communication", "CS15900", "MA16600"];
  const EESem3 = ["ECE29401", "ECE20001", "ECE20007", "ECE20875", "PHYS27200", "MA26100"];
  const EESem4 = ["ECE20002", "ECE20008", "ECE26400", "ECE27000", "MA26200", "General Education I"];
  const EESem5 = ["ECE30100", "ECE39401", "EE Area Selective", "EE Advanced Lab", "General Education II", "Science Selective"];
  const EESem6 = ["ECE30200", "ECE30411", "MA26500", "EE Area Selective", "EE Advanced Lab", "General Education III"];
  const EESem7 = ["ECE49401", "Senior Design", "EE Area Selective", "General Education IV", "General Education V", "Complementary Selective"];
  const EESem8 = ["EE Selective", "EE Selective", "EE Advanced Lab", "Engineering Breadth Selective", "General Education VI"];

  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  const onMouseEnter = (courseCode: string) => setHoveredCourse(courseCode);
  const onMouseLeave = () => setHoveredCourse(null);

  const renderSemester = (title: string, semesterCourses: string[]) => (
    <div className="semester">
      <h2>{title}</h2>
      {semesterCourses.map((courseCode, index) => {
        const course = courses[courseCode];
        return (
          <Course
            key={courseCode + index}
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
      {renderSemester("Fall 1st Year", EESem1)}
      {renderSemester("Spring 1st Year", EESem2)}
      {renderSemester("Fall 2nd Year", EESem3)}
      {renderSemester("Spring 2nd Year", EESem4)}
      {renderSemester("Fall 3rd Year", EESem5)}
      {renderSemester("Spring 3rd Year", EESem6)}
      {renderSemester("Fall 4th Year", EESem7)}
      {renderSemester("Spring 4th Year", EESem8)}
    </div>
  );
}

export default ElectricalEngineering;
