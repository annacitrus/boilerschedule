import Course from "./Course";
import { useState } from "react";

type CourseInfo = {
  name: string;
  credits: number;
  prereqs?: string[];
};

function Aerospace() {
  const courses: Record<string, CourseInfo> = {
    ENGR13100: { name: "Transforming Ideas To Innovation I", credits: 2 },
    "Written Communication": {
      name: "Written or Oral Communication",
      credits: 3,
    },
    CHM11510: { name: "General Chemistry I", credits: 3 },
    CHM11520: { name: "General Chemistry I - Laboratory", credits: 1 },
    MA16500: { name: "Analytic Geometry And Calculus I", credits: 4 },
    ENGR13200: {
      name: "Transforming Ideas To Innovation II",
      credits: 2,
      prereqs: ["ENGR13100"],
    },
    PHYS17200: { name: "Modern Mechanics", credits: 4, prereqs: ["MA16500"] },
    CS15900: { name: "C Programming", credits: 3 },
    MA16600: {
      name: "Analytic Geometry And Calculus II",
      credits: 4,
      prereqs: ["MA16500"],
    },
    AAE20000: { name: "Undergraduate Sophomore Seminar", credits: 0 },
    AAE20300: {
      name: "Aeromechanics I",
      credits: 3,
      prereqs: ["MA16500", "MA16600", "PHYS17200"],
    },
    MA26100: {
      name: "Multivariate Calculus",
      credits: 4,
      prereqs: ["MA16500", "MA16600"],
    },
    MA26500: {
      name: "Linear Algebra",
      credits: 3,
      prereqs: ["MA16500", "MA16600"],
    },
    MFET16300: {
      name: "Foundations In Geometric Modeling And Data Management",
      credits: 2,
    },
    "General Education": { name: "General Education Elective", credits: 3 },
    AAE20400: {
      name: "Aeromechanics II",
      credits: 3,
      prereqs: [
        "MA16500",
        "MA16600",
        "MA26100",
        "MA26500",
        "PHYS17200",
        "AAE20300",
      ],
    },
    AAE20401: {
      name: "Aeromechanics II Laboratory",
      credits: 1,
      prereqs: [
        "MA16500",
        "MA16600",
        "MA26100",
        "MA26500",
        "PHYS17200",
        "AAE20300",
      ],
    },
    AAE25100: {
      name: "Introduction To Aerospace Design",
      credits: 3,
      prereqs: ["MA16500", "MA16600", "PHYS17200", "AAE20300"],
    },
    MA26600: {
      name: "Ordinary Differential Equations",
      credits: 3,
      prereqs: ["MA16500", "MA16600", "MA26100"],
    },
    ME20000: {
      name: "Thermodynamics I",
      credits: 3,
      prereqs: ["MA16500", "MA16600", "PHYS17200"],
    },
    PHYS27200: {
      name: "Electric And Magnetic Interactions",
      credits: 4,
      prereqs: ["MA16500", "MA16600", "PHYS17200"],
    },
    AAE30000: {
      name: "Undergraduate Junior Seminar",
      credits: 0,
      prereqs: ["AAE20000"],
    },
    AAE30100: {
      name: "Signal Analysis For Aerospace Engineering",
      credits: 3,
      prereqs: [
        "MA16500",
        "MA16600",
        "MA26100",
        "MA26500",
        "MA26600",
        "PHYS17200",
      ],
    },
    AAE33300: {
      name: "Fluid Mechanics",
      credits: 3,
      prereqs: [
        "MA16500",
        "MA16600",
        "MA26100",
        "MA26500",
        "PHYS17200",
        "AAE20300",
        "AAE20400",
        "ME20000",
      ],
    },
    AAE33301: {
      name: "Fluid Mechanics Laboratory",
      credits: 1,
      prereqs: [
        "MA16500",
        "MA16600",
        "MA26100",
        "MA26500",
        "PHYS17200",
        "AAE20300",
        "AAE20400",
        "ME20000",
      ],
    },
    AAE35200: {
      name: "Structural Analysis I",
      credits: 3,
      prereqs: [
        "MA16500",
        "MA16600",
        "MA26100",
        "MA26500",
        "PHYS17200",
        "AAE20300",
        "AAE20400",
      ],
    },
    MA30300: {
      name: "Differential Equations And Partial Differential Equations For Engineering And The Sciences",
      credits: 3,
      prereqs: ["MA16500", "MA16600", "MA26100", "MA26600"],
    },
    AAE33400: {
      name: "Aerodynamics",
      credits: 3,
      prereqs: [
        "MA16500",
        "MA16600",
        "MA26100",
        "MA26500",
        "PHYS17200",
        "AAE20300",
        "AAE20400",
        "ME20000",
        "AAE33300",
      ],
    },
    AAE34000: {
      name: "Dynamics And Vibrations",
      credits: 3,
      prereqs: [
        "MA16500",
        "MA16600",
        "MA26100",
        "MA26500",
        "MA26600",
        "PHYS17200",
        "AAE20300",
        "AAE20400",
      ],
    },
    AAE36400: {
      name: "Control System Analysis",
      credits: 3,
      prereqs: [
        "MA16500",
        "MA16600",
        "MA26100",
        "MA26500",
        "MA26600",
        "PHYS17200",
        "AAE30100",
      ],
    },
    AAE33401: {
      name: "Aerodynamics Laboratory",
      credits: 1,
      prereqs: [
        "MA16500",
        "MA16600",
        "MA26100",
        "MA26500",
        "PHYS17200",
        "AAE20300",
        "AAE20400",
        "ME20000",
        "AAE33300",
      ],
    },
    AAE33800: {
      name: "Thermal Sciences",
      credits: 3,
      prereqs: [
        "MA16500",
        "MA16600",
        "MA26100",
        "MA26500",
        "PHYS17200",
        "AAE20300",
        "AAE20400",
        "ME20000",
        "AAE33300",
      ],
    },
    AAE36401: {
      name: "Control Systems Laboratory",
      credits: 1,
      prereqs: [
        "MA16500",
        "MA16600",
        "MA26100",
        "MA26500",
        "MA26600",
        "PHYS17200",
        "AAE30100",
        "AAE36400",
      ],
    },
    AAE40000: {
      name: "Undergraduate Senior Seminar",
      credits: 1,
      prereqs: ["AAE20000", "AAE30000"],
    },
    "AAE Specialization": {
      name: "AAE Engineering Specialization Selective",
      credits: 3,
    },
    "AAE Selective": { name: "AAE Selective", credits: 3 },
    "AAE Statistics Selective": {
      name: "AAE Statistics Selective",
      credits: 3,
    },
    "AAE Technical Selective": { name: "AAE Technical Selective", credits: 3 },
    AAE42100: {
      name: "Flight Dynamics And Control",
      credits: 3,
      prereqs: [
        "MA16500",
        "MA16600",
        "MA26100",
        "MA26500",
        "MA26600",
        "PHYS17200",
        "AAE20300",
        "AAE20400",
        "AAE30100",
        "AAE34000",
        "AAE36400",
      ],
    },
    AAE45100: {
      name: "Aircraft Design",
      credits: 3,
      prereqs: [
        "MA16500",
        "MA16600",
        "MA26100",
        "MA26500",
        "MA26600",
        "PHYS17200",
        "AAE20300",
        "AAE20400",
        "ME20000",
        "AAE33300",
        "AAE33400",
        "AAE35200",
        "AAE30100",
        "AAE36400",
        "AAE33800",
      ],
    },
  };

  const AerospaceSem1 = [
    "ENGR13100",
    "Written Communication",
    "CHM11510",
    "CHM11520",
    "MA16500",
  ];
  const AerospaceSem2 = [
    "ENGR13200",
    "Written Communication",
    "PHYS17200",
    "CS15900",
    "MA16600",
  ];
  const AerospaceSem3 = [
    "AAE20000",
    "AAE20300",
    "MA26100",
    "MA26500",
    "MFET16300",
    "General Education",
  ];
  const AerospaceSem4 = [
    "AAE20400",
    "AAE20401",
    "AAE25100",
    "MA26600",
    "ME20000",
    "PHYS27200",
    "General Education",
  ];
  const AerospaceSem5 = [
    "AAE30000",
    "AAE30100",
    "AAE33300",
    "AAE33301",
    "AAE35200",
    "MA30300",
    "General Education",
  ];
  const AerospaceSem6 = [
    "AAE33400",
    "AAE34000",
    "AAE36400",
    "AAE33401",
    "AAE33800",
    "General Education",
  ];
  const AerospaceSem7 = [
    "AAE36401",
    "AAE40000",
    "AAE Specialization",
    "AAE Selective",
    "AAE Statistics Selective",
    "AAE Technical Selective",
    "General Education",
  ];
  const AerospaceSem8 = [
    "AAE42100",
    "AAE45100",
    "AAE Specialization",
    "AAE Specialization",
    "AAE Selective",
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
      {renderSemester("Fall 1st Year", AerospaceSem1)}
      {renderSemester("Spring 1st Year", AerospaceSem2)}
      {renderSemester("Fall 2nd Year", AerospaceSem3)}
      {renderSemester("Spring 2nd Year", AerospaceSem4)}
      {renderSemester("Fall 3rd Year", AerospaceSem5)}
      {renderSemester("Spring 3rd Year", AerospaceSem6)}
      {renderSemester("Fall 4th Year", AerospaceSem7)}
      {renderSemester("Spring 4th Year", AerospaceSem8)}
    </div>
  );
}

export default Aerospace;
