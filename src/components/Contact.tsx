import { MapPin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Contact</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in our research or potential collaboration? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">Location</h3>
              <p className="text-muted-foreground leading-relaxed">
                McAdams Hall<br />
                821 McMillan Rd<br />
                Clemson University<br />
                Clemson, SC 29634
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
                <Mail className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">Email</h3>
              <p className="text-muted-foreground mb-2">
                For inquiries, please contact:
              </p>
              <a 
                href="mailto:prodegh@clemson.edu" 
                className="text-primary hover:underline font-medium"
              >
                prodegh@clemson.edu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
