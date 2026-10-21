import SearchStudents from "@/components/SearchStudents";
import { departments, students } from "@/data/students";
export default function StudentsPage() {
  return (
    <section className="wide-content">
      <div className="page-heading">
        <div>
          <h1>Students</h1>
          <p>Browse students and view their profiles.</p>
        </div>
      </div>
      <SearchStudents
        students={students}
        departments={departments.map((d) => d.name)}
      />
    </section>
  );
}
