
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

  const isHighlighted = prereqs?.some(prereq => prereq === hoveredCourse && courseCode !== "Elective");
  const backgroundColor = isHighlighted ? "lightgreen" : hoveredCourse === courseCode ? "lightblue" : "lightgray";

  return (
    <button
      className="course"
      style={{ backgroundColor }}
      onMouseEnter={() => onMouseEnter && onMouseEnter(courseCode)}
      onMouseLeave={() => onMouseLeave && onMouseLeave()}
    >
      <h6>{courseCode + " (" + credits + ")"}</h6>
      <p>{courseName}</p>
    </button>
  );
}

export default Course;
