import { useEffect, useMemo } from 'react';
import { GridPointerField } from './components/GridPointerField';
import { NavBar } from './components/NavBar';
import { getProfileData } from './data/profile';
import { useActiveSection } from './hooks/useActiveSection';
import { useLanguage } from './hooks/useLanguage';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import { useTheme } from './hooks/useTheme';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { EducationSection } from './sections/EducationSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { FooterSection } from './sections/FooterSection';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const profileData = useMemo(() => getProfileData(language), [language]);
  const sectionIds = useMemo(
    () => profileData.navigation.map((item) => item.id),
    [profileData.navigation],
  );
  const activeId = useActiveSection(sectionIds);

  useRevealOnScroll();

  useEffect(() => {
    document.title = profileData.seo.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', profileData.seo.description);
    }
  }, [profileData.seo.description, profileData.seo.title]);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <GridPointerField />

      <div className="tech-atmosphere" aria-hidden="true" />
      <div className="tech-grid" aria-hidden="true" />

      <NavBar
        branding={profileData.branding}
        navItems={profileData.navigation}
        activeId={activeId}
        theme={theme}
        onToggleTheme={toggleTheme}
        language={language}
        onToggleLanguage={toggleLanguage}
        ui={profileData.ui}
      />

      <main className="relative">
        <HeroSection hero={profileData.hero} links={profileData.links} />
        <AboutSection data={profileData.sections.about} />
        <ExperienceSection data={profileData.sections.experience} />
        <ProjectsSection data={profileData.sections.projects} />
        <SkillsSection data={profileData.sections.skills} />
        <EducationSection data={profileData.sections.education} />
        <ContactSection data={profileData.sections.contact} />
      </main>

      <FooterSection text={profileData.footer.text} backToTopLabel={profileData.ui.backToTopLabel} />
    </div>
  );
}

export default App;
