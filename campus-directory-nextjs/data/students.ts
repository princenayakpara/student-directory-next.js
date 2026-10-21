import type { Student, Department, Specialization } from "@/types";

export const departments: Department[] = [
  {
    slug: "computer-science",
    name: "Computer Science",
    description:
      "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    specializations: 4,
    enrolled: 320,
    icon: "code",
  },
  {
    slug: "design",
    name: "Design",
    description:
      "User experience research, visual communication, interaction design, and product prototyping.",
    specializations: 3,
    enrolled: 185,
    icon: "design",
  },
  {
    slug: "business",
    name: "Business",
    description:
      "Strategic management, financial technology, international entrepreneurship, and analytics.",
    specializations: 3,
    enrolled: 240,
    icon: "business",
  },
];

export const specializations: Specialization[] = [
  {
    slug: "web-development",
    name: "Web Development",
    departmentSlug: "computer-science",
    description:
      "Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.",
    track: "CS-SPEC-04",
    lead: "Prof. Elena Vance",
    lab: "Turing Hall 408",
    enrollment: 4,
    cycle: "2024–2025 Revised",
  },
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    departmentSlug: "computer-science",
    description: "Machine learning, intelligent systems, and responsible AI.",
    track: "CS-SPEC-01",
    lead: "Dr. Noah Williams",
    lab: "Turing Hall 212",
    enrollment: 2,
    cycle: "2024–2025 Revised",
  },
  {
    slug: "visual-communication",
    name: "Visual Communication",
    departmentSlug: "design",
    description:
      "Visual storytelling, typography, brand systems, and communication design.",
    track: "DS-SPEC-02",
    lead: "Prof. Mira Shah",
    lab: "Design Studio 201",
    enrollment: 1,
    cycle: "2024–2025 Revised",
  },
  {
    slug: "business-analytics",
    name: "Business Analytics",
    departmentSlug: "business",
    description:
      "Data-informed strategy, business intelligence, and applied analytics.",
    track: "BU-SPEC-03",
    lead: "Dr. James Carter",
    lab: "Mercer Hall 110",
    enrollment: 1,
    cycle: "2024–2025 Revised",
  },
];

