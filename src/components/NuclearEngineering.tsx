import Course from "./Course";
import { useState } from "react";

type CourseInfo = {
  name: string;
  credits: number;
  prereqs?: string[];
};

function NuclearEngineering() {
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
    ME20000: { name: "Thermodynamics I", credits: 3, prereqs: ["MA16500", "MA16600", "PHYS17200"] },
    ME27000: { name: "Basic Mechanics I", credits: 3, prereqs: ["MA16500", "PHYS17200"] },
    NUCL20000: { name: "Introduction to Nuclear Engineering", credits: 3, prereqs: ["MA16500", "CHM11510"] },
    NUCL29800: { name: "Sophomore Seminar", credits: 0 },
    "General Education I": { name: "General Education I (HUM)", credits: 3 },
    MA26600: { name: "Ordinary Differential Equations", credits: 3, prereqs: ["MA16500", "MA16600", "MA26100"] },
    ME27400: { name: "Basic Mechanics II", credits: 3, prereqs: ["ME27000"] },
    NUCL20500: { name: "Nuclear Engineering Undergraduate Laboratory I", credits: 2, prereqs: ["NUCL20000"] },
    NUCL27300: { name: "Mechanics Of Materials", credits: 3, prereqs: ["ME27000"] },
    PHYS24100: { name: "Electricity And Optics", credits: 3, prereqs: ["MA16500", "MA16600", "PHYS17200"] },
    "General Education II": { name: "General Education II (BSS)", credits: 3 },
    MA26500: { name: "Linear Algebra", credits: 3, prereqs: ["MA16500", "MA16600"] },
    NUCL30000: { name: "Nuclear Structure And Radiation Interactions", credits: 3, prereqs: ["NUCL20000", "MA26100", "PHYS17200"] },
    NUCL32000: { name: "Introduction To Materials For Nuclear Applications", credits: 3, prereqs: ["NUCL20000", "NUCL27300"] },
    NUCL32500: { name: "Nuclear Materials Laboratory", credits: 3, prereqs: ["NUCL32000"] },
    NUCL35000: { name: "Nuclear Thermal-Hydraulics I", credits: 3, prereqs: ["NUCL20000", "ME20000", "MA26600"] },
    NUCL39800: { name: "Junior Seminar", credits: 0, prereqs: ["NUCL29800"] },
    "General Education III": { name: "General Education III", credits: 3 },
    ECE20001: { name: "Electrical Engineering Fundamentals I", credits: 3, prereqs: ["MA16500", "MA16600", "PHYS17200"] },
    NUCL31000: { name: "Introduction To Neutron Physics", credits: 3, prereqs: ["NUCL30000", "MA26500"] },
    NUCL35100: { name: "Nuclear Thermal-Hydraulics II", credits: 3, prereqs: ["NUCL35000"] },
    NUCL35500: { name: "Nuclear Thermohydraulics Laboratory", credits: 3, prereqs: ["NUCL35100"] },
    "MA Selective": { name: "Math Selective", credits: 3, prereqs: ["MA26100", "MA26600"] },
    NUCL30500: { name: "Nuclear Engineering Undergraduate Laboratory II", credits: 2, prereqs: ["NUCL30000"] },
    NUCL40200: { name: "Engineering Of Nuclear Power Systems", credits: 3, prereqs: ["NUCL30000", "NUCL35000"] },
    NUCL41000: { name: "Introduction To Reactor Theory And Applications", credits: 3, prereqs: ["NUCL31000", "MA26500"] },
    NUCL44900: { name: "Senior Design Proposal", credits: 1, prereqs: ["NUCL40200", "NUCL41000"] },
    NUCL49800: { name: "Senior Seminar", credits: 0, prereqs: ["NUCL39800"] },
    "Technical Selective I": { name: "Technical Selective I", credits: 3 },
    NUCL42001: { name: "Radiation Interaction With Materials And Applications (or NUCL 46000)", credits: 3, prereqs: ["NUCL32000", "NUCL30000"] },
    NUCL45000: { name: "Design In Nuclear Engineering", credits: 3, prereqs: ["NUCL44900"] },
    "Technical Selective II": { name: "Technical Selective II", credits: 3 },
    "Technical Selective III": { name: "Technical Selective III", credits: 3 },
    "Technical Selective IV": { name: "Technical Selective IV", credits: 3 },
    "General Education IV": { name: "General Education IV", credits: 3 },
  };

  const NESem1 = ["ENGR13100", "Written Communication", "CHM11510", "CHM11520", "MA16500"];
  const NESem2 = ["ENGR13200", "Written Communication", "PHYS17200", "CS15900", "MA16600"];
  const NESem3 = ["MA26100", "ME20000", "ME27000", "NUCL20000", "NUCL29800", "General Education I"];
  const NESem4 = ["MA26600", "ME27400", "NUCL20500", "NUCL27300", "NUCL29800", "PHYS24100", "General Education II"];
  const NESem5 = ["MA26500", "NUCL30000", "NUCL32000", "NUCL32500", "NUCL35000", "NUCL39800", "General Education III"];
  const NESem6 = ["ECE20001", "NUCL31000", "NUCL35100", "NUCL35500", "NUCL39800", "MA Selective"];
  const NESem7 = ["NUCL30500", "NUCL40200", "NUCL41000", "NUCL44900", "NUCL49800", "Technical Selective I", "NUCL42001"];
  const NESem8 = ["NUCL45000", "Technical Selective II", "Technical Selective III", "Technical Selective IV", "NUCL49800", "General Education IV"];

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
      {renderSemester("Fall 1st Year", NESem1)}
      {renderSemester("Spring 1st Year", NESem2)}
      {renderSemester("Fall 2nd Year", NESem3)}
      {renderSemester("Spring 2nd Year", NESem4)}
      {renderSemester("Fall 3rd Year", NESem5)}
      {renderSemester("Spring 3rd Year", NESem6)}
      {renderSemester("Fall 4th Year", NESem7)}
      {renderSemester("Spring 4th Year", NESem8)}
    </div>
  );
}

export default NuclearEngineering;
