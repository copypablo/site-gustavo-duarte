import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react';
import { Button } from './ui/button';

const CTA = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const guarantees = [
    {
      icon: CheckCircle,
      text: "Metodologia comprovada com 3.200+ casos de sucesso"
    },
    {
      icon: Shield,
      text: "Acompanhamento profissional e suporte diário"
    },
    {
      icon: Clock,
      text: "Resultados visíveis em até 30 dias"
    }
  ];

  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full mb-8"
          >
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-lg font-semibold text-green-400">Transformação Garantida</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Pronta para Sua <span className="gradient-text">Transformação</span>?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl text-white/80 mb-12 leading-relaxed"
          >
            Comece hoje mesmo sua jornada rumo ao corpo e à saúde que você sempre sonhou.<br />
            <span className="text-primary font-semibold">Mais de 3.200 mulheres já fizeram essa escolha.</span>
          </motion.p>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-2xl hover-lift"
              >
                <guarantee.icon className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <p className="text-white/90 text-sm leading-relaxed">{guarantee.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Button
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-400 hover:from-blue-400 hover:to-primary text-black font-bold px-12 py-6 rounded-full text-xl glow-effect hover-lift group relative overflow-hidden"
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative z-10 flex items-center gap-3">
                QUERO MINHA CONSULTORIA PERSONALIZADA
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-white/60"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Nutricionista CRN Ativo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Suporte Diário Incluso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Resultados Comprovados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Metodologia Científica</span>
            </div>
          </motion.div>

          {/* Urgency Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 glass-effect p-6 rounded-2xl max-w-3xl mx-auto"
          >
            <p className="text-lg text-white/90 leading-relaxed">
              <span className="text-primary font-semibold">Não deixe para amanhã</span> a transformação 
              que você pode começar hoje. Cada dia que passa é uma oportunidade perdida de viver 
              com mais saúde, energia e autoestima.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-10 w-4 h-4 bg-primary rounded-full opacity-60"
      ></motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 25, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/3 right-20 w-3 h-3 bg-accent rounded-full opacity-40"
      ></motion.div>
      
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-30"
      ></motion.div>
    </section>
  );
};

export default CTA;