export const students: Student[] = [
  {
    id: "STU-1042",
    name: "Aarav Mehta",
    department: "Computer Science",
    departmentSlug: "computer-science",
    year: 3,
    email: "aarav.mehta@campus.edu",
    initials: "AM",
    color: "blue",
    enrolled: "Fall 2022",
    specialization: "Full-Stack Architecture",
    about:
      "Aarav is an undergraduate researcher focusing on distributed systems and cloud architecture. When not coding in Rust or Go, he mentors first-year engineering students in algorithm fundamentals.",
    subjects: [
      {
        code: "CS-301",
        title: "Distributed Systems & Microservices",
        credits: 4,
      },
      { code: "CS-340", title: "Web Application Architecture", credits: 4 },
      { code: "CS-280", title: "Algorithms & Complexity", credits: 3.5 },
    ],
  },
  {
    id: "STU-1089",
    name: "Elena Rostova",
    department: "Design",
    departmentSlug: "design",
    year: 2,
    email: "elena.rostova@campus.edu",
    initials: "ER",
    color: "lavender",
    enrolled: "Fall 2023",
    specialization: "Interaction Design",
    about:
      "Elena explores accessible digital experiences and human-centered design. She enjoys turning complex workflows into calm, intuitive interfaces.",
    subjects: [
      { code: "DS-210", title: "Interaction Design Studio", credits: 4 },
      { code: "DS-240", title: "Design Research Methods", credits: 3.5 },
    ],
  },
  {
    id: "STU-1120",
    name: "Marcus Chen",
    department: "Business",
    departmentSlug: "business",
    year: 4,
    email: "marcus.chen@campus.edu",
    initials: "MC",
    color: "peach",
    enrolled: "Fall 2021",
    specialization: "Business Strategy",
    about:
      "Marcus is interested in entrepreneurial strategy, fintech, and sustainable business models. He helps organize the campus startup showcase.",
    subjects: [
      { code: "BU-401", title: "Strategic Management", credits: 4 },
      { code: "BU-420", title: "Financial Technology", credits: 4 },
    ],
  },
  {
    id: "STU-1155",
    name: "Priya Sharma",
    department: "Computer Science",
    departmentSlug: "computer-science",
    year: 1,
    email: "priya.sharma@campus.edu",
    initials: "PS",
    color: "blue",
    enrolled: "Fall 2024",
    specialization: "Reactive UI Design",
    about:
      "Priya is a first-year computer science student interested in frontend engineering, accessible interfaces, and creative coding.",
    subjects: [
      { code: "CS-101", title: "Programming Foundations", credits: 4 },
      { code: "CS-120", title: "Web Design Basics", credits: 3 },
    ],
  },
  {
    id: "STU-1201",
    name: "Lucas Dubois",
    department: "Design",
    departmentSlug: "design",
    year: 3,
    email: "lucas.dubois@campus.edu",
    initials: "LD",
    color: "coral",
    enrolled: "Fall 2022",
    specialization: "Product Prototyping",
    about:
      "Lucas combines visual design and rapid prototyping to explore useful, thoughtful digital products.",
    subjects: [
      { code: "DS-301", title: "Product Prototyping", credits: 4 },
      { code: "DS-315", title: "Design Systems", credits: 3.5 },
    ],
  },
  {
    id: "STU-1244",
    name: "Maya Lin",
    department: "Business",
    departmentSlug: "business",
    year: 2,
    email: "maya.lin@campus.edu",
    initials: "ML",
    color: "periwinkle",
    enrolled: "Fall 2023",
    specialization: "Market Analytics",
    about:
      "Maya enjoys using research and data visualization to understand customer needs and market behavior.",
    subjects: [
      { code: "BU-220", title: "Marketing Analytics", credits: 4 },
      { code: "BU-235", title: "Consumer Behavior", credits: 3 },
    ],
  },
  {
    id: "STU-1310",
    name: "Tariq Al-Mansoor",
    department: "Computer Science",
    departmentSlug: "computer-science",
    year: 4,
    email: "tariq.mansoor@campus.edu",
    initials: "TA",
    color: "periwinkle",
    enrolled: "Fall 2021",
    specialization: "Distributed Web Systems",
    about:
      "Tariq studies resilient web infrastructure, distributed systems, and performance engineering.",
    subjects: [
      { code: "CS-440", title: "Distributed Web Systems", credits: 4 },
      { code: "CS-415", title: "Cloud Infrastructure", credits: 4 },
    ],
  },
  {
    id: "STU-1388",
    name: "Sophia Müller",
    department: "Computer Science",
    departmentSlug: "computer-science",
    year: 2,
    email: "sophia.mueller@campus.edu",
    initials: "SM",
    color: "lavender",
    enrolled: "Fall 2023",
    specialization: "Progressive Web Apps",
    about:
      "Sophia builds inclusive progressive web apps and is curious about offline-first experiences and mobile performance.",
    subjects: [
      { code: "CS-220", title: "Progressive Web Applications", credits: 4 },
      { code: "CS-230", title: "Database Fundamentals", credits: 3.5 },
    ],
  },
];

export const getStudent = (id: string) =>
  students.find((s) => s.id.toLowerCase() === id.toLowerCase());
export const getDepartment = (slug: string) =>
  departments.find((d) => d.slug === slug);
export const getSpecialization = (
  departmentSlug: string,
  specializationSlug: string,
) =>
  specializations.find(
    (s) => s.departmentSlug === departmentSlug && s.slug === specializationSlug,
  );
export const yearLabel = (year: number) =>
  [
    "",
    "1st Year (Freshman)",
    "2nd Year (Sophomore)",
    "3rd Year (Junior)",
    "4th Year (Senior)",
  ][year] ?? `${year}th Year`;
