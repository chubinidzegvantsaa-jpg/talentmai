import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/talentmatch-logo.png";
import RequestDemoModal from "@/components/RequestDemoModal";

const Navbar = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="TalentMatch AI" className="h-8 w-8" />
            <span className="font-display text-lg font-bold text-foreground">TalentMatch AI</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="/#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Problem</a>
            <a href="/#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Solution</a>
            <a href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <button
            onClick={() => setDemoOpen(true)}
            className="hidden md:inline-flex items-center justify-center rounded-md gradient-cyan px-4 py-2 text-sm font-medium text-accent-foreground shadow-lg shadow-accent/20 hover:shadow-accent/35 transition-all"
          >
            Request Demo
          </button>
        </div>
      </nav>
      <RequestDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
};

export default Navbar;
