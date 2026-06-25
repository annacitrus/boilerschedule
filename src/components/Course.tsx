interface Props {
  id: string;
  courseCode: string;
  courseName: string;
  credits: number;
  prereqs?: string[];
  hoveredId?: string | null;
  hoveredCourse?: string | null;
  onMouseEnter?: (courseCode: string) => void;
  onMouseLeave?: () => void;
}

function Course({
  id,
  courseCode,
  courseName,
  credits,
  prereqs,
  hoveredId,
  hoveredCourse,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  const isHighlighted = prereqs?.some(
    (prereq) => prereq === hoveredCourse
  );
  const backgroundColor = isHighlighted
    ? "lightgreen"
    : id === hoveredId
      ? "lightblue"
      : "lightgray";

  // backgroundColor: prereqs?.some(prereq => prereq === hoveredCourse) ? "lightgreen" : hoveredCourse === courseCode ? "lightblue" : "lightgray",

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
