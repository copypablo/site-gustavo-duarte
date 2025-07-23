import { motion } from 'framer-motion';
import { Check, Users, MessageCircle, Calendar, Zap, Award } from 'lucide-react';

const Solution = () => {
  const solutions = [
    {
      icon: Users,
      title: "Plano Alimentar Personalizado",
      description: "Criado durante videochamada individual, respeitando suas preferências e rotina",
      features: ["Análise completa do seu perfil", "Cardápio flexível e variado", "Adaptado à sua realidade"]
    },
    {
      icon: MessageCircle,
      title: "Suporte Diário",
      description: "WhatsApp direto comigo para tirar dúvidas e manter você motivada",
      features: ["Resposta em até 2h", "Orientações personalizadas", "Motivação constante"]
    },
    {
      icon: Calendar,
      title: "Acompanhamento Próximo",
      description: "Feedbacks quinzenais com ajustes necessários para otimizar resultados",
      features: ["Avaliação por fotos", "Ajustes no plano", "Monitoramento de progresso"]
    },
    {
      icon: Zap,
      title: "Flexibilidade Total",
      description: "Sem restrições extremas, respeitando suas preferências alimentares",
      features: ["Sem radicalismo", "Inclui seus alimentos favoritos", "Sustentável a longo prazo"]
    },
    {
      icon: Award,
      title: "Base Científica",
      description: "Metodologia comprovada com mais de 3.200 pacientes atendidos",
      features: ["Evidências científicas", "Resultados comprovados", "Método testado e aprovado"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="metodologia" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-green-500/10" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float" />
      
      <div className="container mx-auto mobile-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-6">
            <Check className="w-4 h-4 text-green-400" />
            <span className="mobile-text-sm font-medium text-green-400">Solução Comprovada</span>
          </div>
          
          <h2 className="mobile-text-4xl font-bold mb-6">
            Minha <span className="gradient-text">Metodologia Exclusiva</span>
          </h2>
          
          <p className="mobile-text-xl text-white/70 max-w-3xl mx-auto">
            Um sistema completo e personalizado que já transformou a vida de mais de 3.200 mulheres, 
            combinando ciência, flexibilidade e acompanhamento humanizado.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 mobile-gap max-w-7xl mx-auto"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="glass-effect p-8 rounded-2xl hover-lift group cursor-pointer relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <solution.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-white/70 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-green-500/10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold gradient-text mb-4">
                Pronta para Experimentar Essa Metodologia?
              </h3>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Mais de 3.200 mulheres já transformaram suas vidas. 
                Chegou a sua vez de fazer parte dessa estatística de sucesso!
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white/70">Resultados em 30 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white/70">Suporte completo incluso</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white/70">Método cientificamente comprovado</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;

