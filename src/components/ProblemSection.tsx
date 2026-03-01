import { Clock, AlertTriangle, Users } from "lucide-react";

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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-lg border border-border bg-background/50"
            >
              <problem.icon className="h-5 w-5 text-accent" />
              <h3 className="font-display font-semibold text-foreground">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
