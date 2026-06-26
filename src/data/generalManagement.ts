import { MajorData } from "./types";

const generalManagement: MajorData = {
  courses: {
    // Fall 1st Year
    DSB18700: { name: "Intro To AI For Business", credits: 2 },
    "Behavioral Science Selective": { name: "Behavioral Science Selective", credits: 3 },
    "Calculus Selective": { name: "Calculus Selective", credits: 4 },
    "Science I": { name: "Science I", credits: 3 },
    "Written Communication Selective": { name: "Written Communication Selective", credits: 3 },
    "Elective I": { name: "Elective", credits: 3 },

    // Spring 1st Year
    ACCT20000: { name: "Introductory Accounting", credits: 3 },
    ECON25100: { name: "Microeconomics", credits: 3 },
    "Data Analytics Selective": { name: "Data Analytics Selective", credits: 3 },
    "Oral Communication Selective": { name: "Oral Communication Selective", credits: 3 },
    "Science II": { name: "Science II", credits: 3 },

    // Fall 2nd Year
    DSB25500: { name: "Foundations Of Business Ethics", credits: 1 },
    DSB29500: { name: "Business Professional Development & Career Strategies", credits: 1 },
    OBHR33000: { name: "Introduction To Organizational Behavior", credits: 3 },
    STRT25400: { name: "Legal Foundations Of Business I", credits: 3 },
    "Human Cultures Humanities Selective": { name: "Human Cultures: Humanities Selective", credits: 3 },
    "Science Technology Society Selective": { name: "Science, Technology & Society Selective", credits: 2 },
    "Statistics Selective": { name: "Statistics Selective", credits: 3 },

    // Spring 2nd Year
    ACCT20100: { name: "Management Accounting I", credits: 3, prereqs: ["ACCT20000"] },
    ECON25200: { name: "Macroeconomics", credits: 3 },
    OBHR44428: { name: "Human Resources Management", credits: 3 },
    QM30500: { name: "Business Statistics", credits: 3, prereqs: ["Statistics Selective"] },
    STRT35200: { name: "Strategic Management", credits: 3, prereqs: ["ECON25100"] },

    // Fall 3rd Year
    FIN31000: { name: "Financial Management", credits: 3, prereqs: ["ACCT20000"] },
    MIS38200: { name: "Management Information Systems", credits: 3 },
    MKTG32400: { name: "Marketing Management", credits: 3 },
    "Major Selective I": { name: "Major Selective", credits: 3 },
    "Cultural Competency I": { name: "Cultural Competency I", credits: 3 },

    // Spring 3rd Year
    "Business Writing Selective": { name: "Business Writing Selective", credits: 3 },
    QM30600: { name: "Management Science", credits: 3, prereqs: ["QM30500", "Statistics Selective"] },
    "Major Selective II": { name: "Major Selective", credits: 3 },
    "Major Selective III": { name: "Major Selective", credits: 3 },
    "Elective II": { name: "Elective", credits: 3 },

    // Fall 4th Year
    ECON30100: { name: "Managerial Economics", credits: 3, prereqs: ["ECON25100"] },
    SCOM36100: { name: "Operations Management", credits: 3, prereqs: ["Statistics Selective"] },
    "Advanced Business Selective": { name: "Advanced Business Selective", credits: 3 },
    "Major Selective IV": { name: "Major Selective", credits: 3 },
    "Elective III": { name: "Elective", credits: 4 },

    // Spring 4th Year
    "Major Selective V": { name: "Major Selective", credits: 3 },
    "Elective IV": { name: "Elective", credits: 4 },
    "Elective V": { name: "Elective", credits: 3 },
    "Elective VI": { name: "Elective", credits: 3 },
    "Elective VII": { name: "Elective", credits: 3 },
  },
  semesters: [
    {
      label: "Fall 1st Year",
      courses: ["DSB18700", "Behavioral Science Selective", "Calculus Selective", "Science I", "Written Communication Selective", "Elective I"],
    },
    {
      label: "Spring 1st Year",
      courses: ["ACCT20000", "ECON25100", "Data Analytics Selective", "Oral Communication Selective", "Science II"],
    },
    {
      label: "Fall 2nd Year",
      courses: ["DSB25500", "DSB29500", "OBHR33000", "STRT25400", "Human Cultures Humanities Selective", "Science Technology Society Selective", "Statistics Selective"],
    },
    {
      label: "Spring 2nd Year",
      courses: ["ACCT20100", "ECON25200", "OBHR44428", "QM30500", "STRT35200"],
    },
    {
      label: "Fall 3rd Year",
      courses: ["FIN31000", "MIS38200", "MKTG32400", "Major Selective I", "Cultural Competency I"],
    },
    {
      label: "Spring 3rd Year",
      courses: ["Business Writing Selective", "QM30600", "Major Selective II", "Major Selective III", "Elective II"],
    },
    {
      label: "Fall 4th Year",
      courses: ["ECON30100", "SCOM36100", "Advanced Business Selective", "Major Selective IV", "Elective III"],
    },
    {
      label: "Spring 4th Year",
      courses: ["Major Selective V", "Elective IV", "Elective V", "Elective VI", "Elective VII"],
    },
  ],
};

export default generalManagement;
