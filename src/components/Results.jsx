import { motion } from 'framer-motion';
import { TrendingUp, Target, Heart, Zap } from 'lucide-react';
import gustavoImage2 from '../assets/gustavo-2.jpg';

const Results = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "3.200+",
      label: "Pacientes Atendidos",
      description: "Transformações reais e duradouras"
    },
    {
      icon: Target,
      number: "95%",
      label: "Taxa de Sucesso",
      description: "Resultados comprovados cientificamente"
    },
    {
      icon: Heart,
      number: "711k+",
      label: "Seguidores",
      description: "Comunidade engajada e motivada"
    },
    {
      icon: Zap,
      number: "30 dias",
      label: "Primeiros Resultados",
      description: "Mudanças visíveis rapidamente"
    }
  ];

  const benefits = [
    "Emagrecimento saudável e sustentável",
    "Aumento da autoestima e confiança",
    "Mais energia e disposição no dia a dia",
    "Relação equilibrada com a alimentação",
    "Autonomia para manter os resultados",
    "Melhora na qualidade do sono",
    "Redução de ansiedade alimentar",
    "Hábitos alimentares duradouros"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-400">Resultados Comprovados</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Transformações Reais</span><br />
                e Resultados Duradouros
              </h2>
            </div>

            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                Mais de <span className="text-primary font-semibold">3.200 mulheres</span> já conquistaram 
                seus objetivos com minha metodologia exclusiva. Cada transformação é única, mas o 
                compromisso com a excelência é sempre o mesmo.
              </p>
              
              <p>
                Meu foco não é apenas no emagrecimento, mas na construção de uma 
                <span className="text-white font-medium"> relação saudável e duradoura</span> com a alimentação, 
                proporcionando autoestima, energia e qualidade de vida.
              </p>
            </div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span className="text-white/80 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-4 rounded-xl hover-lift group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <stat.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-xl font-bold text-primary">{stat.number}</div>
                  </div>
                  <div className="text-sm font-medium text-white">{stat.label}</div>
                  <div className="text-xs text-white/60 mt-1">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform perspective-1000 rotate-y-5 group-hover:rotate-y-0 transition-transform duration-700">
                <img
                  src={gustavoImage2}
                  alt="Gustavo Duarte - Resultados Comprovados"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-primary/30 opacity-80"></div>
                
                {/* Radial Gradient */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30"></div>
                
                {/* Floating Success Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute top-6 left-6 glass-effect p-3 rounded-full"
                >
                  <Target className="w-6 h-6 text-green-400" />
                </motion.div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float"></div>
              
              {/* Success Metrics Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 glass-effect p-6 rounded-xl max-w-xs"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
                  <div className="text-sm text-white/90 font-medium">Taxa de Sucesso</div>
                  <div className="text-xs text-white/60 mt-2">
                    Resultados comprovados em transformações reais
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/4 -left-4 w-8 h-8 bg-primary/30 rounded-full blur-sm"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-1/4 -right-4 w-6 h-6 bg-accent/30 rounded-full blur-sm"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Results;

