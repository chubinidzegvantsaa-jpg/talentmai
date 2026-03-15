import { useState, FormEvent } from "react";
import { X, Send } from "lucide-react";

interface RequestDemoModalProps {
  open: boolean;
  onClose: () => void;
}

const RequestDemoModal = ({ open, onClose }: RequestDemoModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem("demo-name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("demo-email") as HTMLInputElement).value.trim(),
      company: (form.elements.namedItem("demo-company") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("demo-message") as HTMLTextAreaElement).value.trim(),
    };
    try {
      await fetch("https://hook.eu1.make.com/knooqa8qv75yfh722qhyxaha22ducte5", {
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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-lg mx-4 rounded-lg border border-border bg-background p-8 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors">
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="h-12 w-12 rounded-full gradient-cyan flex items-center justify-center mx-auto mb-4">
              <Send className="h-5 w-5 text-accent-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Request Received!</h3>
            <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Request a Demo</h3>
            <p className="text-sm text-muted-foreground mb-6">See how TalentMatch AI can transform your hiring process.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input id="demo-name" name="demo-name" type="text" required maxLength={100} placeholder="John Doe" className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors" />
                </div>
                <div>
                  <label htmlFor="demo-email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input id="demo-email" name="demo-email" type="email" required maxLength={255} placeholder="john@company.com" className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors" />
                </div>
              </div>
              <div>
                <label htmlFor="demo-company" className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                <input id="demo-company" name="demo-company" type="text" required maxLength={100} placeholder="Acme Corp" className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors" />
              </div>
              <div>
                <label htmlFor="demo-message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea id="demo-message" name="demo-message" rows={3} required maxLength={1000} placeholder="Tell us about your hiring needs..." className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none" />
              </div>
              <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 rounded-md gradient-cyan px-6 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 hover:shadow-accent/35 transition-all disabled:opacity-60">
                {submitting ? "Sending..." : "Submit Request"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RequestDemoModal;
