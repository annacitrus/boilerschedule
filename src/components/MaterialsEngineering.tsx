import Course from "./Course";
import { useState } from "react";

type CourseInfo = {
  name: string;
  credits: number;
  prereqs?: string[];
};

function MaterialsEngineering() {
  const courses: Record<string, CourseInfo> = {
    ENGR13100: { name: "Transforming Ideas To Innovation I", credits: 2 },
    ENGR13200: { name: "Transforming Ideas To Innovation II", credits: 2, prereqs: ["ENGR13100"] },
    "Written Communication": { name: "Written or Oral Communication", credits: 3 },
    CHM11510: { name: "General Chemistry I", credits: 3 },
    CHM11520: { name: "General Chemistry I - Laboratory", credits: 1 },
    MA16500: { name: "Analytic Geometry And Calculus I", credits: 4 },
    PHYS17200: { name: "Modern Mechanics", credits: 4, prereqs: ["MA16500"] },
    CHM11610: { name: "General Chemistry II", credits: 3, prereqs: ["CHM11510"] },
    CHM11620: { name: "General Chemistry II - Laboratory", credits: 1, prereqs: ["CHM11610"] },
    MA16600: { name: "Analytic Geometry And Calculus II", credits: 4, prereqs: ["MA16500"] },
    MA26100: { name: "Multivariate Calculus", credits: 4, prereqs: ["MA16500", "MA16600"] },
    MSE23000: { name: "Structure And Properties Of Materials", credits: 3, prereqs: ["CHM11510", "PHYS17200"] },
    MSE27000: { name: "Atomistic Materials Science", credits: 3, prereqs: ["CHM11610", "MA16600"] },
    MSE25000: { name: "Physical Properties In Engineering Systems", credits: 3, prereqs: ["MA16500", "PHYS17200"] },
    MSE39000: { name: "Materials Engineering Seminar", credits: 0 },
    MA26500: { name: "Linear Algebra", credits: 3, prereqs: ["MA16500", "MA16600"] },
    MSE23500: { name: "Second Year Materials Engineering Laboratory", credits: 3, prereqs: ["MSE23000"] },
    MSE26000: { name: "Thermodynamics Of Materials", credits: 3, prereqs: ["CHM11610", "MA16600", "PHYS17200"] },
    MA26600: { name: "Ordinary Differential Equations", credits: 3, prereqs: ["MA16500", "MA16600", "MA26100"] },
    PHYS27200: { name: "Electric And Magnetic Interactions", credits: 4, prereqs: ["MA16500", "MA16600", "PHYS17200"] },
    "General Education I": { name: "General Education I (HUM)", credits: 3 },
    MSE33500: { name: "Third Year Materials Engineering Laboratory", credits: 3, prereqs: ["MSE23500"] },
    MSE34000: { name: "Transport Phenomena", credits: 3, prereqs: ["MSE26000", "MA26600"] },
    MSE37000: { name: "Electrical, Optical, And Magnetic Properties Of Materials", credits: 3, prereqs: ["MSE23000", "PHYS27200"] },
    MSE39100: { name: "Materials Engineering Seminar II", credits: 1, prereqs: ["MSE39000"] },
    MSE42000: { name: "Structure And Properties Of Organic Materials", credits: 3, prereqs: ["CHM11610", "MSE23000"] },
    "General Education II": { name: "General Education II (BSS)", credits: 3 },
    MSE33000: { name: "Processing And Properties Of Materials", credits: 3, prereqs: ["MSE23000", "MSE26000"] },
    MSE38200: { name: "Mechanical Response Of Materials", credits: 3, prereqs: ["MSE23000", "MSE27000"] },
    "General Education III": { name: "General Education III", credits: 3 },
    "Technical Selective I": { name: "Technical Selective I", credits: 3 },
    "Technical Selective II": { name: "Technical Selective II", credits: 3 },
    MSE43000: { name: "Materials Processing And Design I", credits: 3, prereqs: ["MSE33000", "MSE38200"] },
    MSE44500: { name: "Materials Engineering Systems Analysis And Design", credits: 3, prereqs: ["MSE33000", "MSE38200"] },
    "General Education IV": { name: "General Education IV", credits: 3 },
    "Technical Selective III": { name: "Technical Selective III", credits: 3 },
    "Technical Selective IV": { name: "Technical Selective IV", credits: 3 },
    MSE44000: { name: "Materials Processing And Design II", credits: 3, prereqs: ["MSE43000"] },
    "General Education V": { name: "General Education V", credits: 3 },
    "General Education VI": { name: "General Education VI", credits: 3 },
    "Technical Selective V": { name: "Technical or Support Area Selective V", credits: 3 },
    "Technical Selective VI": { name: "Technical or Support Area Selective VI", credits: 3 },
    "Technical Selective VII": { name: "Technical or Support Area Selective VII", credits: 2 },
  };

  const MSESem1 = ["ENGR13100", "Written Communication", "CHM11510", "CHM11520", "MA16500"];
  const MSESem2 = ["ENGR13200", "Written Communication", "PHYS17200", "CHM11610", "CHM11620", "MA16600"];
  const MSESem3 = ["MA26100", "MSE23000", "MSE27000", "MSE25000", "MSE39000", "MA26500"];
  const MSESem4 = ["MSE23500", "MSE26000", "MA26600", "PHYS27200", "General Education I"];
  const MSESem5 = ["MSE33500", "MSE34000", "MSE37000", "MSE39100", "MSE42000", "General Education II"];
  const MSESem6 = ["MSE33000", "MSE38200", "General Education III", "Technical Selective I", "Technical Selective II"];
  const MSESem7 = ["MSE43000", "MSE44500", "General Education IV", "Technical Selective III", "Technical Selective IV"];
  const MSESem8 = ["MSE44000", "General Education V", "General Education VI", "Technical Selective V", "Technical Selective VI", "Technical Selective VII"];

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
      {renderSemester("Fall 1st Year", MSESem1)}
      {renderSemester("Spring 1st Year", MSESem2)}
      {renderSemester("Fall 2nd Year", MSESem3)}
      {renderSemester("Spring 2nd Year", MSESem4)}
      {renderSemester("Fall 3rd Year", MSESem5)}
      {renderSemester("Spring 3rd Year", MSESem6)}
      {renderSemester("Fall 4th Year", MSESem7)}
      {renderSemester("Spring 4th Year", MSESem8)}
    </div>
  );
}

export default MaterialsEngineering;
