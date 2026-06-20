import Course from "./Course";
import { useState } from "react";

type CourseInfo = {
  name: string;
  credits: number;
  prereqs?: string[];
};

function EnvironmentalEngineering() {
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
    EEE23000: { name: "Engineering Economics And Environment", credits: 3 },
    EEE29001: { name: "Introduction To EEE Seminar", credits: 2 },
    MA26100: { name: "Multivariate Calculus", credits: 4, prereqs: ["MA16500", "MA16600"] },
    CCE29700: { name: "Basic Mechanics I (Statics)", credits: 3, prereqs: ["MA16500", "PHYS17200"] },
    "Technical Selective I": { name: "Technical Selective I", credits: 3 },
    "General Education I": { name: "General Education I (HUM)", credits: 3 },
    EEE38000: { name: "Environmental Chemodynamics", credits: 3, prereqs: ["CHM11610", "MA16600"] },
    MA26200: { name: "Linear Algebra And Differential Equations", credits: 4, prereqs: ["MA16500", "MA16600", "MA26100"] },
    CCE29800: { name: "Basic Mechanics II (Dynamics)", credits: 3, prereqs: ["CCE29700"] },
    EEE35000: { name: "Introduction To Environmental And Ecological Engineering", credits: 3, prereqs: ["MA16600", "CHM11610"] },
    "General Education II": { name: "General Education II (BSS)", credits: 3 },
    CCE34000: { name: "Hydraulics", credits: 3, prereqs: ["CCE29700", "CCE29800", "MA26100"] },
    CCE34300: { name: "Elementary Hydraulics Laboratory", credits: 1, prereqs: ["CCE34000"] },
    BIOL11000: { name: "Fundamentals Of Biology I", credits: 4 },
    EEE35500: { name: "Engineering Environmental Sustainability", credits: 3, prereqs: ["EEE35000"] },
    EEE36001: { name: "Water Quality And Treatment Laboratory", credits: 3, prereqs: ["EEE35000", "EEE38000"] },
    "EEE Selective I": { name: "EEE Selective I", credits: 3 },
    "General Education III": { name: "General Education III", credits: 3 },
    EEE30000: { name: "Environmental And Ecological Systems Modeling", credits: 3, prereqs: ["MA26200", "EEE35000"] },
    EEE39000: { name: "EEE Professional Practice Seminar", credits: 1, prereqs: ["EEE29001"] },
    BIOL28600: { name: "Introduction To Ecology And Evolution", credits: 2, prereqs: ["BIOL11000"] },
    STAT51100: { name: "Statistical Methods", credits: 3, prereqs: ["MA16600"] },
    "EEE Selective II": { name: "EEE Selective II", credits: 3 },
    "Technical Selective II": { name: "Technical Selective II", credits: 3 },
    FNR58600: { name: "Urban Ecology", credits: 3, prereqs: ["BIOL28600"] },
    EEE48001: { name: "EEE Senior Design I", credits: 1, prereqs: ["EEE30000", "EEE35000", "EEE35500"] },
    EEE48100: { name: "Reflective Practitioner", credits: 1, prereqs: ["EEE39000"] },
    "EEE Selective III": { name: "EEE Selective III", credits: 3 },
    "EEE Selective IV": { name: "EEE Selective IV", credits: 3 },
    "General Education IV": { name: "General Education IV", credits: 3 },
    EEE48002: { name: "EEE Senior Design II", credits: 2, prereqs: ["EEE48001"] },
    "EEE Selective V": { name: "EEE Selective V", credits: 3 },
    "EEE Selective VI": { name: "EEE Selective VI", credits: 3 },
    "EEE Selective VII": { name: "EEE Selective VII", credits: 3 },
    "General Education V": { name: "General Education V", credits: 3 },
    "General Education VI": { name: "General Education VI", credits: 3 },
  };

  const EEESem1 = ["ENGR13100", "Written Communication", "CHM11510", "CHM11520", "MA16500"];
  const EEESem2 = ["ENGR13200", "Written Communication", "PHYS17200", "CHM11610", "CHM11620", "MA16600"];
  const EEESem3 = ["EEE23000", "EEE29001", "MA26100", "CCE29700", "Technical Selective I", "General Education I"];
  const EEESem4 = ["EEE38000", "MA26200", "CCE29800", "EEE35000", "General Education II"];
  const EEESem5 = ["CCE34000", "CCE34300", "BIOL11000", "EEE35500", "EEE36001", "EEE Selective I", "General Education III"];
  const EEESem6 = ["EEE30000", "EEE39000", "BIOL28600", "STAT51100", "EEE Selective II", "Technical Selective II"];
  const EEESem7 = ["FNR58600", "EEE48001", "EEE48100", "EEE Selective III", "EEE Selective IV", "General Education IV"];
  const EEESem8 = ["EEE48002", "EEE Selective V", "EEE Selective VI", "EEE Selective VII", "General Education V", "General Education VI"];

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
      {renderSemester("Fall 1st Year", EEESem1)}
      {renderSemester("Spring 1st Year", EEESem2)}
      {renderSemester("Fall 2nd Year", EEESem3)}
      {renderSemester("Spring 2nd Year", EEESem4)}
      {renderSemester("Fall 3rd Year", EEESem5)}
      {renderSemester("Spring 3rd Year", EEESem6)}
      {renderSemester("Fall 4th Year", EEESem7)}
      {renderSemester("Spring 4th Year", EEESem8)}
    </div>
  );
}

export default EnvironmentalEngineering;
