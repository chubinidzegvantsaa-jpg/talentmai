import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto rounded-2xl gradient-dark p-12 md:p-16 text-center overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/5 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Join 500+ companies using TalentMatch AI to build exceptional teams. Start your free trial today.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md gradient-cyan px-8 py-3 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
