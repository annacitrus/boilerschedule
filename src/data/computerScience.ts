import { MajorData } from "./types";

const computerScience: MajorData = {
  courses: {
    CS18000: { name: "Problem Solving And Object-Oriented Programming", credits: 4 },
    MA16100: { name: "Plane Analytic Geometry And Calculus I (or MA 16500)", credits: 5 },
    CS18200: { name: "Foundations Of Computer Science", credits: 3, prereqs: ["CS18000"] },
    CS24000: { name: "Programming In C", credits: 3, prereqs: ["CS18000"] },
    MA16200: { name: "Plane Analytic Geometry And Calculus II (or MA 16600)", credits: 5, prereqs: ["MA16100"] },
    CS25000: { name: "Computer Architecture", credits: 4, prereqs: ["CS24000", "CS18200", "CS18000"] },
    CS25100: { name: "Data Structures And Algorithms", credits: 3, prereqs: ["CS18200", "CS24000", "CS18000"] },
    MA26100: { name: "Multivariate Calculus (or MA 27101)", credits: 4, prereqs: ["MA16200", "MA16100"] },
    CS25200: { name: "Systems Programming", credits: 4, prereqs: ["CS25000", "CS24000", "CS18000", "CS25100", "CS18200"] },
    MA26500: { name: "Linear Algebra (or MA 35100)", credits: 3, prereqs: ["MA16200", "MA16100"] },
    STAT35000: { name: "Introduction To Statistics (or STAT 51100)", credits: 3, prereqs: ["MA16200", "MA16100"] },
    "Written Communication": { name: "Written Communication (WC)", credits: 3 },
    "AI Working Competency": { name: "AI Working Competency", credits: 2 },
    "Language or Culture I": { name: "Language or Culture I", credits: 3 },
    "Language or Culture II": { name: "Language or Culture II", credits: 3 },
    "Language or Culture III": { name: "Language or Culture III", credits: 3 },
    "Technical Writing & Presentation": { name: "Technical Writing & Presentation", credits: 3 },
    "Science, Technology & Society": { name: "Science, Technology & Society", credits: 2 },
    "Great Issues In Science": { name: "Great Issues In Science", credits: 3 },
    "General Education I": { name: "General Education I", credits: 3 },
    "General Education II": { name: "General Education II", credits: 3 },
    "General Education III": { name: "General Education III", credits: 3 },
    "Lab Science I": { name: "Lab Science I", credits: 3 },
    "Lab Science II": { name: "Lab Science II", credits: 3 },
    "Concentration I": { name: "Concentration Course", credits: 3 },
    "Concentration II": { name: "Concentration Course", credits: 3 },
    "Concentration III": { name: "Concentration Course", credits: 3 },
    "Concentration IV": { name: "Concentration Course", credits: 3 },
    "Concentration V": { name: "Concentration Course", credits: 3 },
    "Concentration VI": { name: "Concentration Course", credits: 3 },
    "Elective I": { name: "Elective", credits: 3 },
    "Elective II": { name: "Elective (CS 19300 suggested)", credits: 1 },
    "Elective III": { name: "Elective (CS 29100 recommended)", credits: 2 },
    "Elective IV": { name: "Elective (CS 39100 recommended)", credits: 1 },
    "Elective V": { name: "Elective", credits: 3 },
    "Elective VI": { name: "Elective", credits: 3 },
    "Elective VII": { name: "Elective", credits: 3 },
    "Elective VIII": { name: "Elective", credits: 3 },
    "Elective IX": { name: "Elective", credits: 1 },
    "Elective X": { name: "Elective", credits: 3 },
    "Elective XI": { name: "Elective", credits: 3 },
    "Elective XII": { name: "Elective", credits: 3 },
  },
  semesters: [
    {
      label: "Fall 1st Year",
      courses: ["CS18000", "MA16100", "Written Communication", "Elective I", "Elective II"],
    },
    {
      label: "Spring 1st Year",
      courses: ["CS18200", "CS24000", "MA16200", "AI Working Competency", "Language or Culture I"],
    },
    {
      label: "Fall 2nd Year",
      courses: ["CS25000", "CS25100", "MA26100", "Language or Culture II", "Elective III"],
    },
    {
      label: "Spring 2nd Year",
      courses: ["CS25200", "MA26500", "Technical Writing & Presentation", "Language or Culture III", "Science, Technology & Society"],
    },
    {
      label: "Fall 3rd Year",
      courses: ["STAT35000", "Concentration I", "Concentration II", "General Education I", "Elective IV", "Elective V"],
    },
    {
      label: "Spring 3rd Year",
      courses: ["Concentration III", "Concentration IV", "Great Issues In Science", "General Education II", "Elective VI"],
    },
    {
      label: "Fall 4th Year",
      courses: ["Concentration V", "General Education III", "Lab Science I", "Elective VII", "Elective VIII", "Elective IX"],
    },
    {
      label: "Spring 4th Year",
      courses: ["Concentration VI", "Lab Science II", "Elective X", "Elective XI", "Elective XII"],
    },
  ],
};

export default computerScience;
