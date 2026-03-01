import { BarChart3, Shield, Globe, Workflow, LineChart, Lock } from "lucide-react";

const features = [
  { icon: BarChart3, title: "Analytics Dashboard", description: "Real-time hiring pipeline analytics with actionable insights." },
  { icon: Shield, title: "Bias Detection", description: "Built-in bias auditing tools ensure fair, equitable hiring." },
  { icon: Globe, title: "Multi-Language Support", description: "Parse and match resumes in 40+ languages globally." },
  { icon: Workflow, title: "ATS Integration", description: "Seamless integration with Greenhouse, Lever, Workday, and more." },
  { icon: LineChart, title: "Predictive Success", description: "ML models predict candidate performance and retention probability." },
  { icon: Lock, title: "Enterprise Security", description: "SOC 2 Type II certified with end-to-end data encryption." },
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
          <p className="mt-4 text-muted-foreground">
            Everything your talent acquisition team needs to hire faster, smarter, and fairer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
