import Link from "next/link";
import { notFound } from "next/navigation";
import {
  departments,
  students,
  specializations,
  getDepartment,
} from "@/data/students";
import StudentCard from "@/components/StudentCard";
export function generateStaticParams() {
  return departments.map((d) => ({ department: d.slug }));
}
export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ department: string }>;
}) {
  const { department: slug } = await params;
  const department = getDepartment(slug);
  if (!department) notFound();
  const enrolled = students.filter((s) => s.departmentSlug === slug);
  const specs = specializations.filter((s) => s.departmentSlug === slug);
  return (
    <section className="wide-content">
      <div className="breadcrumbs">
        <Link href="/departments">Departments</Link>
        <span>/</span>
        <strong>{department.name}</strong>
      </div>
      <div className="page-heading">
        <div>
          <h1>{department.name}</h1>
          <p>{department.description}</p>
        </div>
        <span className="active-faculties">
          <i /> Department overview
        </span>
      </div>
      <div className="department-summary">
        <div>
          <span className="eyebrow">Specializations</span>
          <strong>{department.specializations}</strong>
        </div>
        <div>
          <span className="eyebrow">Total enrollment</span>
          <strong>{department.enrolled} Students</strong>
        </div>
        <div>
          <span className="eyebrow">Directory records</span>
          <strong>{enrolled.length} Sample profiles</strong>
        </div>
      </div>
      <div className="section-heading">
        <h2>Specializations</h2>
        <span>{specs.length} tracks</span>
      </div>
      <div className="specialization-grid">
        {specs.map((spec) => (
          <Link
            className="specialization-card"
            key={spec.slug}
            href={`/departments/${slug}/${spec.slug}`}
          >
            <span className="eyebrow">{spec.track}</span>
            <h3>{spec.name}</h3>
            <p>{spec.description}</p>
            <span className="text-link">Explore specialization →</span>
          </Link>
        ))}
      </div>
      <div className="section-heading">
        <h2>Students in {department.name}</h2>
        <span>{enrolled.length} profiles</span>
      </div>
      <div className="student-grid">
        {enrolled.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
      <div className="bottom-link">
        <Link href="/departments">← Back to all departments</Link>
      </div>
    </section>
  );
}
