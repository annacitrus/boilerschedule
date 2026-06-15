import { useState } from "react";

interface Props {
  courseCode: string;
  courseName: string;
  credits: number;
  related?: string[];
}

function Course({ courseCode, courseName, credits, related }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? "lightblue" : "lightgray",
    transition: "background-color 0.3s",
    padding: "10px",
    margin: "10px",
    cursor: "pointer",
  } as const;

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1>{courseCode}</h1>
      <p>{courseName}</p>
      <p>Credits: {credits}</p>
    </button>
  );
}

export default Course;
