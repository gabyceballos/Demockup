import About from "@/components/About";
import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import Testimonial from "@/components/Testimonial";
import DemockupLayout from "@/layout/DemockupLayout";


//pagina de inicio
export default function Home() {
  return (
    <DemockupLayout onePageMenu={true} header={1} footer={2}>
      {/* Hero Section Start */}
      <Hero />
      {/* Hero Section End */}
      {/* About Area start */}
      <About />
      {/* About Area end */}
      {/* Resume Area start */}
      <Resume />
      {/* Resume Area end */}
      {/* Services Area start */}
      <Services />
      {/* Services Area end */}
      {/* Skill Area start */}
      <Skill />
      {/* Skill Area end */}
      {/* Projects Area start */}
      <Projects />
      {/* Projects Area end */}
      {/* Contact Area start */}
      <Contact />
      {/* Contact Area end */}
      {/* Blog Area start */}
      <Blog />
      {/* Blog Area end */}

    </DemockupLayout>
    
  );
}
