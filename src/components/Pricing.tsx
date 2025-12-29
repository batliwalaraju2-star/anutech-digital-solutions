import { Check } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Starter",
    price: "₹1,499",
    period: "/year",
    description: "Perfect for small websites",
    features: [
      "1 GB Storage",
      "Shared Hosting on Linux Server",
      "Best for Startup Websites",
      "PHP 8.2 & MySQL 8.0",
      "Single Domain Hosting",
      "Email & Phone Support",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "₹2,999",
    period: "/year",
    description: "Ideal for growing businesses",
    features: [
      "5 GB Storage",
      "Shared Hosting on Linux Server",
      "PHP 8.2 & MySQL 8.0",
      "Unmetered Bandwidth",
      "Host 3 Domains",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹4,999",
    period: "/year",
    description: "For high-traffic websites",
    features: [
      "10 GB Storage",
      "Shared Hosting on Linux Server",
      "PHP 8.2 & MySQL 8.0",
      "Unmetered Bandwidth",
      "Host 5 Domains",
      "24/7 Premium Support",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Hosting Plans</span>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Flexible Hosting
            <span className="text-gradient block">Pricing Plans</span>
          </h2>
          
          <p className="text-muted-foreground text-lg font-body">
            All prices include taxes. Choose the plan that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-primary shadow-elegant scale-105"
                  : "border-border shadow-card hover:shadow-elegant hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-muted-foreground mb-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
