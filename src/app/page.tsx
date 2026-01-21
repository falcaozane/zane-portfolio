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


export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <div className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 shadow-sm">
        <Header />
      </div>
      <Socials />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <PostOfRes />
      <Certifications />
      <Education />
      <Footer />
    </>
  );
}
