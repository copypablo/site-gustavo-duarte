import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      result: "Perdeu 15kg em 4 meses",
      text: "Perdi 15kg em 4 meses com o acompanhamento do Gustavo. O melhor de tudo foi aprender a me alimentar de forma saudável sem passar fome!",
      rating: 5
    },
    {
      name: "Ana Costa",
      result: "Transformação completa",
      text: "Finalmente encontrei um profissional que entende as dificuldades da rotina de uma mãe. O suporte diário fez toda a diferença!",
      rating: 5
    },
    {
      name: "Carla Santos",
      result: "Nova relação com a comida",
      text: "Não foi só o peso que mudou, foi minha relação com a comida. Hoje me sinto livre e confiante!",
      rating: 5
    },
    {
      name: "Juliana Oliveira",
      result: "12kg eliminados",
      text: "O método do Gustavo é incrível! Emagreci 12kg e aprendi a manter o peso de forma natural.",
      rating: 5
    },
    {
      name: "Fernanda Lima",
      result: "Resultados duradouros",
      text: "Recomendo para todas as mulheres que querem uma transformação real e duradoura!",
      rating: 5
    },
    {
      name: "Patricia Rocha",
      result: "20kg em 6 meses",
      text: "Nunca pensei que conseguiria emagrecer 20kg de forma tão natural e sem sofrimento. Gratidão eterna!",
      rating: 5
    },
    {
      name: "Luciana Mendes",
      result: "Autoestima renovada",
      text: "Além do peso, ganhei autoestima, energia e uma nova perspectiva de vida. Valeu cada centavo investido!",
      rating: 5
    },
    {
      name: "Roberta Alves",
      result: "Método que funciona",
      text: "Já havia tentado várias dietas sem sucesso. Com o Gustavo, finalmente encontrei um método que realmente funciona!",
      rating: 5
    }
  ];

  // Duplicar array para efeito infinito
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="depoimentos" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-primary/5" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto mobile-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="mobile-text-sm font-medium text-yellow-400">Depoimentos Reais</span>
          </div>
          
          <h2 className="mobile-text-4xl font-bold mb-6">
            Mais de <span className="gradient-text">3.200 mulheres</span><br className="hidden sm:block" />
            <span className="sm:hidden"> </span>já transformaram suas vidas
          </h2>
          
          <p className="mobile-text-xl text-white/70 max-w-3xl mx-auto">
            Veja os resultados reais de quem já viveu essa transformação e 
            descobriu que é possível emagrecer com saúde e qualidade de vida.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 sm:gap-6 carousel-scroll"
              style={{
                width: `${duplicatedTestimonials.length * 280}px`
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="flex-shrink-0 w-64 sm:w-80 glass-effect p-4 sm:p-6 rounded-2xl hover-lift group cursor-pointer relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <div className="flex justify-between items-start mb-4">
                      <Quote className="w-8 h-8 text-primary/50" />
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-white/90 leading-relaxed mb-6 group-hover:text-white transition-colors">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="border-t border-white/10 pt-4">
                      <h4 className="font-bold text-primary text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-green-400 font-medium">{testimonial.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "3.200+", label: "Pacientes Transformados" },
            { number: "95%", label: "Taxa de Sucesso" },
            { number: "4.9/5", label: "Avaliação Média" },
            { number: "98%", label: "Recomendariam" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-6 rounded-xl text-center hover-lift"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-primary/10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold gradient-text mb-4">
                Sua Transformação Pode Ser a Próxima!
              </h3>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Junte-se às milhares de mulheres que já descobriram o segredo para emagrecer 
                com saúde, sem dietas restritivas e com acompanhamento profissional.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white/70">Resultados comprovados</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white/70">Suporte completo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white/70">Método científico</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

