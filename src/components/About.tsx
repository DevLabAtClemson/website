const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">About Us</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Research with Real-World Impact
            </h2>
          </div>

          <div className="bg-background rounded-2xl p-8 md:p-12 border border-border">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              DevLab@Clemson is a research laboratory at Clemson University's School of Computing, 
              led by Dr. Paige Rodeghero. We investigate how developers learn, work, and collaborate—especially 
              in remote and distributed environments.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              What sets us apart is our focus on <span className="text-foreground font-medium">practical impact over theory</span>. 
              Dr. Rodeghero brings firsthand industry experience from working as a software engineer at a startup 
              and multiple medium-sized companies. This background shapes our research approach: we study real problems 
              that affect real developers and create solutions that can be adopted in practice.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our work spans developer productivity, onboarding, source code comprehension, 
              virtual reality for programming, and making software development more accessible for everyone. 
              We combine rigorous empirical methods with a commitment to research that matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
