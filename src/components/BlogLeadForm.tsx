import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

const BlogLeadForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem("lead-name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("lead-email") as HTMLInputElement).value.trim(),
      company: (form.elements.namedItem("lead-company") as HTMLInputElement).value.trim(),
      source: "blog-lead-form",
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

  if (submitted) {
    return (
      <div className="mt-16 rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
        <div className="h-10 w-10 rounded-full gradient-cyan flex items-center justify-center mx-auto mb-3">
          <Send className="h-4 w-4 text-accent-foreground" />
        </div>
        <p className="font-display text-lg font-semibold text-foreground">Thanks for subscribing!</p>
        <p className="text-sm text-muted-foreground mt-1">We'll keep you updated with the latest insights.</p>
      </div>
    );
  }

  return (
    <div className="mt-16 rounded-xl border border-border bg-card p-8">
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">Stay Ahead in Talent Intelligence</h3>
      <p className="text-sm text-muted-foreground mb-6">Get the latest insights on AI-powered recruitment delivered to your inbox.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input name="lead-name" type="text" required maxLength={100} placeholder="Name" className="rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors" />
          <input name="lead-email" type="email" required maxLength={255} placeholder="Email" className="rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors" />
          <input name="lead-company" type="text" required maxLength={100} placeholder="Company" className="rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors" />
        </div>
        <button type="submit" disabled={submitting} className="inline-flex items-center justify-center gap-2 rounded-md gradient-cyan px-6 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 hover:shadow-accent/35 transition-all disabled:opacity-60">
          {submitting ? "Submitting..." : "Subscribe"}
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default BlogLeadForm;
