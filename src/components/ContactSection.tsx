import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      company: (form.elements.namedItem("company") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };
    try {
      await fetch("https://hook.eu1.make.com/6sxm4ngjvaxppl5dl6lh9oqb2dfaj40g", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Contact</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground">
              Get in Touch
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us about your hiring challenges. We'll show you how TalentMatch AI can help.
            </p>
          </div>

          {submitted ? (
            <div className="text-center p-12 rounded-xl border border-accent/30 bg-accent/5">
              <div className="h-12 w-12 rounded-full gradient-cyan flex items-center justify-center mx-auto mb-4">
                <Send className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Work Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                <input
                  id="company"
                  type="text"
                  required
                  placeholder="Acme Corp"
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Tell us about your hiring needs..."
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md gradient-cyan px-6 py-3 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/20 hover:shadow-accent/35 transition-all disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
