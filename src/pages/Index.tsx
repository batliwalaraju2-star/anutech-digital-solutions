import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Anutech Digital - IT Solutions & Google Workspace Reseller in India</title>
        <meta name="description" content="Anutech Digital is a leading IT solutions provider offering Google Workspace, web development, domain & hosting, Microsoft 365, and cloud services in India." />
        <meta name="keywords" content="Google Workspace, IT solutions, web development, domain registration, hosting, Microsoft 365, Zoho, cloud services, India" />
        <link rel="canonical" href="https://anutechdigital.com" />
      </Helmet>
      
      <div className="min-h-screen">
        <TopBar />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Pricing />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
