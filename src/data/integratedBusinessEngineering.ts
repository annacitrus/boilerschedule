import { MajorData } from "./types";

const integratedBusinessEngineering: MajorData = {
  courses: {
    // Fall 1st Year
    ENGR13300: { name: "Transforming Ideas To Innovation", credits: 2 },
    ACCT20000: { name: "Introductory Accounting", credits: 3 },
    IBE29110: { name: "Integrated Business & Engineering Seminar I", credits: 1 },
    CHM11510: { name: "General Chemistry I", credits: 3 },
    "Chemistry Lab": { name: "General Chemistry I Laboratory", credits: 1 },
    MA16500: { name: "Analytic Geometry And Calculus I", credits: 4 },
    "EPICS/VIP I": { name: "EPICS/VIP I", credits: 1 },

    // Spring 1st Year
    ECON25100: { name: "Microeconomics", credits: 3 },
    MA16600: { name: "Analytic Geometry And Calculus II", credits: 4, prereqs: ["MA16500"] },
    PHYS17200: { name: "Modern Mechanics", credits: 4, prereqs: ["MA16500"] },
    "EPICS/VIP II": { name: "EPICS/VIP II", credits: 1 },
    "Oral Communication Selective": { name: "Oral Communication Selective", credits: 3 },
    "AI Selective": { name: "AI Selective", credits: 2 },

    // Fall 2nd Year
    ACCT20100: { name: "Management Accounting I", credits: 3, prereqs: ["ACCT20000"] },
    IBE29120: { name: "Integrated Business & Engineering Seminar II", credits: 1 },
    IBE29150a: { name: "IBE Professional Development", credits: 0 },
    MA26100: { name: "Multivariate Calculus", credits: 4, prereqs: ["MA16600", "MA16500"] },
    STAT35000: { name: "Introduction To Statistics", credits: 3, prereqs: ["MA16600", "MA16500"] },
    "Written Communication Selective": { name: "Written Communication Selective", credits: 3 },
    "Engineering IBE Core I": { name: "Engineering IBE Core Selective", credits: 3 },

    // Spring 2nd Year
    FIN31000: { name: "Financial Management", credits: 3, prereqs: ["ACCT20000", "ACCT20100"] },
    IBE29130: { name: "Integrated Business & Engineering Seminar III", credits: 1 },
    IBE29150b: { name: "IBE Professional Development", credits: 0 },
    MIS38800: { name: "Python For Business", credits: 3 },
    MKTG32400: { name: "Marketing Management", credits: 3 },
    QM30500: { name: "Business Statistics", credits: 3, prereqs: ["STAT35000", "MA16600", "MA16500"] },
    "Engineering IBE Core II": { name: "Engineering IBE Core Selective", credits: 3 },

    // Fall 3rd Year
    IBE29150c: { name: "IBE Professional Development", credits: 0 },
    SCOM36100: { name: "Operations Management", credits: 3, prereqs: ["QM30500", "STAT35000", "MA16600", "MA16500"] },
    STRT49200: { name: "Intellectual Property Management", credits: 2 },
    "Business Method Selective I": { name: "Business Method Selective", credits: 3 },
    "Specialties Course I": { name: "Specialties Course", credits: 3 },
    "Team Based Design Selective I": { name: "Team Based Design Selective", credits: 2 },

    // Spring 3rd Year
    IBE29150d: { name: "IBE Professional Development", credits: 0 },
    MIS38200: { name: "Management Information Systems", credits: 3 },
    "Business Method Selective II": { name: "Business Method Selective", credits: 3 },
    "Engineering Expansion Course": { name: "Engineering Expansion Course", credits: 3 },
    "Engineering Selective": { name: "Engineering Selective", credits: 3 },
    "Team Based Design Selective II": { name: "Team Based Design Selective", credits: 2 },

    // Fall 4th Year
    IBE29140: { name: "Integrated Business & Engineering Seminar IV", credits: 1 },
    OBHR33000: { name: "Introduction To Organizational Behavior", credits: 3 },
    OBHR49300: { name: "Storytelling With Data", credits: 2 },
    STRT35200: { name: "Strategic Management", credits: 3 },
    "Specialties Course II": { name: "Specialties Course", credits: 3 },
    "Human Cultures Humanities": { name: "Human Cultures: Humanities", credits: 3 },

    // Spring 4th Year
    IBE49400: { name: "IBE Capstone", credits: 3 },
    "Business Depth Selective": { name: "Business Depth Selective", credits: 3 },
    "Specialties Course III": { name: "Specialties Course", credits: 3 },
    "Specialties Course IV": { name: "Specialties Course", credits: 3 },
    Elective: { name: "Elective", credits: 3 },
  },
  semesters: [
    {
      label: "Fall 1st Year",
      courses: ["ENGR13300", "ACCT20000", "IBE29110", "CHM11510", "Chemistry Lab", "MA16500", "EPICS/VIP I"],
    },
    {
      label: "Spring 1st Year",
      courses: ["ECON25100", "MA16600", "PHYS17200", "EPICS/VIP II", "Oral Communication Selective", "AI Selective"],
    },
    {
      label: "Fall 2nd Year",
      courses: ["ACCT20100", "IBE29120", "IBE29150a", "MA26100", "STAT35000", "Written Communication Selective", "Engineering IBE Core I"],
    },
    {
      label: "Spring 2nd Year",
      courses: ["FIN31000", "IBE29130", "IBE29150b", "MIS38800", "MKTG32400", "QM30500", "Engineering IBE Core II"],
    },
    {
      label: "Fall 3rd Year",
      courses: ["IBE29150c", "SCOM36100", "STRT49200", "Business Method Selective I", "Specialties Course I", "Team Based Design Selective I"],
    },
    {
      label: "Spring 3rd Year",
      courses: ["IBE29150d", "MIS38200", "Business Method Selective II", "Engineering Expansion Course", "Engineering Selective", "Team Based Design Selective II"],
    },
    {
      label: "Fall 4th Year",
      courses: ["IBE29140", "OBHR33000", "OBHR49300", "STRT35200", "Specialties Course II", "Human Cultures Humanities"],
    },
    {
      label: "Spring 4th Year",
      courses: ["IBE49400", "Business Depth Selective", "Specialties Course III", "Specialties Course IV", "Elective"],
    },
  ],
};

export default integratedBusinessEngineering;
