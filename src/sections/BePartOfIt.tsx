export function BePartOfIt() {
  const benefits = [
    'Watch the product evolve in real time',
    'Give feedback directly to the founders',
    'Your name, permanently on the Lex founding members page',
    'Exclusive rewards for early support',
  ];

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="section-header text-center mb-6">
          Be part of building Lex
        </h2>
        <p className="body-large text-center mb-8">
          As a founding member, you're not just an early user — you're part of the story.
        </p>

        {/* Benefits List */}
        <div className="max-w-[600px] mx-auto">
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[var(--blue-accent)] mt-1">•</span>
                <span className="text-lg leading-[1.8] font-body text-[var(--near-black)]">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
