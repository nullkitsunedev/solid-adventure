import Image from "next/image";

const teachers = [
  {
    name: "Anik Ahmed Emon",
    post: "Principal",
    image: "/images/anik-ahmed-emon.jpeg",
    featured: true,
  },
  {
    name: "Abul Bashar",
    post: "Teacher",
    placeholder: false,
  },
  {
    name: "Amir Hossain",
    post: "Teacher",
    image: "/teacher/amir-hossain.png",
    featured: true,
  },
  {
    name: "Ayub Ali",
    post: "Teacher",
    image: "/teacher/ayub%20ali.jpg",
    featured: true,
  },
  {
    name: "Teacher Name",
    post: "Teacher",
    placeholder: true,
  },
  {
    name: "Teacher Name",
    post: "Teacher",
    placeholder: true,
  },
  {
    name: "Teacher Name",
    post: "Teacher",
    placeholder: true,
  },
  {
    name: "Teacher Name",
    post: "Teacher",
    placeholder: true,
  },
];

export default function TeachersPage() {
  return (
    <div className="site-container py-16">
      <div className="mx-auto max-w-4xl text-center">
        <span className="eyebrow">Teachers</span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-school-ink sm:text-5xl">Our Teachers</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-school-muted">
          Meet the teachers who guide our students with care, discipline, and steady support.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {teachers.map((teacher, index) => (
          <article
            key={`${teacher.name}-${teacher.post}-${index}`}
            className="detail-card overflow-hidden"
          >
            {teacher.featured ? (
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={teacher.image} alt={teacher.name} fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,17,17,0.7)] via-[rgba(17,17,17,0.12)] to-transparent" />
              </div>
            ) : teacher.placeholder ? (
              <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(135deg,rgba(176,16,48,0.08),rgba(17,17,17,0.04))]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-2xl font-bold tracking-[0.18em] text-school-ink/20">COMING SOON</span>
                </div>
              </div>
            ) : (
              <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,248,250,0.98))]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(176,16,48,0.08),transparent_56%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-school-border bg-white font-heading text-2xl font-bold text-school-red shadow-sm">
                    {teacher.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                </div>
              </div>
            )}
            <div className="p-5 text-center">
              <h2 className="font-heading text-xl font-bold text-school-ink">{teacher.name}</h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-school-red">{teacher.post}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
