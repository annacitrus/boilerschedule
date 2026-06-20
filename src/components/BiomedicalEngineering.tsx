import Course from "../components/Course";
import { useState } from "react";

type CourseInfo = {
  name: string;
  credits: number;
  prereqs?: string[];
};

function BiomedicalEngineering() {
  const courses: Record<string, CourseInfo> = {
    ENGR13100: { name: "Transforming Ideas To Innovation I", credits: 2 },
    "Written Communication": { name: "Written or Oral Communication", credits: 3 },
    CHM11510: { name: "General Chemistry I", credits: 3 },
    CHM11520: { name: "General Chemistry I - Laboratory", credits: 1 },
    MA16500: { name: "Analytic Geometry And Calculus I", credits: 4 },
    ENGR13200: { name: "Transforming Ideas To Innovation II", credits: 2, prereqs: ["ENGR13100"] },
    PHYS17200: { name: "Modern Mechanics", credits: 4, prereqs: ["MA16500"] },
    CHM11610: { name: "General Chemistry II", credits: 3, prereqs: ["CHM11510"] },
    CHM11620: { name: "General Chemistry II - Laboratory", credits: 1, prereqs: ["CHM11510"] },
    MA16600: { name: "Analytic Geometry And Calculus II", credits: 4, prereqs: ["MA16500"] },
    BME20300: { name: "Cell Biology For Biomedical Engineers", credits: 3, prereqs: ["CHM11510", "CHM11610"] },
    BME21400: { name: "Introduction To Biomechanical Analysis", credits: 3, prereqs: ["MA16500", "PHYS17200"] },
    BME21401: { name: "Biomechanical Analysis Laboratory", credits: 1, prereqs: ["MA16500", "PHYS17200"] },
    BME28000: { name: "Frontiers In Biomedical Engineering", credits: 1 },
    "CS Requirement": { name: "CS Requirement", credits: 3 },
    MA26100: { name: "Multivariate Calculus", credits: 4, prereqs: ["MA16500", "MA16600"] },
    PHYS27200: { name: "Electric And Magnetic Interactions", credits: 4, prereqs: ["MA16500", "MA16600", "PHYS17200"] },
    BME22000: {
      name: "Biomolecules: Structure, Function, And Engineering Applications",
      credits: 3,
      prereqs: ["CHM11510", "CHM11610", "BME20300"],
    },
    BME23100: {
      name: "Bioinstrumentation and Circuit Theory",
      credits: 3,
      prereqs: ["MA16500", "MA16600", "MA26100", "PHYS17200", "PHYS27200"],
    },
    BME23101: {
      name: "Bioinstrumentation and Circuit Theory Lab",
      credits: 1,
      prereqs: ["MA16500", "MA16600", "MA26100", "PHYS17200", "PHYS27200"],
    },
    BME25600: {
      name: "Physiological Modeling In Human Health",
      credits: 3,
      prereqs: ["MA16500", "MA16600", "MA26100", "PHYS17200", "BME21400"],
    },
    BME20200: {
      name: "Thermodynamics In Biomedical Engineering",
      credits: 3,
      prereqs: ["MA16500", "MA16600", "PHYS17200"],
    },
    MA26200: { name: "Linear Algebra And Differential Equations", credits: 4, prereqs: ["MA16500", "MA16600", "MA26100"] },
    BME32000: {
      name: "Introduction To Biomaterials Science And Engineering",
      credits: 3,
      prereqs: ["CHM11510", "CHM11610", "BME20300", "BME22000", "MA16500", "MA16600", "PHYS17200", "BME20200"],
    },
    BME32001: {
      name: "Biomolecules And Biomaterials Laboratory",
      credits: 1,
      prereqs: ["CHM11510", "CHM11610", "BME20300", "BME22000", "MA16500", "MA16600", "PHYS17200", "BME20200"],
    },
    BME38000: { name: "Professionalization In Biomedical Engineering", credits: 2, prereqs: ["BME28000"] },
    "Statistics Selective": { name: "Statistics Selective", credits: 3 },
    "Primary Depth Area": { name: "BME Primary Depth Area Selective", credits: 3 },
    "Secondary Depth Area": { name: "BME Secondary Depth Area Selective", credits: 3 },
    "General Education": { name: "General Education Elective", credits: 3 },
    BME38900: {
      name: "Junior Experimental Design Laboratory",
      credits: 2,
      prereqs: ["CHM11510", "CHM11610", "BME20300", "BME22000", "MA16500", "MA16600", "PHYS17200", "BME20200", "BME32000", "BME28000", "BME38000"],
    },
    BME39000: {
      name: "Professional Development And Design In Biomedical Engineering",
      credits: 2,
      prereqs: ["BME28000", "BME38000"],
    },
    "Ethics Healthcare Selective": { name: "Ethics/Policy Healthcare Selective", credits: 3 },
    "Life Science Selective": { name: "Life Science Selective", credits: 3 },
    "Technical Engineering Selective": { name: "Technical Engineering Selective", credits: 3 },
    BME48901: {
      name: "Senior Design Project Laboratory",
      credits: 3,
      prereqs: ["CHM11510", "CHM11610", "BME20300", "BME22000", "MA16500", "MA16600", "PHYS17200", "BME20200", "BME32000", "BME28000", "BME38000", "BME38900", "BME39000"],
    },
    BME49000: {
      name: "Professional Elements Of Design",
      credits: 1,
      prereqs: ["CHM11510", "CHM11610", "BME20300", "BME22000", "MA16500", "MA16600", "PHYS17200", "BME20200", "BME32000", "BME28000", "BME38000", "BME38900", "BME39000"],
    },
  };

  const BiomedicalEngineeringSem1 = [
    "ENGR13100",
    "Written Communication",
    "CHM11510",
    "CHM11520",
    "MA16500",
  ];
  const BiomedicalEngineeringSem2 = [
    "ENGR13200",
    "Written Communication",
    "PHYS17200",
    "CHM11610",
    "CHM11620",
    "MA16600",
  ];
  const BiomedicalEngineeringSem3 = [
    "BME20300",
    "BME21400",
    "BME21401",
    "BME28000",
    "CS Requirement",
    "MA26100",
    "PHYS27200",
  ];
  const BiomedicalEngineeringSem4 = [
    "BME22000",
    "BME23100",
    "BME23101",
    "BME25600",
    "BME20200",
    "MA26200",
  ];
  const BiomedicalEngineeringSem5 = [
    "BME32000",
    "BME32001",
    "BME38000",
    "Statistics Selective",
    "Primary Depth Area",
    "Secondary Depth Area",
    "General Education",
  ];
  const BiomedicalEngineeringSem6 = [
    "BME38900",
    "BME39000",
    "Primary Depth Area",
    "Ethics Healthcare Selective",
    "Life Science Selective",
    "Technical Engineering Selective",
  ];
  const BiomedicalEngineeringSem7 = [
    "BME48901",
    "BME49000",
    "Technical Engineering Selective",
    "Technical Engineering Selective",
    "General Education",
    "General Education",
  ];
  const BiomedicalEngineeringSem8 = [
    "Technical Engineering Selective",
    "Technical Engineering Selective",
    "Life Science Selective",
    "General Education",
    "General Education",
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
      {renderSemester("Fall 1st Year", BiomedicalEngineeringSem1)}
      {renderSemester("Spring 1st Year", BiomedicalEngineeringSem2)}
      {renderSemester("Fall 2nd Year", BiomedicalEngineeringSem3)}
      {renderSemester("Spring 2nd Year", BiomedicalEngineeringSem4)}
      {renderSemester("Fall 3rd Year", BiomedicalEngineeringSem5)}
      {renderSemester("Spring 3rd Year", BiomedicalEngineeringSem6)}
      {renderSemester("Fall 4th Year", BiomedicalEngineeringSem7)}
      {renderSemester("Spring 4th Year", BiomedicalEngineeringSem8)}
    </div>
  );
}

export default BiomedicalEngineering;
