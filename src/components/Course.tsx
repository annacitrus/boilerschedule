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

function Course({ courseCode, courseName, credits, prereqs, hoveredCourse, onMouseEnter, onMouseLeave }: Props) {

  const buttonStyle = {
    backgroundColor: prereqs?.some(prereq => prereq === hoveredCourse) ? "lightgreen" : hoveredCourse === courseCode ? "lightblue" : "lightgray",
    transition: "background-color 0.3s",
    padding: "10px",
    margin: "10px",
    width: "100px",
    height: "100px",
    cursor: "pointer",
  } as const;

  return (
    <button
      style={buttonStyle}


  
      onMouseEnter={() => onMouseEnter && onMouseEnter(courseCode)}
      onMouseLeave={() => onMouseLeave && onMouseLeave()}
    >
      <h6>{courseCode + " (" + credits + ")"}</h6>
      <p>{courseName}</p>
    </button>
  );
}

export default Course;
