import { motion } from 'framer-motion';
import { Award, BookOpen, Users, TrendingUp } from 'lucide-react';
import gustavoImage1 from '../assets/gustavo-1.jpg';

const About = () => {
  const achievements = [
    {
      icon: Users,
      number: "3.200+",
      label: "Pacientes Atendidos",
      description: "Transformações reais e duradouras"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Taxa de Sucesso",
      description: "Resultados comprovados"
    },
    {
      icon: BookOpen,
      number: "711k+",
      label: "Seguidores",
      description: "Comunidade engajada"
    },
    {
      icon: Award,
      number: "8+",
      label: "Anos de Experiência",
      description: "Especialização em nutrição"
    }
  ];

  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto mobile-padding">
        <div className="grid lg:grid-cols-2 mobile-gap items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div>
              <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="mobile-text-sm font-medium text-primary">Especialista Reconhecido</span>
              </div>
              
              <h2 className="mobile-text-4xl font-bold mb-6">
                Quem é <span className="gradient-text">Gustavo Duarte</span>
              </h2>
            </div>

            <div className="space-y-6 mobile-text-lg text-white/80 leading-relaxed">
              <p>
                <span className="text-primary font-semibold">Nutricionista especializado em emagrecimento feminino</span>, 
                autor dos livros "O Super Cérebro" e "VOCÊ 2.0", com mais de 711k seguidores no Instagram.
              </p>
              
              <p>
                Minha metodologia é baseada em <span className="text-white font-medium">evidências científicas</span>, 
                com foco na construção de um plano alimentar flexível, que se encaixe na realidade e nas 
                preferências da paciente, sem abrir mão de resultados consistentes.
              </p>
              
              <p>
                Meu diferencial é o <span className="text-primary font-semibold">acompanhamento próximo e humanizado</span>, 
                com suporte diário via WhatsApp e feedbacks quinzenais personalizados, garantindo que você 
                nunca se sinta sozinha nessa jornada.
              </p>
            </div>

            {/* Achievements Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 mobile-gap mt-8"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-4 rounded-xl text-center hover-lift"
                >
                  <achievement.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{achievement.number}</div>
                  <div className="text-sm font-medium text-white">{achievement.label}</div>
                  <div className="text-xs text-white/60 mt-1">{achievement.description}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-xl"
            >
              <h4 className="text-xl font-bold text-primary mb-4">Credenciais e Formação</h4>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Nutricionista CRN Ativo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Especialização em Emagrecimento Feminino</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Autor de Livros Bestseller</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Metodologia Baseada em Evidências</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={gustavoImage1}
                  alt="Gustavo Duarte - Nutricionista"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-80"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 glass-effect p-3 rounded-full">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"></div>
              
              {/* Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 glass-effect p-4 rounded-xl max-w-xs"
              >
                <p className="text-sm text-white/90 italic">
                  "Minha missão é transformar vidas através da nutrição, 
                  criando uma relação saudável e duradoura com a alimentação."
                </p>
                <div className="text-xs text-primary font-semibold mt-2">- Gustavo Duarte</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

