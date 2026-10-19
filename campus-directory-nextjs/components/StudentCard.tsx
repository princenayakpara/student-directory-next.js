import Link from "next/link";
import type { Student } from "@/types";
export default function StudentCard({ student }: { student: Student }) {
  return <article className="student-card"><div className="student-card-top"><div className={`avatar ${student.color}`}>{student.initials}</div><span className="id-badge">{student.id}</span></div><h2>{student.name}</h2><div className="student-meta"><span className="tag tag-blue">{student.department}</span><span>{["", "1st", "2nd", "3rd", "4th"][student.year]} Year</span></div><div className="card-bottom"><Link href={`/students/${student.id}`}>View profile <span aria-hidden="true">→</span></Link></div></article>;
}