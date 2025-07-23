import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/50 rounded-full animate-bounce" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-8"
          >
            <Star className="w-4 h-4 text-primary fill-current" />
            <span className="text-sm font-medium">Mais de 3.200 transformações realizadas</span>
            <Star className="w-4 h-4 text-primary fill-current" />
          </motion.div>

          {/* Main Heading */}
  
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mobile-text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Método científico, plano flexível e suporte diário para mulheres que querem 
            emagrecer com saúde, autoestima e qualidade de vida - 
            <span className="text-primary font-semibold"> sem dietas malucas ou restrições extremas</span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center mobile-gap mb-10"
          >
            {[
              { number: '3.200+', label: 'Pacientes Atendidos' },
              { number: '95%', label: 'Taxa de Sucesso' },
              { number: '711k+', label: 'Seguidores' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mobile-text-3xl font-bold text-primary">{stat.number}</div>
                <div className="mobile-text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mobile-flex mobile-gap justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection('contato')}
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-400 hover:from-blue-400 hover:to-primary text-black font-bold mobile-button rounded-full glow-effect hover-lift group w-full sm:w-auto"
            >
              QUERO MINHA AVALIAÇÃO GRATUITA
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('sobre')}
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 mobile-button rounded-full w-full sm:w-auto"
            >
              Conhecer Metodologia
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 flex flex-wrap justify-center items-center mobile-gap mobile-text-sm text-white/60"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Nutricionista CRN Ativo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Metodologia Científica</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Suporte Diário Incluso</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

