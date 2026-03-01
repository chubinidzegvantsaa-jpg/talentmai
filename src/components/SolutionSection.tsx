import { Zap, Brain, Target } from "lucide-react";

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">The Solution</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            AI That Understands Talent
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our proprietary algorithms go beyond keyword matching to deeply understand skills, potential, and culture fit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Brain,
              title: "Deep Analysis",
              description: "NLP-powered resume parsing that understands context, not just keywords. Our models evaluate experience depth and transferable skills.",
            },
            {
              icon: Target,
              title: "Precision Matching",
              description: "Multi-dimensional scoring across technical skills, soft skills, and cultural alignment to find candidates who truly fit.",
            },
            {
              icon: Zap,
              title: "Instant Results",
              description: "Process thousands of applications in minutes. Get ranked shortlists with detailed fit reports for every candidate.",
            },
          ].map((item) => (
            <div key={item.title} className="relative group p-8 rounded-xl border border-border bg-card hover:border-accent/40 transition-all hover:shadow-lg hover:shadow-accent/5">
              <div className="h-12 w-12 rounded-lg gradient-cyan flex items-center justify-center mb-5">
                <item.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
