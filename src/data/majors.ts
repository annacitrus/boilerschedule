import { MajorData } from "./types";
import dataScience from "./DataScience";
import artificalIntelligenceScience from "./artificalIntelligenceScience";

export type Major = {
    path: string;
    label: string;
    college: string;
    data: MajorData;
};

export const majors: Major[] = [
    { path: "data-science", label: "Data Science", college: "College of Science", data: dataScience },
    { path: "science-artifical-intelligence", label: "Artificial Intelligence (College of Science)", college: "College of Science", data: artificalIntelligenceScience },
];
