"use client";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Student } from "@/types";
import StudentCard from "./StudentCard";
export default function SearchStudents({ students, departments }: { students: Student[]; departments: string[] }) {
  const [query, setQuery] = useState(""); const [department, setDepartment] = useState("All departments");
  const filtered = useMemo(() => students.filter(s => (s.name.toLowerCase().includes(query.toLowerCase()) || s.id.toLowerCase().includes(query.toLowerCase())) && (department === "All departments" || s.department === department)), [students, query, department]);
  return <><div className="filters"><label className="search-field"><Search size={19}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search students" aria-label="Search students"/></label><label className="department-filter"><span>Department:</span><select value={department} onChange={e => setDepartment(e.target.value)}><option>All departments</option>{departments.map(d => <option key={d}>{d}</option>)}</select></label></div><div className="student-grid">{filtered.map(student => <StudentCard key={student.id} student={student}/>)}</div><div className="results-footer"><span>Showing <strong>{filtered.length}</strong> of {students.length} students</span><span className="muted">{filtered.length === 0 ? "Try another search or department." : "Directory records are sample data."}</span></div></>;
}