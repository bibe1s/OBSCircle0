// components/Airdrop.tsx
import React, { useEffect, useState } from 'react';
import CircularGallery from './CircularGallery';
import TextType from './TextType';
import LetterGlitch from './LetterGlitch';
import DecryptedText from './DecryptedText';
import ShinyText from './ShinyText';

const Airdrop = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      const isDark = htmlElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Check initial theme
    checkTheme();

    // Watch for theme changes using MutationObserver
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen bg-white dark:bg-black overflow-hidden flex items-center justify-center">
        

      {/* Title at the top */}
      <div className="absolute top-25 left-0 right-0 flex justify-center z-20">
        
        <h1 >
            <div className="
            relative px-16 py-6 
            bg-black/15 dark:bg-white/8
            backdrop-blur-sm
            border border-white/25
            rounded-full
            shadow-lg shadow-black/15
            cursor-default select-none
            ">
            <ShinyText text="Airdrop's" disabled={false} speed={5} className="text-5xl" />
            </div>
        
        </h1>
      </div>

        <LetterGlitch 
        glitchSpeed={100}
        centerVignette={false}
        outerVignette={true}
        topBottomVignette={true}
        vignetteStrength={1}
        isDarkMode={isDarkMode} // Pass theme state
        smooth={false}
        />
      
      
      {/* CircularGallery responsive container - centered */}
      <div className="absolute inset-0 flex items-center justify-center">

        
        <div className="w-full h-[600px] sm:h-[600px] md:h-[600px] lg:h-[600px] xl:h-[700px] flex items-center justify-center">
          <CircularGallery 
            bend={0}
            textColor="white"
            borderRadius={0.05} 
            scrollEase={0.02}
            scrollSpeed={1.5}
          />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-black/5 dark:bg-white/5 rounded-full blur-xl animate-pulse z-10" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-black/5 dark:bg-white/5 rounded-full blur-xl animate-pulse delay-1000 z-10" aria-hidden="true"></div>
      <div className="absolute top-1/2 right-5 w-16 h-16 bg-black/5 dark:bg-white/5 rounded-full blur-xl animate-pulse delay-500 z-10" aria-hidden="true"></div>
    </section>
  );
};

export default Airdrop;