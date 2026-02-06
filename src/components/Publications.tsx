import { ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Publications = () => {
  return (
    <section id="publications" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">Publications</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Our Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Our work has been published in top-tier software engineering venues. 
            For the most up-to-date list of publications, please visit Google Scholar.
          </p>

          {/* Google Scholar Card */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">
              View All Publications
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Browse our complete publication list, citation metrics, and download papers directly from Google Scholar.
            </p>
            <Button size="lg" asChild>
              <a 
                href="https://scholar.google.com/citations?user=vTZVpdqxruwC&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                View on Google Scholar
              </a>
            </Button>
          </div>

          {/* Selected Topics */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 text-sm font-medium rounded-full bg-muted text-muted-foreground">
              Developer Productivity
            </span>
            <span className="px-4 py-2 text-sm font-medium rounded-full bg-muted text-muted-foreground">
              Software Engineering and AI
            </span>
            <span className="px-4 py-2 text-sm font-medium rounded-full bg-muted text-muted-foreground">
               Onboarding
            </span>
            <span className="px-4 py-2 text-sm font-medium rounded-full bg-muted text-muted-foreground">
              Code Comprehension
            </span>
            <span className="px-4 py-2 text-sm font-medium rounded-full bg-muted text-muted-foreground">
              Eye-Tracking Studies
            </span>
            <span className="px-4 py-2 text-sm font-medium rounded-full bg-muted text-muted-foreground">
              VR for Programming
            </span>
            <span className="px-4 py-2 text-sm font-medium rounded-full bg-muted text-muted-foreground">
              Software Accessibility
            </span>
             <span className="px-4 py-2 text-sm font-medium rounded-full bg-muted text-muted-foreground">
              Software Engineering Education
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
