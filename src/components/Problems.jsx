import { motion } from 'framer-motion';
import { X, AlertCircle } from 'lucide-react';

const Problems = () => {
  const problems = [
    "Já tentou várias dietas e sempre volta ao peso anterior?",
    "Se sente perdida sem saber o que comer para emagrecer?",
    "Tem dificuldade para manter a disciplina sozinha?",
    "Quer resultados duradouros, não apenas temporários?",
    "Precisa de um plano que se encaixe na sua rotina corrida?",
    "Cansada de promessas vazias e métodos que não funcionam?"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto mobile-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span className="mobile-text-sm font-medium text-red-400">Situações Comuns</span>
          </div>
          
          <h2 className="mobile-text-4xl font-bold mb-6">
            <span className="text-red-400">Você se identifica</span> com alguma<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>dessas situações?
          </h2>
          
          <p className="mobile-text-xl text-white/70 max-w-3xl mx-auto">
            Se você respondeu sim para pelo menos uma dessas perguntas, 
            você está no lugar certo para transformar sua vida.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mobile-grid mobile-gap max-w-6xl mx-auto"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="glass-effect p-6 rounded-2xl hover-lift group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors">
                  {problem}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Se você se identificou com essas situações...
            </h3>
            <p className="text-lg text-white/80 leading-relaxed">
              Você não está sozinha! Milhares de mulheres já passaram por isso e conseguiram 
              transformar suas vidas com minha metodologia exclusiva. 
              <span className="text-primary font-semibold"> É hora de quebrar esse ciclo!</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;

