import Link from "next/link";
import { ArrowRight, CircleAlert } from "lucide-react";
export default function NotFound() {
  return (
    <section className="not-found">
      <div className="breadcrumbs">
        <Link href="/students">Directory</Link>
        <span>/</span>
        <strong>Not Found</strong>
      </div>
      <div className="not-found-center">
        <span className="error-code">
          <CircleAlert size={14} fill="currentColor" /> 404 · ROUTE NOT FOUND
        </span>
        <h1>Student or department not found</h1>
        <p>
          The requested directory entry or path could not be located. It may
          have moved or the identifier might be invalid.
        </p>
        <div className="not-found-actions">
          <Link className="primary-button" href="/students">
            Return to Students Directory
          </Link>
          <Link className="secondary-button" href="/departments">
            Browse All Departments
          </Link>
        </div>
        <div className="suggested-routes">
          <div>
            <strong>SUGGESTED STARTING POINTS</strong>
            <span>Internal Routes</span>
          </div>
          <Link href="/departments/computer-science">
            <span>Computer Science Department</span>
            <span>
              /departments/computer-science <ArrowRight size={17} />
            </span>
          </Link>
          <Link href="/students">
            <span>Students Directory</span>
            <span>
              /students <ArrowRight size={17} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
