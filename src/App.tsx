import ListGroup from "./components/ListGroup";

function App() {
  const courses = {
    CS176: { name: "Data Engineering in Python", credits: 3 },
    PSY120: { name: "Elementary Psychology", credits: 3 },
    MA161: { name: "Calculus I (or MA 165)", credits: 5, related: ["MA162", "MA261", "MA265"] },
    "AI Working Competency": { name: "AI Working Competency", credits: 0 },
    CS193: { name: "CS 193 (Recommended)", credits: 1 },
    CS180: {
      name: "Problem Solving and Object-Oriented Programming",
      credits: 4,
    },
    CS182: { name: "Foundations of Computer Science", credits: 3 },
    MA162: { name: "Calculus II (or MA 166)", credits: 5, related: ["MA161", "MA261", "MA265"] },
    PSY200: { name: "Intro to Cognitive Psychology (or PSY 222)", credits: 3 },
    CS243: { name: "Artificial Intelligence Basics", credits: 3 },
    MA261: { name: "Multivariable Calculus", credits: 5 },
    STAT350: { name: "Statistics (or STAT 511)", credits: 3 },
    PHIL207: { name: "Ethics (or PHIL 208)", credits: 3 },
    "Science Core Selection": { name: "", credits: 3 },
    CS253: { name: "Data Structures and Algorithms for DS/AI", credits: 3 },
    MA265: { name: "Linear Algebra (or MA 351)", credits: 3, related: ["MA261", "MA161", "MA162"] },
    MA416: { name: "Probability (or STAT 416)", credits: 3 },
    PHIL221: {
      name: "Introduction To Philosophy of Science (or PHIL 322)",
      credits: 3,
    },
    CS373: { name: "Data Mining And Machine Learning", credits: 3 },
    CS381: { name: "Introduction To The Analysis Of Algorithms", credits: 3 },
    CS471: { name: "Introduction To Artificial Intelligence", credits: 3 },
    "AI Capstone Experience": { name: "", credits: 3 },
    "CS Selective": { name: "", credits: 3 },
    "Philosophy Selective": { name: "", credits: 3 },
    Elective: { name: "", credits: 3 },
  };
  const ArtificialIntelligenceSem1 = [
    "CS176",
    "PSY120",
    "MA161",
    "Science Core Selection",
    "AI Working Competency",
    "CS193",
  ];
  const ArtificialIntelligenceSem2 = ["CS180", "CS182", "MA162", "PSY200"];
  const ArtificialIntelligenceSem3 = [
    "CS243",
    "MA261",
    "STAT350",
    "PHIL207",
    "Science Core Selection",
  ];
  const ArtificialIntelligenceSem4 = [
    "CS253",
    "MA265",
    "MA416",
    "PHIL221",
    "Science Core Selection",
  ];
  const ArtificialIntelligenceSem5 = [
    "CS373",
    "CS Selective",
    "Philosophy Selective",
    "Science Core Selection",
    "Elective",
  ];
  const ArtificialIntelligenceSem6 = [
    "CS381",
    "Science Core Selection",
    "Science Core Selection",
    "Elective",
    "Elective",
  ];
  const ArtificialIntelligenceSem7 = [
    "CS471",
    "CS Selective",
    "Science Core Selection",
    "Science Core Selection",
    "Science Core Selection",
  ];
  const ArtificialIntelligenceSem8 = [
    "AI Capstone Experience",
    "CS Selective",
    "Science Core Selection",
    "Science Core Selection",
    "Elective",
  ];
  const relatedCourses: { [key: string]: string[] } = {
    CS243: ["CS373", "CS471"],
    "MA 161": ["MA162", "MA261", "MA265"],
  };

  const handleSelectionItem = (item: string) => console.log(item);
  return (
    <div>
      <ListGroup
        items={ArtificialIntelligenceSem1}
        heading="Semester 1"
        courses = {courses}
        onSelectItem={handleSelectionItem}
      />
      <ListGroup
        items={ArtificialIntelligenceSem2}
        heading="Semester 2"
        courses = {courses}
        onSelectItem={handleSelectionItem}
      />
      <ListGroup
        items={ArtificialIntelligenceSem3}
        heading="Semester 3"
        courses = {courses}
        onSelectItem={handleSelectionItem}
      />
      <ListGroup
        items={ArtificialIntelligenceSem4}
        heading="Semester 4"
        courses = {courses}
        onSelectItem={handleSelectionItem}
      />
      <ListGroup
        items={ArtificialIntelligenceSem5}
        heading="Semester 5"
        courses = {courses}
        onSelectItem={handleSelectionItem}
      />
      <ListGroup
        items={ArtificialIntelligenceSem6}
        heading="Semester 6"
        courses = {courses}
        onSelectItem={handleSelectionItem}
      />
      <ListGroup
        items={ArtificialIntelligenceSem7}
        heading="Semester 7"
        courses = {courses}
        onSelectItem={handleSelectionItem}
      />
      <ListGroup
        items={ArtificialIntelligenceSem8}
        heading="Semester 8"
        courses = {courses}
        onSelectItem={handleSelectionItem}
      />
    </div>
  );
}

export default App;
