# Velvet Fox — Purdue Course Planner

React app that displays Purdue major curricula as semester-by-semester plans with prerequisite highlighting.

## Adding a New Major

### 1. Create `src/data/<majorName>.ts`

Export a default `MajorData` object (type from `src/data/types.ts`):

```ts
import { MajorData } from "./types";

const myMajor: MajorData = {
  courses: { /* see below */ },
  semesters: [ /* see below */ ],
};

export default myMajor;
```

**`courses`** — `Record<string, CourseInfo>` where each value is:
```ts
{ name: string; credits: number; prereqs?: string[] }
```
- `prereqs` should contain ALL transitive prerequisites (prereqs of prereqs, etc.), not just direct ones, filtered to keys that exist in this same `courses` object.
- Placeholder courses (selectives, electives, gen eds) use string keys like `"General Education I"`, `"Technical Elective I"`, `"Elective"` and typically have no `prereqs`.

**`semesters`** — ordered array of `{ label: string; courses: string[] }` where `courses` is an array of keys from the `courses` object.

### 2. Register in `src/data/majors.ts`

```ts
import myMajor from "./myMajor";

// add to the majors array:
{ path: "my-major", label: "My Major", college: "College of X", data: myMajor }
```


---

## Prerequisite Lookup

`src/data/course-catalog.json` is the prereq source. Each entry has a `prerequisite_courses` string array.

To compute prereqs for a course:
1. Look up its `prerequisite_courses` in `course-catalog.json`
2. Filter to only keys that exist in the major's `courses` dict
3. For each kept prereq, recursively include its prereqs too (flatten everything into one array)

---

## Prompt Template for Adding a Major

```
Add [Major Name] (College of X) to the data folder.

COURSES (Purdue catalog code | display name | credits):
MA 26100 | Multivariate Calculus | 4
ME 20000 | Thermodynamics I | 3
...

SELECTIVES/PLACEHOLDERS:
"General Education I" | General Education I | 3
"Technical Elective I" | Technical Elective I | 3
...

SEMESTER PLAN:
Fall 1st Year: MA 16100, CHM 11510, ...
Spring 1st Year: MA 16200, PHYS 17200, ...
...
```

Use `course-catalog.json` for prereqs. All transitive prereqs go in `prereqs[]`.
