import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  specializations,
  students,
  getDepartment,
  getSpecialization,
} from "@/data/students";
export function generateStaticParams() {
  return specializations.map((s) => ({
    department: s.departmentSlug,
    specialization: s.slug,
  }));
}
export default async function SpecializationPage({
  params,
}: {
  params: Promise<{ department: string; specialization: string }>;
}) {
  const { department: deptSlug, specialization: specSlug } = await params;
  const dept = getDepartment(deptSlug);
  const spec = getSpecialization(deptSlug, specSlug);
  if (!dept || !spec) notFound();
  const enrolled = students.filter(
    (s) =>
      s.departmentSlug === deptSlug &&
      (spec.slug !== "web-development" ||
        ["STU-1042", "STU-1155", "STU-1310", "STU-1388"].includes(s.id)),
  );
  return (
    <section className="wide-content">
      <div className="breadcrumbs">
        <Link href="/departments">Departments</Link>
        <span>/</span>
        <Link href={`/departments/${dept.slug}`}>{dept.name}</Link>
        <span>/</span>
        <strong>{spec.name}</strong>
      </div>
      <div className="subnav-row">
        <Link href={`/departments/${dept.slug}`} className="back-link">
          <ArrowLeft size={16} /> Return to {dept.name} Department
        </Link>
        <Link href="/students" className="subnav-right">
          View all students →
        </Link>
      </div>
      <article className="specialization-overview">
        <div className="specialization-top">
          <div>
            <div className="spec-title">
              <h1>{spec.name}</h1>
              <span className="tag">{`Specialization under ${dept.name}`}</span>
            </div>
            <p>{spec.description}</p>
          </div>
          <div className="track-box">
            <span className="eyebrow">Department track</span>
            <strong>{spec.track}</strong>
          </div>
        </div>
        <div className="spec-facts">
          <div>
            <span className="eyebrow">Academic lead</span>
            <strong>{spec.lead}</strong>
          </div>
          <div>
            <span className="eyebrow">Primary core lab</span>
            <strong>{spec.lab}</strong>
          </div>
          <div>
            <span className="eyebrow">Total enrollment</span>
            <strong>{spec.enrollment} Active Enrollees</strong>
          </div>
          <div>
            <span className="eyebrow">Curriculum cycle</span>
            <strong>{spec.cycle}</strong>
          </div>
        </div>
      </article>
      <div className="section-heading">
        <h2>
          Students in this Specialization{" "}
          <span className="count-badge">{enrolled.length}</span>
        </h2>
        <span>
          Filtered by Track: <b className="tag">{spec.name}</b>
        </span>
      </div>
      <div className="student-grid specialization-students">
        {enrolled.map((student) => (
          <article className="track-student-card" key={student.id}>
            <div className="track-student-top">
              <div className={`avatar ${student.color}`}>
                {student.initials}
              </div>
              <div className="track-student-name">
                <h3>{student.name}</h3>
                <span>{student.id}</span>
              </div>
              <span className="tag">Year {student.year}</span>
            </div>
            <div className="track-student-bottom">
              <span>{student.specialization}</span>
              <Link href={`/students/${student.id}`}>View profile →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
