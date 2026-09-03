export default function ContactPage() {
  return (
    <div className="site-container py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center font-heading text-4xl font-extrabold text-school-ink">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-school-muted">
          We'd love to hear from you. Get in touch with us.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="surface-card lg:col-span-2">
            <div className="p-6">
              <h2 className="font-heading text-2xl font-bold text-school-ink">Get in Touch</h2>
              <div className="mt-6 space-y-4 text-school-muted">
                <div>123 School Street, City, Country</div>
                <div>+123 456 7890</div>
                <div>info@school.com</div>
              </div>

              <div className="mt-8 border-t border-school-border pt-6">
                <h3 className="font-heading text-xl font-bold text-school-ink">Weekly Schedule:</h3>
                <div className="mt-3 space-y-2 text-school-muted">
                  <p>Open Saturday through Thursday.</p>
                  <p>Saturday - Wednesday: 8:00 AM - 4:00 PM</p>
                  <p>Thursday: 8:00 AM - 1:00 PM</p>
                  <p>Friday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="surface-card lg:col-span-3">
            <div className="p-6">
              <h2 className="font-heading text-2xl font-bold text-school-ink">Send us a Message</h2>
              <p className="mt-3 text-sm text-school-muted">
                Messages are sent to the school office email once it is configured.
              </p>

              <form className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-school-ink">
                    Your Name
                  </label>
                  <input id="name" name="name" type="text" className="w-full rounded-xl border border-school-border bg-white px-4 py-3 outline-none transition focus:border-school-red" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-school-ink">
                    Your Email
                  </label>
                  <input id="email" name="email" type="email" className="w-full rounded-xl border border-school-border bg-white px-4 py-3 outline-none transition focus:border-school-red" />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-school-ink">
                    Subject
                  </label>
                  <input id="subject" name="subject" type="text" className="w-full rounded-xl border border-school-border bg-white px-4 py-3 outline-none transition focus:border-school-red" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-school-ink">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={5} className="w-full rounded-xl border border-school-border bg-white px-4 py-3 outline-none transition focus:border-school-red" />
                </div>
                <button type="submit" className="w-full rounded-2xl bg-school-red px-6 py-3.5 font-bold text-white transition hover:bg-school-redDark">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
