import { MajorData } from "./types";

const dataScience: MajorData = {
  courses: {
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
  },
  semesters: [
    {
      label: "Semester 1",
      courses: ["CS18000", "MA16100", "Written Communication", "Elective", "CS19300"],
    },
    {
      label: "Semester 2",
      courses: ["CS18200", "CS38003", "MA16200", "Language Culture", "General Education", "Elective"],
    },
    {
      label: "Semester 3",
      courses: ["STAT35500", "CS24200", "MA26100", "AI Working Competency", "Language Culture"],
    },
    {
      label: "Semester 4",
      courses: ["CS25300", "MA35100", "STAT41600", "Ethics Selective", "Language Culture", "Elective"],
    },
    {
      label: "Semester 5",
      courses: ["CS37300", "STAT41700", "Technical Writing", "General Education", "Elective"],
    },
    {
      label: "Semester 6",
      courses: ["CS Selective", "Statistics Selective", "Great Issues in Science", "Elective", "Elective"],
    },
    {
      label: "Semester 7",
      courses: ["CS44000", "CS Selective", "Lab Science", "Elective", "Elective", "Elective"],
    },
    {
      label: "Semester 8",
      courses: ["CS44100", "Lab Science", "Elective", "Elective", "Elective"],
    },
  ],
};

export default dataScience;
