import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "We were searching for a good Google Workspace reseller in India. Anutech Digital provided excellent support and service. Highly recommended for businesses looking for reliable cloud solutions.",
    name: "Rajesh Kumar",
    company: "TechMind Solutions",
  },
  {
    quote: "It works great for us. The cost is reasonable. They are the simplest, nicest, and most professional team. Never faced any single problem with Anutech Digital. Excellent service!",
    name: "Priya Sharma",
    company: "Global Exports Ltd.",
  },
  {
    quote: "Anutech Digital is a fantastic company for IT support. We bought our Google Workspace subscription from them and are very satisfied with their services. Highly professional team.",
    name: "Amit Patel",
    company: "Sunrise Enterprises",
  },
  {
    quote: "I had some problems with my website and needed help. Anutech Digital was incredibly fast in resolving my issues and provided great ongoing support. Definitely keeping them as our IT partner.",
    name: "Neha Gupta",
    company: "Creative Works Studio",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            What Our
            <span className="text-gradient block">Clients Say!</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card text-center">
                    <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
                    
                    <p className="text-lg md:text-xl text-foreground/80 font-body leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center">
                        <span className="text-xl font-bold text-primary-foreground">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                        <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary hover:bg-primary transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary hover:bg-primary transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
