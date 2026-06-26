import { MajorData } from "./types";

const finance: MajorData = {
  courses: {
    // Fall 1st Year
    ACCT20000: { name: "Introductory Accounting", credits: 3 },
    FIN25300: { name: "Finance Industry Exploration", credits: 2 },
    FIN25800: { name: "AI In Finance", credits: 3 },
    "Data Analytics Selective": { name: "Data Analytics Selective", credits: 3 },
    "Calculus Selective": { name: "Calculus Selective", credits: 4 },
    "Written Communication Selective": { name: "Written Communication Selective", credits: 3 },

    // Spring 1st Year
    DSB29500: { name: "Business Professional Development & Career Strategies", credits: 1 },
    ECON25100: { name: "Microeconomics", credits: 3 },
    "Behavioral Science Selective": { name: "Behavioral Science Selective", credits: 3 },
    "Oral Communication Selective": { name: "Oral Communication Selective", credits: 3 },
    "Science I": { name: "Science I", credits: 3 },

    // Fall 2nd Year
    ACCT20100: { name: "Management Accounting I", credits: 3, prereqs: ["ACCT20000"] },
    DSB25500: { name: "Foundations Of Business Ethics", credits: 1 },
    ECON25200: { name: "Macroeconomics", credits: 3 },
    FIN31000: { name: "Financial Management", credits: 3, prereqs: ["ACCT20000", "ACCT20100"] },
    "Statistics Selective": { name: "Statistics Selective", credits: 3 },
    "Science II": { name: "Science II", credits: 3 },

    // Spring 2nd Year
    FIN41100: { name: "Investment Management", credits: 3, prereqs: ["FIN31000", "ACCT20000", "ACCT20100"] },
    FIN41300: { name: "Corporate Finance", credits: 3 },
    FIN41310: { name: "Financial Data Analysis And Modeling", credits: 3, prereqs: ["FIN31000", "ACCT20000", "ACCT20100"] },
    ACCT35300: { name: "Intermediate Accounting For Non-Accounting Majors", credits: 3, prereqs: ["ACCT20000"] },
    QM30500: { name: "Business Statistics", credits: 3 },
    "Elective I": { name: "Elective", credits: 3 },

    // Fall 3rd Year
    "Business Writing Selective": { name: "Business Writing Selective", credits: 3 },
    "Human Cultures Humanities Selective": { name: "Human Cultures: Humanities Selective", credits: 3 },
    "Major Selective I": { name: "Major Selective", credits: 3 },
    "Major Selective II": { name: "Major Selective", credits: 3 },
    "Major Selective III": { name: "Major Selective", credits: 3 },

    // Spring 3rd Year
    STRT25400: { name: "Legal Foundations Of Business I", credits: 3 },
    "Cultural Competency Selective": { name: "Cultural Competency Selective", credits: 3 },
    "Science Technology Society Selective": { name: "Science, Technology & Society", credits: 2 },
    "Major Selective IV": { name: "Major Selective", credits: 3 },
    "Major Selective V": { name: "Major Selective", credits: 3 },

    // Fall 4th Year
    MIS38200: { name: "Management Information Systems", credits: 3 },
    MKTG32400: { name: "Marketing Management", credits: 3 },
    SCOM36100: { name: "Operations Management", credits: 3, prereqs: ["Statistics Selective"]},
    "Major Selective VI": { name: "Major Selective", credits: 3 },
    "Major Selective VII": { name: "Major Selective", credits: 3 },

    // Spring 4th Year
    STRT35200: { name: "Strategic Management", credits: 3, prereqs: ["ECON25100"] },
    OBHR33000: { name: "Introduction To Organizational Behavior", credits: 3 },
    "AI Working Competency": { name: "AI Working Competency", credits: 2 },
    "Major Selective VIII": { name: "Major Selective", credits: 3 },
    "Elective II": { name: "Elective", credits: 4 },
    "Elective III": { name: "Elective", credits: 2 },
  },
  semesters: [
    {
      label: "Fall 1st Year",
      courses: ["ACCT20000", "FIN25300", "FIN25800", "Data Analytics Selective", "Calculus Selective", "Written Communication Selective"],
    },
    {
      label: "Spring 1st Year",
      courses: ["DSB29500", "ECON25100", "Behavioral Science Selective", "Oral Communication Selective", "Science I"],
    },
    {
      label: "Fall 2nd Year",
      courses: ["ACCT20100", "DSB25500", "ECON25200", "FIN31000", "Statistics Selective", "Science II"],
    },
    {
      label: "Spring 2nd Year",
      courses: ["FIN41100", "FIN41300", "FIN41310", "ACCT35300", "QM30500", "Elective I"],
    },
    {
      label: "Fall 3rd Year",
      courses: ["Business Writing Selective", "Human Cultures Humanities Selective", "Major Selective I", "Major Selective II", "Major Selective III"],
    },
    {
      label: "Spring 3rd Year",
      courses: ["STRT25400", "Cultural Competency Selective", "Science Technology Society Selective", "Major Selective IV", "Major Selective V"],
    },
    {
      label: "Fall 4th Year",
      courses: ["MIS38200", "MKTG32400", "SCOM36100", "Major Selective VI", "Major Selective VII"],
    },
    {
      label: "Spring 4th Year",
      courses: ["STRT35200", "OBHR33000", "AI Working Competency", "Major Selective VIII", "Elective II", "Elective III"],
    },
  ],
};

export default finance;
