import { Linkedin, Mail, GraduationCap, ExternalLink, User } from "lucide-react";

const Team = () => {
  const director = {
    name: "Dr. Paige Rodeghero",
    role: "Lab Director",
    title: "Associate Professor & Dean's Professor",
    image: "/profiles/paige.jpg",
    specialization: "Developer Productivity & Human Factors",
    website: "https://paigerodeghero.com/",
    email: "prodegh@clemson.edu",
  };

  const phdStudents = [
    {
      name: "Khairatun Hissan",
      role: "PhD Student",
      image: "/profiles/hissan.jpg",
    },
    {
      name: "Manoj Sankuru",
      role: "PhD Student",
      image: "/profiles/manoj.jpeg",
    },
  ];

  const undergrads = [
    {
      name: "Ryon Peddapalli",
      role: "Undergraduate Researcher",
      image: "/profiles/ryon.jpg",
    },
    {
      name: "Hazel Torek",
      role: "Undergraduate Researcher",
      image: "/profiles/hazel.jpg",
    },
    {
      name: "Charles Lai",
      role: "Undergraduate Researcher",
      image: "/profiles/charles.jpeg",
    },
    {
      name: "Veer Patel",
      role: "Undergraduate Researcher",
      image: "/profiles/veer.jpg",
    },
    {
      name: "Dylan Kauffman",
      role: "Undergraduate Researcher",
      image: "/profiles/dylan.jpeg",
    },
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Team</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Meet the Researchers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team brings together expertise in software engineering, human-computer interaction, 
              and empirical research methods.
            </p>
          </div>

          {/* Director Card - Featured */}
          <div className="mb-16">
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative">
                  <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-primary/20">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full whitespace-nowrap">
                    {director.role}
                  </div>
                </div>

                <div className="text-center sm:text-left flex-1">
                  <h3 className="font-heading font-semibold text-2xl text-foreground mb-1">
                    {director.name}
                  </h3>
                  <p className="text-muted-foreground mb-2">{director.title}</p>
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-accent/50 rounded-full mb-4">
                    <GraduationCap className="w-3 h-3 text-accent-foreground" />
                    {director.specialization && (
                      <span className="text-xs text-accent-foreground">{director.specialization}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Previously a Visiting Researcher at Microsoft Research. Industry experience at a startup and medium-sized companies. PhD from University of Notre Dame.
                  </p>

                  <div className="flex justify-center sm:justify-start gap-3">
                    <a 
                      href={director.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </a>
                    <a 
                      href={`mailto:${director.email}`}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Mail className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/paige-rodeghero/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PhD Students */}
          <div className="mb-12">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6 text-center">
              PhD Students
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              {phdStudents.map((member, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-10 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-muted group-hover:ring-primary/20 transition-all">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <User className="w-10 h-10 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                   <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full whitespace-nowrap">
  {member.role}
</div>
                  </div>

                  <div className="text-center">
                    <h4 className="font-heading font-semibold text-xl text-foreground mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{member.specialization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Undergraduate Researchers */}
          <div>
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6 text-center">
              Undergraduate Researchers
            </h3>
            <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {undergrads.map((member, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative mb-5">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-muted group-hover:ring-primary/20 transition-all">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                   <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-accent text-accent-foreground text-xs font-medium rounded-full whitespace-nowrap">
  {member.role}
</div>
                  </div>

                  <div className="text-center">
                    <h4 className="font-heading font-medium text-lg text-foreground mb-1">
                      {member.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{member.specialization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
