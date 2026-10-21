export default function Loading() {
  return (
    <section className="wide-content">
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-subtitle" />
      <div className="student-grid">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div className="skeleton skeleton-card" key={n} />
        ))}
      </div>
    </section>
  );
}
