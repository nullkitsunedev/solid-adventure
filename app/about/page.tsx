export default function AboutPage() {
  return (
    <div className="site-container py-16">
      <div className="mx-auto max-w-4xl text-center">
        <span className="eyebrow">About</span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-school-ink">About Our School</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-school-muted">
          Established in 2007, Newaz Ali Ideal School serves primary and lower-secondary learners with a strong focus
          on academic progress, discipline, and character development.
        </p>
      </div>

      <div className="detail-card mx-auto mt-10 max-w-5xl">
        <div className="p-6 lg:p-8">
          <p>
            Newaz Ali Ideal School is committed to building confident, responsible learners through structured
            teaching, attentive support, and a school culture that values both achievement and good conduct. Our
            approach is designed to help every student grow steadily in the classroom and beyond it.
          </p>
          <p className="mt-4">
            Since its establishment in 2007, the school has continued to develop as a trusted educational environment
            for young learners. We combine classroom learning with practical experiences, co-curricular participation,
            and a disciplined atmosphere that supports steady progress.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Established in 2007",
            copy: "A school built on steady growth, care, and long-term commitment.",
          },
          {
            title: "Primary & Lower-Secondary",
            copy: "Focused learning for early grades with guided academic support.",
          },
          {
            title: "Co-curricular Life",
            copy: "Annual sports competitions and the Newaz Ali Ideal School Premier League (NPL).",
          },
        ].map((item) => (
          <div key={item.title} className="surface-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(176,16,48,0.08)] text-school-red">
              <span className="font-heading text-xl font-bold">NA</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-school-ink">{item.title}</h2>
            <p className="mt-2">{item.copy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
