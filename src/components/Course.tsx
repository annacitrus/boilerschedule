import { useState } from "react";

interface Props {
  courseCode: string;
  courseName: string;
  credits: number;
  prereqs?: string[];
  hoveredCourse?: string | null;
  onMouseEnter?: (courseCode: string) => void;
  onMouseLeave?: () => void;
}

function Course({
  courseCode,
  courseName,
  credits,
  prereqs,
  hoveredCourse,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  const backgroundColor = prereqs?.some((prereq) => prereq === hoveredCourse)
    ? "lightgreen"
    : hoveredCourse === courseCode
      ? "lightblue"
      : "white";

  return (
    <div
      className="course"
      style={{ backgroundColor, transition: "background-color 0.25s" }}
      onMouseEnter={() => onMouseEnter && onMouseEnter(courseCode)}
      onMouseLeave={() => onMouseLeave && onMouseLeave()}
    >
      <h6>{courseCode + " (" + credits + ")"}</h6>
      <p>{courseName}</p>
    </div>
  );
}

export default Course;
