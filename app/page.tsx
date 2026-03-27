import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ReviewsCarousel from "@/components/ReviewsCarousel";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <ExperienceSection />
      <div className="section-divider" />
      <SkillsSection />
      <div className="section-divider" />
      <FeaturedProjects />
      <div className="section-divider" />
      <ReviewsCarousel />
    </>
  );
}
