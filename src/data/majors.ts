import { MajorData } from "./types";
import dataScience from "./dataScience";
import artificalIntelligenceScience from "./artificalIntelligenceScience";
import electricalEngineering from "./electricalEngineering";
import computerScience from "./computerScience";
import integratedBusinessEngineering from "./integratedBusinessEngineering";
import aerospaceEngineering from "./aerospaceEngineering";
import computerEngineering from "./computerEngineering";
import finance from "./finance";
import generalManagement from "./generalManagement";

export type Major = {
    path: string;
    label: string;
    college: string;
    data: MajorData;
};

export const majors: Major[] = [
    { path: "data-science", label: "Data Science", college: "College of Science", data: dataScience },
    { path: "science-artifical-intelligence", label: "Artificial Intelligence (College of Science)", college: "College of Science", data: artificalIntelligenceScience },
    { path: "electrical-engineering", label: "Electrical Engineering", college: "College of Engineering", data: electricalEngineering },
    { path: "computer-science", label: "Computer Science", college: "College of Science", data: computerScience },
    { path: "integrated-business-engineering", label: "Integrated Business and Engineering", college: "Daniels School of Business", data: integratedBusinessEngineering },
    { path: "aerospace-engineering", label: "Aerospace Engineering", college: "College of Engineering", data: aerospaceEngineering },
    { path: "computer-engineering", label: "Computer Engineering", college: "College of Engineering", data: computerEngineering },
    { path: "finance", label: "Finance", college: "Daniels School of Business", data: finance },
    { path: "general-management", label: "General Management", college: "Daniels School of Business", data: generalManagement },
];
