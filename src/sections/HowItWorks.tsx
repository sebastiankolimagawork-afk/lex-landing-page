import { MessageCircle, CheckSquare } from 'lucide-react';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <h2 className="section-header text-center mb-4">
          How Lex works
        </h2>
        <p className="body-large text-center text-[var(--medium-gray)] max-w-[680px] mx-auto mb-16">
          Three components working together to help you build your business.
        </p>

        {/* Lex + Plans Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-[4%] mb-12">
          {/* Lex Card */}
          <div className="card-light flex-1">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[var(--blue-accent)]/10 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-[var(--blue-accent)]" />
              </div>
            </div>
            <h3 className="font-heading text-2xl font-semibold text-center mb-4">
              Lex
            </h3>
            <p className="body-regular text-center">
              Lex, the chatbot that knows your business. Guiding you to success 
              by prioritizing advice from leaders in every field.
            </p>
          </div>

          {/* Plans Card */}
          <div className="card-light flex-1">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[var(--blue-accent)]/10 flex items-center justify-center">
                <CheckSquare className="w-8 h-8 text-[var(--blue-accent)]" />
              </div>
            </div>
            <h3 className="font-heading text-2xl font-semibold text-center mb-4">
              Plans
            </h3>
            <p className="body-regular text-center">
              Create business goals. Track them over time. Lex learns from every 
              conversation and builds strategic context that grows with your business.
            </p>
          </div>
        </div>

        {/* Workstation Section */}
        <div className="max-w-[900px] mx-auto mt-12">
          <h3 className="subheader text-center mb-4">
            The Workstation
          </h3>
          <p className="text-lg text-center text-[var(--medium-gray)] max-w-[600px] mx-auto mb-12">
            Everything you need to start and run your business, all giving context to Lex.
          </p>

          {/* Workstation Placeholder */}
          <div 
            className="w-full aspect-[3/2] bg-[#f5f5f5] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center justify-center"
          >
            <span className="text-base font-medium text-[#999]">
              Workstation preview coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
