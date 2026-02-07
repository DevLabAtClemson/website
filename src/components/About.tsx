const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              About
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Empirical Software Engineering Research
            </h2>
          </div>

          <div className="bg-background rounded-2xl p-8 md:p-12 border border-border">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              DevLab@Clemson is a software engineering research lab in Clemson University&apos;s
              School of Computing, directed by Dr. Paige Rodeghero. We study how developers build,
              understand, and collaborate on software, with a focus on the tools and practices
              used in modern software development.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
             Our work focuses on developer productivity, onboarding and learning, code comprehension, and human-centered tools for modern software development—particularly in contexts shaped by AI assistance, accessibility needs, and remote collaboration. We design, build, and empirically study systems that support real developers, with the goal of improving how software is learned, practiced, and maintained at scale.
            </p>

            <p className="text-xs text-muted-foreground">
  We collaborate with academic and industry partners on applied software engineering research.
</p>
          <p className="text-xs text-muted-foreground">
  Research supported by the National Science Foundation (NSF) and Clemson University.
</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
