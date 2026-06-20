import Course from "../components/Course";
import { useState } from "react";

type CourseInfo = {
  name: string;
  credits: number;
  prereqs?: string[];
};

function MechanicalEngineering() {
  const courses: Record<string, CourseInfo> = {
    ENGR13100: { name: "Transforming Ideas To Innovation I", credits: 2 },
    "Written Communication": { name: "Written or Oral Communication", credits: 3 },
    CHM11510: { name: "General Chemistry I", credits: 3 },
    CHM11520: { name: "General Chemistry I - Laboratory", credits: 1 },
    MA16500: { name: "Analytic Geometry And Calculus I", credits: 4 },
    ENGR13200: { name: "Transforming Ideas To Innovation II", credits: 2, prereqs: ["ENGR13100"] },
    PHYS17200: { name: "Modern Mechanics", credits: 4, prereqs: ["MA16500"] },
    "First-Year Engineering Selective": { name: "First-Year Engineering Selective", credits: 3 },
    MA16600: { name: "Analytic Geometry And Calculus II", credits: 4, prereqs: ["MA16500"] },
    MA26100: { name: "Multivariate Calculus", credits: 4, prereqs: ["MA16500", "MA16600"] },
    ME20000: { name: "Thermodynamics I", credits: 3, prereqs: ["MA16500", "MA16600", "PHYS17200"] },
    ME27000: { name: "Basic Mechanics I", credits: 3, prereqs: ["MA16500", "PHYS17200"] },
    ME29000: { name: "Global Engineering Professional Seminar", credits: 1 },
    MFET16300: { name: "Foundations In Geometric Modeling And Data Management", credits: 2 },
    PHYS27200: { name: "Electric And Magnetic Interactions", credits: 4, prereqs: ["MA16500", "MA16600", "PHYS17200"] },
    ECE20001: { name: "Electrical Engineering Fundamentals I", credits: 3, prereqs: ["MA16500", "MA16600", "PHYS17200", "PHYS27200"] },
    ECE20007: { name: "Electrical Engineering Fundamentals I Lab", credits: 1, prereqs: ["MA16500", "MA16600", "PHYS17200", "PHYS27200"] },
    MA26600: { name: "Ordinary Differential Equations", credits: 3, prereqs: ["MA16500", "MA16600", "MA26100"] },
    ME23900: { name: "Introduction To Data Science For Mechanical Engineers", credits: 1 },
    ME26400: { name: "Introduction To Manufacturing For Mechanical Design", credits: 3, prereqs: ["MFET16300"] },
    ME27400: { name: "Basic Mechanics II", credits: 3, prereqs: ["MA16500", "PHYS17200", "ME27000"] },
    "General Education": { name: "General Education Elective", credits: 3 },
    MA26500: { name: "Linear Algebra", credits: 3, prereqs: ["MA16500", "MA16600", "MA26100"] },
    ME30800: {
      name: "Fluid Mechanics",
      credits: 3,
      prereqs: ["MA16500", "MA16600", "MA26100", "MA26600", "PHYS17200", "ME20000", "ME27000", "ME27400"],
    },
    ME32300: {
      name: "Mechanics Of Materials",
      credits: 3,
      prereqs: ["MA16500", "MA16600", "MA26100", "PHYS17200", "ME27000", "ME27400"],
    },
    ME32301: {
      name: "Mechanics Of Materials Laboratory",
      credits: 1,
      prereqs: ["MA16500", "MA16600", "MA26100", "PHYS17200", "ME27000", "ME27400"],
    },
    ME36500: {
      name: "Measurement And Control Systems I",
      credits: 3,
      prereqs: ["MA16500", "MA16600", "MA26100", "MA26600", "PHYS17200", "PHYS27200", "ECE20001"],
    },
    ECON25100: { name: "Microeconomics", credits: 3 },
    ME30801: {
      name: "Fluid Mechanics Laboratory",
      credits: 1,
      prereqs: ["MA16500", "MA16600", "MA26100", "MA26600", "PHYS17200", "ME20000", "ME27000", "ME27400", "ME30800"],
    },
    ME35400: {
      name: "Machine Design",
      credits: 3,
      prereqs: ["MA16500", "MA16600", "MA26100", "PHYS17200", "ME27000", "ME27400", "ME32300"],
    },
    ME36400: {
      name: "Systematic Engineering Design",
      credits: 3,
      prereqs: ["MA16500", "PHYS17200", "ME27000", "ME27400"],
    },
    ME37500: {
      name: "Measurement And Control Systems II",
      credits: 3,
      prereqs: ["MA16500", "MA16600", "MA26100", "MA26600", "PHYS17200", "PHYS27200", "ECE20001", "ME36500"],
    },
    "Technical Selective": { name: "Technical Selective", credits: 3 },
    ME31500: {
      name: "Heat And Mass Transfer",
      credits: 4,
      prereqs: ["MA16500", "MA16600", "MA26100", "MA26600", "PHYS17200", "ME20000", "ME27000", "ME27400", "ME30800"],
    },
    MSE23000: { name: "Structure And Properties Of Materials", credits: 3, prereqs: ["CHM11510"] },
    "ME Selective": { name: "Mechanical Engineering Selective", credits: 3 },
    ME46300: {
      name: "Engineering Design",
      credits: 3,
      prereqs: ["MA16500", "MA16600", "MA26100", "MA26600", "PHYS17200", "ME20000", "ME27000", "ME27400", "ME30800", "ME32300", "ME35400", "ME36400"],
    },
    Elective: { name: "Free Elective", credits: 3 },
  };

  const MechanicalEngineeringSem1 = [
    "ENGR13100",
    "Written Communication",
    "CHM11510",
    "CHM11520",
    "MA16500",
  ];
  const MechanicalEngineeringSem2 = [
    "ENGR13200",
    "Written Communication",
    "PHYS17200",
    "First-Year Engineering Selective",
    "MA16600",
  ];
  const MechanicalEngineeringSem3 = [
    "MA26100",
    "ME20000",
    "ME27000",
    "ME29000",
    "MFET16300",
    "PHYS27200",
  ];
  const MechanicalEngineeringSem4 = [
    "ECE20001",
    "ECE20007",
    "MA26600",
    "ME23900",
    "ME26400",
    "ME27400",
    "General Education",
  ];
  const MechanicalEngineeringSem5 = [
    "MA26500",
    "ME30800",
    "ME32300",
    "ME32301",
    "ME36500",
    "ECON25100",
  ];
  const MechanicalEngineeringSem6 = [
    "ME30801",
    "ME35400",
    "ME36400",
    "ME37500",
    "Technical Selective",
    "General Education",
  ];
  const MechanicalEngineeringSem7 = [
    "ME31500",
    "MSE23000",
    "ME Selective",
    "Technical Selective",
    "General Education",
  ];
  const MechanicalEngineeringSem8 = [
    "ME46300",
    "ME Selective",
    "Technical Selective",
    "General Education",
    "General Education",
    "Elective",
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
      {renderSemester("Fall 1st Year", MechanicalEngineeringSem1)}
      {renderSemester("Spring 1st Year", MechanicalEngineeringSem2)}
      {renderSemester("Fall 2nd Year", MechanicalEngineeringSem3)}
      {renderSemester("Spring 2nd Year", MechanicalEngineeringSem4)}
      {renderSemester("Fall 3rd Year", MechanicalEngineeringSem5)}
      {renderSemester("Spring 3rd Year", MechanicalEngineeringSem6)}
      {renderSemester("Fall 4th Year", MechanicalEngineeringSem7)}
      {renderSemester("Spring 4th Year", MechanicalEngineeringSem8)}
    </div>
  );
}

export default MechanicalEngineering;
