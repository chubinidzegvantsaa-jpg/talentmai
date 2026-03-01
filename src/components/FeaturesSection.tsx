import { BarChart3, Shield, Workflow } from "lucide-react";

const features = [
  { icon: BarChart3, title: "Analytics Dashboard", description: "Real-time hiring pipeline analytics with actionable insights." },
  { icon: Shield, title: "Bias Detection", description: "Built-in bias auditing tools ensure fair, equitable hiring." },
  { icon: Workflow, title: "ATS Integration", description: "Seamless integration with Greenhouse, Lever, Workday, and more." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Features</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Built for Enterprise Recruiting
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors">
              <feature.icon className="h-5 w-5 text-accent mb-4" />
              <h3 className="font-display font-semibold text-card-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
