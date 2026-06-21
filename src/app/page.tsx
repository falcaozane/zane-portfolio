import About from "@/components/About";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import PostOfRes from "@/components/PostOfRes";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import Achievements from "@/components/Achievements";


export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <div className="sticky top-0 z-50 backdrop-blur-sm bg-sys-background/70 shadow-sm border-b border-sys-border/40">
        <Header />
      </div>
      <Socials />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <PostOfRes />
      <Certifications />
      <Education />
      <Footer />
    </>
  );
}
