import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { IdeaProcessor } from "@/components/IdeaProcessor";
import { Footer } from "@/components/Footer";

const Index = () => {
  const handleGetStarted = () => {
    const processorSection = document.getElementById('processor');
    if (processorSection) {
      processorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onGetStarted={handleGetStarted} />
      <HowItWorks />
      <IdeaProcessor />
      <Footer />
    </div>
  );
};

export default Index;
