import { MajorData } from "./types";
import dataScience from "./DataScience";
import artificalIntelligenceScience from "./artificalIntelligenceScience";
import mechanicalEngineering from "./mechanicalEngineering";
import electricalEngineering from "./electricalEngineering";
import computerScience from "./computerScience";

export type Major = {
    path: string;
    label: string;
    college: string;
    data: MajorData;
};

export const majors: Major[] = [
    { path: "data-science", label: "Data Science", college: "College of Science", data: dataScience },
    { path: "science-artifical-intelligence", label: "Artificial Intelligence (College of Science)", college: "College of Science", data: artificalIntelligenceScience },
    { path: "mechanical-engineering", label: "Mechanical Engineering", college: "College of Engineering", data: mechanicalEngineering },
    { path: "electrical-engineering", label: "Electrical Engineering", college: "College of Engineering", data: electricalEngineering },
    { path: "computer-science", label: "Computer Science", college: "College of Science", data: computerScience },
];
