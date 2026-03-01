import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px"
      }} />
      
      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 mb-8 animate-fade-in-up">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
          <span className="text-sm font-medium text-accent">AI-Powered Talent Intelligence</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.1] animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Hire Smarter with{" "}
          <span className="text-gradient-cyan">Algorithmic</span>{" "}
          Precision
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          TalentMatch AI analyzes thousands of candidates in seconds, surfacing the best-fit talent for your roles with unmatched accuracy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md gradient-cyan px-8 py-3 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all"
          >
            Request a Demo
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#solution"
            className="inline-flex items-center gap-2 rounded-md border border-border px-8 py-3 text-base font-medium text-foreground hover:bg-muted transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "94%", label: "Match Accuracy" },
            { value: "10x", label: "Faster Screening" },
            { value: "500+", label: "Enterprise Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
