import { Hero } from './sections/Hero';
import { Navigation } from './sections/Navigation';
import { WhatLexIs } from './sections/WhatLexIs';
import { WhoThisIsFor } from './sections/WhoThisIsFor';
import { HowItWorks } from './sections/HowItWorks';
import { BePartOfIt } from './sections/BePartOfIt';
import { FAQ } from './sections/FAQ';
import { Pricing } from './sections/Pricing';
import { Footer } from './sections/Footer';
import { StickyCTA } from './sections/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - appears on scroll */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* What Lex Is Section */}
        <WhatLexIs />

        {/* Who This Is For Section */}
        <WhoThisIsFor />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Be Part Of It Section */}
        <BePartOfIt />

        {/* FAQ Section */}
        <div id="faq">
          <FAQ />
        </div>

        {/* Pricing Section */}
        <Pricing />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky CTA - appears after scrolling past hero */}
      <StickyCTA />
    </div>
  );
}

export default App;
