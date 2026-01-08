const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-primary rounded-lg rotate-6" />
                <div className="absolute inset-0 bg-background/20 rounded-lg -rotate-3" />
                <div className="relative w-full h-full bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-xl">D</span>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-lg">DevLab</span>
                <span className="text-xs text-primary font-semibold tracking-wide">@Clemson</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8 text-sm">
              <a href="#about" className="text-background/70 hover:text-primary transition-colors">
                About
              </a>
              <a href="#team" className="text-background/70 hover:text-primary transition-colors">
                Team
              </a>
              <a href="#publications" className="text-background/70 hover:text-primary transition-colors">
                Publications
              </a>
              <a href="#contact" className="text-background/70 hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="border-t border-background/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2026 DevLab@Clemson. Clemson University. All rights reserved.</p>
            <p>
              School of Computing, College of Engineering, Computing and Applied Sciences
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
