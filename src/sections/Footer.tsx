export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--light-gray)] pt-12 pb-8">
      <div className="container-wide">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="font-heading font-bold text-lg text-[var(--near-black)]">
            LEX
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-sm font-body text-[var(--near-black)]">
            <a
              href="https://app.lexlaunchcrew.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--blue-accent)] transition-colors"
            >
              Privacy
            </a>
            <span className="text-[var(--medium-gray)]">|</span>
            <a
              href="https://app.lexlaunchcrew.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--blue-accent)] transition-colors"
            >
              Terms
            </a>
            <span className="text-[var(--medium-gray)]">|</span>
            <button 
              onClick={() => scrollToSection('faq')}
              className="hover:text-[var(--blue-accent)] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="body-small text-[var(--medium-gray)]">
            © 2026 KOLKAR TECHNOLOGIES INC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
