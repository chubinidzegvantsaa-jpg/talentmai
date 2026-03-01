import { AlertTriangle, Clock, Users, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Time-Consuming Screening",
    description: "Recruiters spend 23 hours on average screening resumes for a single hire.",
  },
  {
    icon: AlertTriangle,
    title: "Unconscious Bias",
    description: "Manual review introduces bias, leading to homogeneous teams and missed talent.",
  },
  {
    icon: Users,
    title: "Candidate Overload",
    description: "Job postings attract hundreds of applications, most irrelevant to the role.",
  },
  {
    icon: TrendingDown,
    title: "Poor Retention Rates",
    description: "Bad-fit hires cost companies up to 30% of the employee's annual salary.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">The Problem</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground">
            Traditional Hiring is Broken
          </h2>
          <p className="mt-4 text-muted-foreground">
            Companies lose thousands of hours and millions of dollars on inefficient, biased recruiting processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="flex gap-4 p-6 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:border-accent/30 transition-colors"
            >
              <div className="flex-shrink-0 mt-1">
                <problem.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
