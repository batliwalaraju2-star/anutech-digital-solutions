import { CheckCircle2 } from "lucide-react";

const stats = [
  { number: "2500+", label: "Happy Customers" },
  { number: "500+", label: "Domains Registered" },
  { number: "200+", label: "Websites Delivered" },
  { number: "10+", label: "Years Experience" },
];

const features = [
  "Google Workspace Certified Experts",
  "24/7 Customer Support",
  "Affordable Pricing Plans",
  "Secure & Reliable Services",
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Anutech Digital</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              What We Promise
              <span className="text-gradient block">High Quality Solutions</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 font-body leading-relaxed">
              Anutech Digital is a leading IT solutions provider helping businesses thrive by delivering innovative technology solutions. We specialize in Google Workspace, web development, domain & hosting, and cloud solutions with a commitment to excellence.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Experience Badge */}
            <div className="inline-flex items-center gap-4 bg-secondary rounded-2xl p-4 pr-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">10+</span>
              </div>
              <div>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Years of</span>
                <p className="text-lg font-bold text-foreground">Experience</p>
              </div>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
