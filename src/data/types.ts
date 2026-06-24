export type CourseInfo = {
    name: string;
    credits: number;
    prereqs?: string[];
}

export type MajorData = {
    courses: Record<string, CourseInfo>;
    semesters: {label: string; courses: string[]}[];
}