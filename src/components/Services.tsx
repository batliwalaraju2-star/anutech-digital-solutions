import { Globe, Code, Cloud, Mail, Briefcase, Server } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Domain Services",
    description: "We offer a wide range of domain services including domain registration, domain name search, domain parking, and more.",
  },
  {
    icon: Server,
    title: "Web Hosting",
    description: "Our web hosting services are designed for everyone. We offer a variety of web hosting plans to meet your needs.",
  },
  {
    icon: Code,
    title: "Web Design & Development",
    description: "Designing and developing a website can be daunting. Our experienced professionals will get your website running perfectly.",
  },
  {
    icon: Cloud,
    title: "Google Workspace",
    description: "Get access to Gmail, Google Drive, Google Calendar, Google Meet, Google Docs, Sheets, and Forms for your business.",
  },
  {
    icon: Mail,
    title: "Microsoft 365",
    description: "Microsoft 365 provides a comprehensive suite of productivity tools and services for businesses of all sizes.",
  },
  {
    icon: Briefcase,
    title: "Zoho Workspace",
    description: "Zoho Workspace is a cloud-based productivity suite that provides a range of tools to improve productivity and collaboration.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We Offer a Wide
            <span className="text-gradient block">Variety of Services</span>
          </h2>
          
          <p className="text-muted-foreground text-lg font-body">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
