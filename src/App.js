import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home-page';
import DevelopmentSkillsSection from './components/DevelopmentSkillsSection';
import FadeUp from './components/Animations/FadeUp';
import AnimatedLine from './components/Animations/AnimatedLine';
import DesigningSkillsSection from './components/DesigningSkillsSection';
import AndSectionDivider from './components/AndSectionDivider';
import StoryDevelopment from './components/StoryDevelopment';
import BioSection from './components/BioSection';
import ExperienceSectionDivider from './components/ExperienceSectionDivider';
import ExperienceSection from './components/ExperienceSection';
import GithubProjectsSection from './components/GithubProjectsSection';
import FooterSection from './components/FooterSection';


function App() {
  return (
    <>
      <HomePage />
      <BioSection />
      <DevelopmentSkillsSection />
      <AndSectionDivider />
      <DesigningSkillsSection />
      <ExperienceSectionDivider />
      <ExperienceSection />
      <GithubProjectsSection />
      <FooterSection />
    </>
  );
}

export default App;
