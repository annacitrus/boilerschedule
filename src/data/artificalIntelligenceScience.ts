import { MajorData } from "./types";

const artificalIntelligenceScience: MajorData = {
  courses: {
    CS176: { name: "Data Engineering in Python", credits: 3 },
    PSY120: { name: "Elementary Psychology", credits: 3 },
    MA161: { name: "Calculus I (or MA 165)", credits: 5 },
    "AI Working Competency": { name: "AI Working Competency", credits: 0 },
    CS193: { name: "CS 193 (Recommended)", credits: 1 },
    CS180: { name: "Problem Solving and Object-Oriented Programming", credits: 4 },
    CS182: { name: "Foundations of Computer Science", credits: 3 },
    MA162: { name: "Calculus II (or MA 166)", credits: 5, prereqs: ["MA161"] },
    PSY200: {
      name: "Intro to Cognitive Psychology (or PSY 222)",
      credits: 3,
      prereqs: ["PSY120"],
    },
    CS243: {
      name: "Artificial Intelligence Basics",
      credits: 3,
      prereqs: ["CS180", "CS182", "MA161"],
    },
    MA261: {
      name: "Multivariable Calculus",
      credits: 5,
      prereqs: ["MA161", "MA162"],
    },
    STAT350: {
      name: "Statistics (or STAT 511)",
      credits: 3,
      prereqs: ["MA162", "MA161"],
    },
    PHIL207: { name: "Ethics (or PHIL 208)", credits: 3 },
    "Science Core Selection": { name: "Science Core Selection", credits: 3 },
    CS253: {
      name: "Data Structures and Algorithms for DS/AI",
      credits: 3,
      prereqs: ["CS176", "CS180", "CS182", "MA161"],
    },
    MA265: {
      name: "Linear Algebra (or MA 351)",
      credits: 3,
      prereqs: ["MA161", "MA162"],
    },
    MA416: {
      name: "Probability (or STAT 416)",
      credits: 3,
      prereqs: ["MA162", "MA161", "MA261"],
    },
    PHIL221: {
      name: "Introduction To Philosophy of Science (or PHIL 322)",
      credits: 3,
    },
    CS373: {
      name: "Data Mining And Machine Learning",
      credits: 3,
      prereqs: ["CS182", "CS180", "CS253", "STAT350"],
    },
    CS381: {
      name: "Introduction To The Analysis Of Algorithms",
      credits: 3,
      prereqs: ["CS253", "CS180", "CS182", "MA161", "MA162", "MA261"],
    },
    CS471: {
      name: "Introduction To Artificial Intelligence",
      credits: 3,
      prereqs: ["CS176", "CS180", "CS182", "MA161", "CS253"],
    },
    "AI Capstone Experience": { name: "AI Capstone Experience", credits: 3 },
    "CS Selective": { name: "CS Selective", credits: 3 },
    "Philosophy Selective": { name: "Philosophy Selective", credits: 3 },
    Elective: { name: "Elective", credits: 3 },
  },
  semesters: [
    {
      label: "Semester 1",
      courses: ["CS176", "PSY120", "MA161", "Science Core Selection", "AI Working Competency", "CS193"],
    },
    {
      label: "Semester 2",
      courses: ["CS180", "CS182", "MA162", "PSY200"],
    },
    {
      label: "Semester 3",
      courses: ["CS243", "MA261", "STAT350", "PHIL207", "Science Core Selection"],
    },
    {
      label: "Semester 4",
      courses: ["CS253", "MA265", "MA416", "PHIL221", "Science Core Selection"],
    },
    {
      label: "Semester 5",
      courses: ["CS373", "CS Selective", "Philosophy Selective", "Science Core Selection", "Elective"],
    },
    {
      label: "Semester 6",
      courses: ["CS381", "Science Core Selection", "Science Core Selection", "Elective", "Elective"],
    },
    {
      label: "Semester 7",
      courses: ["CS471", "CS Selective", "Science Core Selection", "Science Core Selection", "Science Core Selection"],
    },
    {
      label: "Semester 8",
      courses: ["AI Capstone Experience", "CS Selective", "Science Core Selection", "Science Core Selection", "Elective"],
    },
  ],
};

export default artificalIntelligenceScience;
