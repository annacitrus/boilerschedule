import Course from "./Course";
import { useState } from "react";

type CourseInfo = {
  name: string;
  credits: number;
  prereqs?: string[];
};

function DataScience() {
  const courses: Record<string, CourseInfo> = {
    CS18000: {
      name: "Problem Solving And Object-Oriented Programming",
      credits: 4,
    },
    CS18200: { name: "Foundations Of Computer Science", credits: 3 },
    CS19300: { name: "Tools (Recommended)", credits: 1 },
    CS24200: {
      name: "Introduction To Data Science",
      credits: 3,
      prereqs: ["CS18000", "CS38003"],
    },
    CS25300: {
      name: "Data Structures And Algorithms For DS/AI",
      credits: 3,
      prereqs: ["CS18000", "CS18200", "MA16100"],
    },
    CS37300: {
      name: "Data Mining And Machine Learning",
      credits: 3,
      prereqs: [
        "CS25300",
        "STAT35500",
        "CS18000",
        "CS18200",
        "MA16100",
        "MA16200",
      ],
    },
    CS38003: { name: "Python Programming", credits: 1, prereqs: ["CS18000"] },
    CS44000: {
      name: "Large Scale Data Analytics",
      credits: 3,
      prereqs: [
        "CS37300",
        "CS25300",
        "STAT35500",
        "CS18000",
        "CS18200",
        "MA16100",
        "MA16200",
      ],
    },
    CS44100: {
      name: "Data Science Capstone",
      credits: 3,
      prereqs: [
        "CS37300",
        "CS25300",
        "STAT35500",
        "CS18000",
        "CS18200",
        "MA16100",
        "MA16200",
      ],
    },
    MA16100: { name: "Calculus I (or MA 16500)", credits: 5 },
    MA16200: {
      name: "Calculus II (or MA 16600)",
      credits: 5,
      prereqs: ["MA16100"],
    },
    MA26100: {
      name: "Multivariate Calculus (or MA 27101)",
      credits: 4,
      prereqs: ["MA16200", "MA16100"],
    },
    MA35100: {
      name: "Elementary Linear Algebra",
      credits: 3,
      prereqs: ["MA16200", "MA16100"],
    },
    STAT35500: {
      name: "Statistics For Data Science",
      credits: 3,
      prereqs: ["MA16200", "MA16100"],
    },
    STAT41600: {
      name: "Probability",
      credits: 3,
      prereqs: ["MA26100", "MA16200", "MA16100"],
    },
    STAT41700: {
      name: "Statistical Theory",
      credits: 3,
      prereqs: ["STAT41600", "MA26100", "MA16200", "MA16100"],
    },
    "AI Working Competency": { name: "AI Working Competency", credits: 2 },
    "Ethics Selective": {
      name: "Ethics Selective (ILS 23000 / PHIL 20700 / PHIL 20800)",
      credits: 3,
    },
    "CS Selective": { name: "CS Selective", credits: 3 },
    "Statistics Selective": { name: "Statistics Selective", credits: 3 },
    "Written Communication": { name: "Written Communication", credits: 3 },
    "Language Culture": { name: "Language or Culture", credits: 3 },
    "General Education": { name: "General Education", credits: 3 },
    "Technical Writing": {
      name: "Technical Writing & Presentation",
      credits: 3,
    },
    "Great Issues in Science": { name: "Great Issues in Science", credits: 3 },
    "Lab Science": { name: "Lab Science", credits: 3 },
    Elective: { name: "Elective", credits: 3 },
  };

  const DataScienceSem1 = [
    "CS18000",
    "MA16100",
    "Written Communication",
    "Elective",
    "CS19300",
  ];
  const DataScienceSem2 = [
    "CS18200",
    "CS38003",
    "MA16200",
    "Language Culture",
    "General Education",
    "Elective",
  ];
  const DataScienceSem3 = [
    "STAT35500",
    "CS24200",
    "MA26100",
    "AI Working Competency",
    "Language Culture",
  ];
  const DataScienceSem4 = [
    "CS25300",
    "MA35100",
    "STAT41600",
    "Ethics Selective",
    "Language Culture",
    "Elective",
  ];
  const DataScienceSem5 = [
    "CS37300",
    "STAT41700",
    "Technical Writing",
    "General Education",
    "Elective",
  ];
  const DataScienceSem6 = [
    "CS Selective",
    "Statistics Selective",
    "Great Issues in Science",
    "Elective",
    "Elective",
  ];
  const DataScienceSem7 = [
    "CS44000",
    "CS Selective",
    "Lab Science",
    "Elective",
    "Elective",
    "Elective",
  ];
  const DataScienceSem8 = [
    "CS44100",
    "Lab Science",
    "Elective",
    "Elective",
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
      {renderSemester("Fall 1st Year", DataScienceSem1)}
      {renderSemester("Spring 1st Year", DataScienceSem2)}
      {renderSemester("Fall 2nd Year", DataScienceSem3)}
      {renderSemester("Spring 2nd Year", DataScienceSem4)}
      {renderSemester("Fall 3rd Year", DataScienceSem5)}
      {renderSemester("Spring 3rd Year", DataScienceSem6)}
      {renderSemester("Fall 4th Year", DataScienceSem7)}
      {renderSemester("Spring 4th Year", DataScienceSem8)}
    </div>
  );
}

export default DataScience;
