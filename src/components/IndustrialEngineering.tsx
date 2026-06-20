import Course from "./Course";
import { useState } from "react";

type CourseInfo = {
  name: string;
  credits: number;
  prereqs?: string[];
};

function IndustrialEngineering() {
  const courses: Record<string, CourseInfo> = {
    ENGR13100: { name: "Transforming Ideas To Innovation I", credits: 2 },
    ENGR13200: { name: "Transforming Ideas To Innovation II", credits: 2, prereqs: ["ENGR13100"] },
    "Written Communication": { name: "Written or Oral Communication", credits: 3 },
    CHM11510: { name: "General Chemistry I", credits: 3 },
    CHM11520: { name: "General Chemistry I - Laboratory", credits: 1 },
    MA16500: { name: "Analytic Geometry And Calculus I", credits: 4 },
    PHYS17200: { name: "Modern Mechanics", credits: 4, prereqs: ["MA16500"] },
    CS15900: { name: "C Programming", credits: 3 },
    MA16600: { name: "Analytic Geometry And Calculus II", credits: 4, prereqs: ["MA16500"] },
    MA26100: { name: "Multivariate Calculus", credits: 4, prereqs: ["MA16500", "MA16600"] },
    ME27000: { name: "Basic Mechanics I", credits: 3, prereqs: ["MA16500", "PHYS17200"] },
    IE20000: { name: "Industrial Engineering Seminar", credits: 0 },
    IE23000: { name: "Probability And Statistics In Engineering I", credits: 3, prereqs: ["MA16500", "MA16600"] },
    IE34300: { name: "Engineering Economics", credits: 3 },
    "General Education I": { name: "General Education I (HUM)", credits: 3 },
    IE33000: { name: "Probability And Statistics In Engineering II", credits: 3, prereqs: ["IE23000"] },
    MA26500: { name: "Linear Algebra", credits: 3, prereqs: ["MA16500", "MA16600"] },
    ME20000: { name: "Thermodynamics I", credits: 3, prereqs: ["MA16500", "MA16600", "PHYS17200"] },
    NUCL27300: { name: "Mechanics Of Materials", credits: 3, prereqs: ["ME27000"] },
    PHYS24100: { name: "Electricity And Optics", credits: 3, prereqs: ["MA16500", "MA16600", "PHYS17200"] },
    "General Education II": { name: "General Education II (BSS)", credits: 3 },
    IE33200: { name: "Computing In Industrial Engineering", credits: 3, prereqs: ["CS15900", "IE23000"] },
    IE33500: { name: "Operations Research - Optimization", credits: 3, prereqs: ["IE23000", "MA26500"] },
    IE33600: { name: "Operations Research - Stochastic Models", credits: 3, prereqs: ["IE33000", "IE33500"] },
    MA26600: { name: "Ordinary Differential Equations", credits: 3, prereqs: ["MA16500", "MA16600", "MA26100"] },
    "General Education III": { name: "General Education III", credits: 3 },
    ECE20001: { name: "Electrical Engineering Fundamentals I", credits: 3, prereqs: ["MA16500", "MA16600", "PHYS17200"] },
    IE37000: { name: "Manufacturing Processes I", credits: 3 },
    IE38300: { name: "Integrated Production Systems I", credits: 3, prereqs: ["IE37000", "IE33000"] },
    IE38600: { name: "Work Analysis And Design I", credits: 3 },
    "General Education IV": { name: "General Education IV", credits: 3 },
    IE47400: { name: "Industrial Control Systems", credits: 3, prereqs: ["ECE20001", "IE38600"] },
    IE48600: { name: "Work Analysis And Design II", credits: 3, prereqs: ["IE38600"] },
    "Technical Selective I": { name: "Technical Selective I", credits: 3 },
    "Technical Selective II": { name: "Technical Selective II", credits: 3 },
    "General Education V": { name: "General Education V", credits: 3 },
    IE43100: { name: "Industrial Engineering Design", credits: 3, prereqs: ["IE33500", "IE33600", "IE38300", "IE38600"] },
    "Technical Selective III": { name: "Technical Selective III", credits: 3 },
    "General Education VI": { name: "General Education VI", credits: 3 },
    "IE Selective I": { name: "IE Selective I", credits: 3 },
    "IE Selective II": { name: "IE Selective II", credits: 3 },
  };

  const IESem1 = ["ENGR13100", "Written Communication", "CHM11510", "CHM11520", "MA16500"];
  const IESem2 = ["ENGR13200", "Written Communication", "PHYS17200", "CS15900", "MA16600"];
  const IESem3 = ["MA26100", "ME27000", "IE20000", "IE23000", "IE34300", "General Education I"];
  const IESem4 = ["IE33000", "MA26500", "ME20000", "NUCL27300", "PHYS24100", "General Education II"];
  const IESem5 = ["IE33200", "IE33500", "IE33600", "MA26600", "General Education III"];
  const IESem6 = ["ECE20001", "IE37000", "IE38300", "IE38600", "General Education IV"];
  const IESem7 = ["IE47400", "IE48600", "Technical Selective I", "Technical Selective II", "General Education V"];
  const IESem8 = ["IE43100", "Technical Selective III", "General Education VI", "IE Selective I", "IE Selective II"];

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
      {renderSemester("Fall 1st Year", IESem1)}
      {renderSemester("Spring 1st Year", IESem2)}
      {renderSemester("Fall 2nd Year", IESem3)}
      {renderSemester("Spring 2nd Year", IESem4)}
      {renderSemester("Fall 3rd Year", IESem5)}
      {renderSemester("Spring 3rd Year", IESem6)}
      {renderSemester("Fall 4th Year", IESem7)}
      {renderSemester("Spring 4th Year", IESem8)}
    </div>
  );
}

export default IndustrialEngineering;
