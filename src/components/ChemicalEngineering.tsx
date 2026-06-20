import Course from "../components/Course";
import { useState } from "react";

type CourseInfo = {
  name: string;
  credits: number;
  prereqs?: string[];
};

function ChemicalEngineering() {
  const courses: Record<string, CourseInfo> = {
    "Intro to Engineering I": { name: "Intro to Engineering I", credits: 2 },
    "Written Communication": { name: "Written Communication", credits: 3 },
    CHM11510: { name: "General Chemistry I", credits: 3 },
    CHM11520: { name: "General Chemistry I - Laboratory", credits: 1, prereqs: ["CHM11510"] },
    MA16100: { name: "Plane Analytic Geometry And Calculus I", credits: 5 },
    "Intro to Engineering II": { name: "Intro to Engineering II", credits: 2 },
    "Oral Communication": { name: "Oral Communication", credits: 3 },
    PHYS17200: { name: "Modern Mechanics", credits: 4 },
    CHM11610: { name: "General Chemistry II", credits: 3, prereqs: ["CHM11510"] },
    CHM11620: { name: "General Chemistry II - Laboratory", credits: 1, prereqs: ["CHM11610"] },
    MA16200: { name: "Plane Analytic Geometry And Calculus II", credits: 5, prereqs: ["MA16100"] },
    CHE20000: { name: "Chemical Engineering Seminar", credits: 1 },
    CHE20500: { name: "Chemical Engineering Calculations", credits: 4, prereqs: ["CHM11510", "MA16100"] },
    CHM26100: { name: "Organic Chemistry I", credits: 3, prereqs: ["CHM11510", "CHM11520"] },
    CHM26300: { name: "Organic Chemistry Laboratory I", credits: 1, prereqs: ["CHM26100"] },
    MA26100: { name: "Multivariate Calculus", credits: 4, prereqs: ["MA16100", "MA16200"] },
    PHYS24100: { name: "Electricity And Optics", credits: 3, prereqs: ["PHYS17200", "MA16100"] },
    CHE21100: { name: "Introductory Chemical Engineering Thermodynamics", credits: 4, prereqs: ["CHE20500", "MA16100"] },
    CHE32000: { name: "Statistical Modeling And Quality Enhancement", credits: 3, prereqs: ["CHE20500"] },
    CHM26200: { name: "Organic Chemistry II", credits: 3, prereqs: ["CHM26100", "CHM26300"] },
    CHM26400: { name: "Organic Chemistry Laboratory II", credits: 1, prereqs: ["CHM26200"] },
    "Math Selective I": { name: "Math Selective", credits: 3 },
    "General Education I": { name: "General Education I", credits: 3 },
    CHE30600: { name: "Design Of Staged Separation Processes", credits: 3, prereqs: ["CHE21100", "CHE20500"] },
    CHE37700: { name: "Momentum Transfer", credits: 4, prereqs: ["CHE21100", "MA26100"] },
    CHM37000: { name: "Topics In Physical Chemistry", credits: 3, prereqs: ["CHM26100", "CHM26200"] },
    "Math Selective II": { name: "Math Selective", credits: 3 },
    "Biology Selective": { name: "Biology Selective", credits: 3 },
    CHE30000: { name: "Chemical Engineering Seminar", credits: 1, prereqs: ["CHE20000"] },
    CHE37800: { name: "Heat And Mass Transfer", credits: 4, prereqs: ["CHE37700"] },
    CHE34800: { name: "Chemical Reaction Engineering", credits: 4, prereqs: ["CHE30600", "CHE37700"] },
    "Engineering Selective I": { name: "Engineering Selective", credits: 3 },
    "Technical Selective": { name: "Technical Selective", credits: 3 },
    "General Education II": { name: "General Education II", credits: 3 },
    CHE40000: { name: "Chemical Engineering Seminar", credits: 1, prereqs: ["CHE30000"] },
    CHE42000: { name: "Process Safety Management And Analysis", credits: 3, prereqs: ["CHE37700", "CHE37800"] },
    CHE43500: { name: "Chemical Engineering Laboratory", credits: 4, prereqs: ["CHE37800", "CHE34800"] },
    CHE45600: { name: "Process Dynamics And Control", credits: 3, prereqs: ["CHE37800", "CHE34800"] },
    "General Education III": { name: "General Education III", credits: 3 },
    "General Education IV": { name: "General Education IV", credits: 3 },
    CHE45000: { name: "Design And Analysis Of Processing Systems", credits: 4, prereqs: ["CHE43500", "CHE45600"] },
    "CHE Selective": { name: "Chemical Engineering Selective", credits: 3 },
    "Engineering Selective II": { name: "Engineering Selective", credits: 3 },
    "General Education V": { name: "General Education V", credits: 3 },
    "General Education VI": { name: "General Education VI", credits: 3 },
  };

  const ChemicalEngineeringSem1 = [
    "Intro to Engineering I",
    "Written Communication",
    "CHM11510",
    "CHM11520",
    "MA16100",
  ];
  const ChemicalEngineeringSem2 = [
    "Intro to Engineering II",
    "Oral Communication",
    "PHYS17200",
    "CHM11610",
    "CHM11620",
    "MA16200",
  ];
  const ChemicalEngineeringSem3 = [
    "CHE20000",
    "CHE20500",
    "CHM26100",
    "CHM26300",
    "MA26100",
    "PHYS24100",
  ];
  const ChemicalEngineeringSem4 = [
    "CHE21100",
    "CHE32000",
    "CHM26200",
    "CHM26400",
    "Math Selective I",
    "General Education I",
  ];
  const ChemicalEngineeringSem5 = [
    "CHE30600",
    "CHE37700",
    "CHM37000",
    "Math Selective II",
    "Biology Selective",
  ];
  const ChemicalEngineeringSem6 = [
    "CHE30000",
    "CHE37800",
    "CHE34800",
    "Engineering Selective I",
    "Technical Selective",
    "General Education II",
  ];
  const ChemicalEngineeringSem7 = [
    "CHE40000",
    "CHE42000",
    "CHE43500",
    "CHE45600",
    "General Education III",
    "General Education IV",
  ];
  const ChemicalEngineeringSem8 = [
    "CHE45000",
    "CHE Selective",
    "Engineering Selective II",
    "General Education V",
    "General Education VI",
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
      {renderSemester("Fall 1st Year", ChemicalEngineeringSem1)}
      {renderSemester("Spring 1st Year", ChemicalEngineeringSem2)}
      {renderSemester("Fall 2nd Year", ChemicalEngineeringSem3)}
      {renderSemester("Spring 2nd Year", ChemicalEngineeringSem4)}
      {renderSemester("Fall 3rd Year", ChemicalEngineeringSem5)}
      {renderSemester("Spring 3rd Year", ChemicalEngineeringSem6)}
      {renderSemester("Fall 4th Year", ChemicalEngineeringSem7)}
      {renderSemester("Spring 4th Year", ChemicalEngineeringSem8)}
    </div>
  );
}

export default ChemicalEngineering;
