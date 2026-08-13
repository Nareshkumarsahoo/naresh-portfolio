import { useState } from 'react';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { PhilosophySection } from './components/sections/PhilosophySection';
import { TechStackSection } from './components/sections/TechStackSection';
import { FeaturedProjectsSection } from './components/sections/FeaturedProjectsSection';
import { JourneySection } from './components/sections/JourneySection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { GithubSection } from './components/sections/GithubSection';
import { CurrentFocusSection } from './components/sections/CurrentFocusSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { ProjectModal } from './components/ui/ProjectModal';
import { ResumeViewerModal } from './components/ui/ResumeViewerModal';
import { EasterEgg } from './components/ui/EasterEgg';
import type { Project } from './lib/data/portfolioData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 relative selection:bg-cyan-500 selection:text-black">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Easter Egg Listener */}
      <EasterEgg />

      {/* Floating Header Navbar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Page Content */}
      <main className="relative z-10">
        <HeroSection onOpenResume={() => setResumeModalOpen(true)} />
        <AboutSection />
        <PhilosophySection />
        <TechStackSection />
        <FeaturedProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <JourneySection />
        <AchievementsSection />
        <GithubSection />
        <CurrentFocusSection />
        <ResumeSection onOpenResume={() => setResumeModalOpen(true)} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume Viewer Modal */}
      <ResumeViewerModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
