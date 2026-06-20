import Course from "../components/Course";
import { useState } from "react";

type CourseInfo = {
  name: string;
  credits: number;
  prereqs?: string[];
};

function CivilEngineering() {
  const courses: Record<string, CourseInfo> = {
    "Intro to Engineering I": { name: "Intro to Engineering I", credits: 2 },
    "Written Communication": { name: "Written Communication", credits: 3 },
    CHM11510: { name: "General Chemistry I", credits: 3 },
    CHM11520: { name: "General Chemistry I - Laboratory", credits: 1, prereqs: ["CHM11510"] },
    MA16100: { name: "Plane Analytic Geometry And Calculus I", credits: 5 },
    "Intro to Engineering II": { name: "Intro to Engineering II", credits: 2 },
    "Oral Communication": { name: "Oral Communication", credits: 3 },
    PHYS17200: { name: "Modern Mechanics", credits: 4 },
    CS15900: { name: "C Programming", credits: 3 },
    MA16200: { name: "Plane Analytic Geometry And Calculus II", credits: 5, prereqs: ["MA16100"] },
    MA26100: { name: "Multivariate Calculus", credits: 4, prereqs: ["MA16100", "MA16200"] },
    PHYS24100: { name: "Electricity And Optics", credits: 3, prereqs: ["PHYS17200", "MA16100"] },
    CCE29700: { name: "Basic Mechanics I (Statics)", credits: 3, prereqs: ["MA16100", "PHYS17200"] },
    CCE20300: { name: "Principles And Practice Of Geomatics", credits: 4 },
    CM16400: { name: "Construction Graphics And Digital Documentation", credits: 2 },
    CCE29200: { name: "Contemporary Issues In Civil Engineering", credits: 2 },
    MA26500: { name: "Linear Algebra", credits: 3, prereqs: ["MA26100"] },
    CCE21100: { name: "Thermal And Energy Sciences", credits: 3, prereqs: ["MA16100", "CHM11510"] },
    CCE27000: { name: "Introductory Structural Mechanics", credits: 4, prereqs: ["CCE29700"] },
    CCE29800: { name: "Basic Mechanics II Dynamics", credits: 3, prereqs: ["CCE29700"] },
    "General Education I": { name: "General Education I", credits: 3 },
    MA26600: { name: "Ordinary Differential Equations", credits: 3, prereqs: ["MA26100"] },
    CCE33500: { name: "Civil Engineering Materials", credits: 4, prereqs: ["CCE27000"] },
    CCE34000: { name: "Hydraulics", credits: 3, prereqs: ["MA26100", "CCE29700"] },
    CCE34300: { name: "Elementary Hydraulics Laboratory", credits: 1, prereqs: ["CCE34000"] },
    "Technical Selective I": { name: "Technical Selective", credits: 3 },
    "General Education II": { name: "General Education II", credits: 3 },
    STAT51100: { name: "Statistical Methods", credits: 3, prereqs: ["MA16200"] },
    CCE39800: { name: "Introduction To Civil Engineering Systems Design", credits: 3, prereqs: ["CCE27000", "CCE34000"] },
    CCE39200: { name: "Technical Communication In Civil Engineering", credits: 2, prereqs: ["CCE39800"] },
    "Technical Selective II": { name: "Technical Selective", credits: 3 },
    "Technical Selective III": { name: "Technical Selective", credits: 3 },
    "Technical Selective IV": { name: "Technical Selective", credits: 3 },
    "Technical Selective V": { name: "Technical Selective", credits: 3 },
    "Technical Selective VI": { name: "Technical Selective", credits: 3 },
    "Technical Selective VII": { name: "Technical Selective", credits: 3 },
    "General Education III": { name: "General Education III", credits: 3 },
    "General Education IV": { name: "General Education IV", credits: 3 },
    CCE49800: { name: "Civil Engineering Design Project", credits: 3, prereqs: ["CCE39800"] },
    "Technical Selective VIII": { name: "Technical Selective", credits: 3 },
    "Technical Selective IX": { name: "Technical Selective", credits: 3 },
    "Technical Selective X": { name: "Technical Selective", credits: 3 },
    "General Education V": { name: "General Education V", credits: 3 },
  };

  const CivilEngineeringSem1 = [
    "Intro to Engineering I",
    "Written Communication",
    "CHM11510",
    "CHM11520",
    "MA16100",
  ];
  const CivilEngineeringSem2 = [
    "Intro to Engineering II",
    "Oral Communication",
    "PHYS17200",
    "CS15900",
    "MA16200",
  ];
  const CivilEngineeringSem3 = [
    "MA26100",
    "PHYS24100",
    "CCE29700",
    "CCE20300",
    "CM16400",
    "CCE29200",
  ];
  const CivilEngineeringSem4 = [
    "MA26500",
    "CCE21100",
    "CCE27000",
    "CCE29800",
    "General Education I",
  ];
  const CivilEngineeringSem5 = [
    "MA26600",
    "CCE33500",
    "CCE34000",
    "CCE34300",
    "Technical Selective I",
    "General Education II",
  ];
  const CivilEngineeringSem6 = [
    "STAT51100",
    "CCE39800",
    "CCE39200",
    "Technical Selective II",
    "Technical Selective III",
    "Technical Selective IV",
  ];
  const CivilEngineeringSem7 = [
    "Technical Selective V",
    "Technical Selective VI",
    "Technical Selective VII",
    "General Education III",
    "General Education IV",
  ];
  const CivilEngineeringSem8 = [
    "CCE49800",
    "Technical Selective VIII",
    "Technical Selective IX",
    "Technical Selective X",
    "General Education V",
  ];

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
      {renderSemester("Fall 1st Year", CivilEngineeringSem1)}
      {renderSemester("Spring 1st Year", CivilEngineeringSem2)}
      {renderSemester("Fall 2nd Year", CivilEngineeringSem3)}
      {renderSemester("Spring 2nd Year", CivilEngineeringSem4)}
      {renderSemester("Fall 3rd Year", CivilEngineeringSem5)}
      {renderSemester("Spring 3rd Year", CivilEngineeringSem6)}
      {renderSemester("Fall 4th Year", CivilEngineeringSem7)}
      {renderSemester("Spring 4th Year", CivilEngineeringSem8)}
    </div>
  );
}

export default CivilEngineering;
