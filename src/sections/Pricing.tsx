import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Crown } from 'lucide-react';

interface PricingTier {
  price: string;
  name: string;
  tierLabel: string;
  benefits: string[];
  ctaText: string;
  accentColor: 'blue' | 'orange' | 'purple';
  colorFact: string;
  showCrown?: boolean;
}

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for lazy loading animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tiers: PricingTier[] = [
    {
      price: '$15/mo',
      name: 'Founding Member',
      tierLabel: 'Tier 1',
      benefits: [
        'Access to Lex',
        'Immortalized on Lex founding members page',
        'Direct feedback to the founders (Make a real difference, we are building for YOU)',
      ],
      ctaText: 'Select Tier 1',
      accentColor: 'blue',
      colorFact: 'Blue symbolizes trust, dependability, calmness, and professionalism',
    },
    {
      price: '$25/mo',
      name: 'Founding Member',
      tierLabel: 'Tier 2',
      benefits: [
        'Everything in Tier 1',
        'Custom message on the founding members page',
        'Extended memory',
        'Higher AI Usage limit',
        'Early feature access',
        '2 free months after official release',
        '+ a 20% discount for life after official release',
      ],
      ctaText: 'Select Tier 2',
      accentColor: 'orange',
      colorFact: 'Orange represents enthusiasm, creativity, happiness, and determination',
    },
    {
      price: '$50/mo',
      name: 'Founding Member',
      tierLabel: 'Tier 3',
      benefits: [
        'Everything in Tier 2',
        'Highest lex plan free for life after official release (pay now, save later)',
        'Even more memory for even more context',
        'Even higher AI Usage limit for serious business builders',
      ],
      ctaText: 'Select Tier 3',
      accentColor: 'purple',
      colorFact: 'In medieval times, purple was a highly exclusive, expensive, and prestigious color symbolizing royalty, imperial power, and divinity',
      showCrown: true,
    },
  ];

  const handleSelectTier = (tierName: string) => {
    alert(`You selected ${tierName}. Redirecting to checkout...`);
  };

  const getAccentStyles = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          text: 'text-[#4A90E2]',
          border: 'border-[#4A90E2]',
          bg: 'bg-[#4A90E2]',
          bgHover: 'hover:bg-[#3A7BC8]',
          bgLight: 'bg-[#4A90E2]/10',
          shadow: 'shadow-[0_4px_16px_rgba(74,144,226,0.15)]',
          gradient: 'from-[#4A90E2]/5 to-[#4A90E2]/10',
        };
      case 'orange':
        return {
          text: 'text-[#F5A623]',
          border: 'border-[#F5A623]',
          bg: 'bg-[#F5A623]',
          bgHover: 'hover:bg-[#E09000]',
          bgLight: 'bg-[#F5A623]/10',
          shadow: 'shadow-[0_4px_16px_rgba(245,166,35,0.15)]',
          gradient: 'from-[#F5A623]/5 to-[#F5A623]/10',
        };
      case 'purple':
        return {
          text: 'text-[#8B5CF6]',
          border: 'border-[#8B5CF6]',
          bg: 'bg-[#8B5CF6]',
          bgHover: 'hover:bg-[#7C3AED]',
          bgLight: 'bg-[#8B5CF6]/10',
          shadow: 'shadow-[0_4px_16px_rgba(139,92,246,0.15)]',
          gradient: 'from-[#8B5CF6]/5 to-[#8B5CF6]/10',
        };
      default:
        return {
          text: 'text-[#4A90E2]',
          border: 'border-[#4A90E2]',
          bg: 'bg-[#4A90E2]',
          bgHover: 'hover:bg-[#3A7BC8]',
          bgLight: 'bg-[#4A90E2]/10',
          shadow: 'shadow-[0_4px_16px_rgba(74,144,226,0.15)]',
          gradient: 'from-[#4A90E2]/5 to-[#4A90E2]/10',
        };
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="join-launch-crew" 
      className="section-padding relative" 
      style={{ paddingBottom: '96px' }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section Header */}
        <h2 className="section-header text-center mb-4">
          Join the Launch Crew
        </h2>
        <p className="body-large text-center text-[var(--medium-gray)] mb-16">
          Founding member access — limited spots
        </p>

        {/* Progressive Tier Visualization with Cards */}
        <div className="relative">
          {/* Connecting Pathway Line - Desktop Only */}
          <div className="hidden lg:block absolute top-1/2 left-[16%] right-[16%] h-1 -translate-y-1/2 z-0">
            <div className="w-full h-full bg-gradient-to-r from-[#4A90E2] via-[#F5A623] to-[#8B5CF6] rounded-full opacity-30" />
            {/* Progress dots */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-[#4A90E2] rounded-full border-4 border-white shadow-md" />
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#F5A623] rounded-full border-4 border-white shadow-md" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-[#8B5CF6] rounded-full border-4 border-white shadow-md" />
          </div>

          {/* Pricing Cards - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {tiers.map((tier, index) => {
              const styles = getAccentStyles(tier.accentColor);
              return (
                <div
                  key={index}
                  className={`
                    relative bg-white border-2 ${styles.border} rounded-xl p-6 ${styles.shadow}
                    flex flex-col transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  `}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Crown Icon for Tier 3 */}
                  {tier.showCrown && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                      <div className={`${styles.bgLight} rounded-full p-2 shadow-lg animate-pulse`}>
                        <Crown className={`w-6 h-6 ${styles.text}`} />
                      </div>
                    </div>
                  )}

                  {/* Tier Label Badge */}
                  <div className="flex justify-center mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${styles.bgLight} ${styles.text}`}>
                      {tier.tierLabel}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-2">
                    <span className="font-heading text-[32px] font-bold text-[var(--near-black)]">
                      {tier.price}
                    </span>
                  </div>

                  {/* Tier Name */}
                  <h3 className={`font-heading text-lg font-semibold text-center ${styles.text} mb-4`}>
                    {tier.name}
                  </h3>

                  {/* Color Fact Box - Prominent */}
                  <div className={`mb-5 p-4 rounded-lg bg-gradient-to-br ${styles.gradient} border ${styles.border} border-opacity-30`}>
                    <p className={`text-sm leading-relaxed ${styles.text} font-medium`}>
                      {tier.colorFact}
                    </p>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2">
                        <span className={styles.text}>•</span>
                        <span className="text-sm text-[var(--near-black)]">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleSelectTier(tier.tierLabel)}
                    className={`
                      w-full h-12 rounded-lg font-medium transition-all duration-200 
                      hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]
                      ${styles.bg} ${styles.bgHover} text-white
                    `}
                  >
                    {tier.ctaText}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subtext */}
        <p className="body-regular text-center text-[var(--medium-gray)] mt-10">
          All tiers include full access to Lex, Plans, and the Workstation
        </p>
      </div>
    </section>
  );
}
