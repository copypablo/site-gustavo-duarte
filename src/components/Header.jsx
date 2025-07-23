import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-2xl font-bold gradient-text cursor-pointer animate-slide-in-left"
            onClick={() => scrollToSection('inicio')}
          >
            Gustavo Duarte
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Início', id: 'inicio' },
              { label: 'Sobre', id: 'sobre' },
              { label: 'Metodologia', id: 'metodologia' },
              { label: 'Depoimentos', id: 'depoimentos' },
              { label: 'Contato', id: 'contato' }
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-primary transition-colors duration-300 font-medium animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('contato')}
            className="hidden md:flex bg-gradient-to-r from-primary to-blue-400 hover:from-blue-400 hover:to-primary text-black font-semibold px-6 py-2 rounded-full glow-effect hover-lift animate-slide-in-right"
          >
            Quero Minha Consultoria
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-effect rounded-lg p-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {[
                { label: 'Início', id: 'inicio' },
                { label: 'Sobre', id: 'sobre' },
                { label: 'Metodologia', id: 'metodologia' },
                { label: 'Depoimentos', id: 'depoimentos' },
                { label: 'Contato', id: 'contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-primary transition-colors duration-300 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-gradient-to-r from-primary to-blue-400 text-black font-semibold rounded-full mt-4"
              >
                Quero Minha Consultoria
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

