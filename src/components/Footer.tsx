import logo from "@/assets/talentmatch-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="TalentMatch AI" className="h-6 w-6" />
            <span className="font-display text-sm font-semibold text-foreground">TalentMatch AI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TalentMatch AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
