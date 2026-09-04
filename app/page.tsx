import Image from "next/image";
import Link from "next/link";
import { BsBuilding, BsMortarboardFill, BsTrophy } from "react-icons/bs";
import { StatCountUp } from "@/components/stat-count-up";
import { HomeHeroSlideshow } from "@/components/home-hero-slideshow";
import { getYearSinceEstablishment } from "@/lib/site-data";

export default function HomePage() {
  const establishmentYears = getYearSinceEstablishment();

  return (
    <>
      <section className="hero-section relative pt-[5.5rem] sm:pt-24 lg:pt-28">
        <HomeHeroSlideshow />

        <div className="site-container relative z-10 flex min-h-[clamp(34rem,72vh,52rem)] items-center justify-center">
          <div className="w-full max-w-4xl px-2 pb-16 text-center text-white">
            <h1 className="hero-copy font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Welcome to Newaz Ali Ideal School
            </h1>
            <p className="hero-copy hero-copy-delay-1 mx-auto mt-5 max-w-2xl text-lg text-white/90 sm:text-xl">
              Empowering minds, shaping futures through excellence in education
            </p>
            <div className="hero-copy hero-copy-delay-2 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-base font-bold text-school-ink shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition-transform hover:-translate-y-0.5"
              >
                <BsMortarboardFill className="mr-2 text-lg text-school-red" />
                Apply for Admission
              </Link>
            </div>
          </div>
        </div>
      </section>

            <section className="site-container py-16">
        <div className="mb-8 text-center">
          <span className="eyebrow justify-center">Impact</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-school-ink sm:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base">
            A quick look at the scale of our community, academic results, and long-term commitment to excellence.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { value: 5000, suffix: "+", label: "Proud graduates" },
            { value: 20, suffix: "+", label: "Teachers" },
            { value: 95, suffix: "%", label: "Student satisfaction" },
            { value: establishmentYears, suffix: "+", label: "Years of Excellence since 2007" },
          ].map((item) => (
            <div key={item.label} className="stat-card h-full">
              <div className="p-6">
                <div className="text-4xl font-extrabold text-school-red">
                  <StatCountUp end={item.value} suffix={item.suffix} />
                </div>
                <div className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-school-muted">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="site-container py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[28px] border border-school-border shadow-soft">
            <Image
              src="/images/students.jpeg"
              alt="Newaz Ali Ideal School students"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">About</span>
            <h2 className="section-title mt-3 font-heading text-4xl font-extrabold text-school-ink">
              Learning with discipline, care, and ambition
            </h2>
            <p className="mt-5 max-w-2xl text-base">
              Newaz Ali Ideal School is committed to building confident students through quality teaching,
              structured support, and an environment that values both excellence and character.
            </p>

            <div className="detail-card mt-6">
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-school-ink">Message from Administration</h3>
                <p className="mt-3">
                  We aim to nurture academic strength and personal responsibility so every student can grow into a
                  capable, thoughtful contributor to the community.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { icon: BsMortarboardFill, title: "Qualified Faculty", copy: "Experienced teachers guiding every class." },
                { icon: BsBuilding, title: "Structured Campus", copy: "A calm, disciplined space for learning." },
                { icon: BsTrophy, title: "Result Focused", copy: "Academic growth with measurable outcomes." },
              ].map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="surface-card p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(176,16,48,0.08)] text-school-red">
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="mt-4 font-heading text-xl font-bold text-school-ink">{feature.title}</h3>
                    <p className="mt-2 text-sm">{feature.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="site-container py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="eyebrow">Principal</span>
            <h2 className="section-title mt-3 font-heading text-4xl font-extrabold text-school-ink">
              Message from the Principal
            </h2>
            <p className="mt-5 max-w-2xl text-base">
              Newaz Ali Ideal School is built on a simple commitment: every student should be seen, supported, and
              challenged to do their best every day.
            </p>

            <div className="detail-card mt-6">
              <div className="p-6">
                <p>
                  We continue to strengthen discipline, academic focus, and character so that our students grow into
                  confident learners and responsible citizens.
                </p>
                <p className="mt-3">
                  With the support of our teachers, parents, and students, we are building a school culture that
                  values knowledge, integrity, and respect.
                </p>
                <p className="mt-5 font-heading text-lg font-bold text-school-ink">Anik Ahmed Emon</p>
                <p className="text-sm">Principal, Newaz Ali Ideal School</p>
              </div>
            </div>
          </div>

          <div className="order-1 overflow-hidden rounded-[28px] border border-school-border shadow-soft lg:order-2">
            <Image
              src="/images/anik-ahmed-emon.jpeg"
              alt="Anik Ahmed Emon, Principal of Newaz Ali Ideal School"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="site-container py-16">
        <div className="callout-banner px-6 py-10 text-center sm:px-10">
          <span className="eyebrow justify-center text-white/90">Admissions</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-white">Join Newaz Ali Ideal School</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            For inquiries and school updates, get in touch with our team and stay connected.
          </p>
          <Link href="/contact" className="mt-6 inline-flex rounded-2xl bg-white px-6 py-3 font-bold text-school-ink">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}


