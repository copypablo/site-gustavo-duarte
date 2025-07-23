// SEÇÃO DEPOIMENTOS - PROVAS SOCIAIS
// Carrossel infinito com depoimentos reais de alunas

import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

// Importando as imagens das alunas
import imagemAluna1 from '../assets/images/aluna-1.jpg'
import imagemAluna2 from '../assets/images/aluna-2.jpg'
import imagemAluna3 from '../assets/images/aluna-3.jpg'
import imagemAluna4 from '../assets/images/aluna-4.jpg'
import imagemAluna5 from '../assets/images/aluna-5.jpg'
import imagemAluna6 from '../assets/images/aluna-6.jpg'

function SecaoDepoimentos() {
  // Lista de depoimentos reais das alunas
  const depoimentos = [
    {
      nome: 'Maria Silva',
      resultado: 'Perdeu 15kg em 4 meses',
      depoimento: 'Perdi 15kg em 4 meses com o acompanhamento do Gustavo. O melhor de tudo foi aprender a me alimentar de forma saudável sem passar fome!',
      imagem: imagemAluna1,
      estrelas: 5
    },
    {
      nome: 'Ana Costa',
      resultado: 'Transformação completa',
      depoimento: 'Finalmente encontrei um profissional que entende as dificuldades da rotina de uma mãe. O suporte diário fez toda a diferença!',
      imagem: imagemAluna2,
      estrelas: 5
    },
    {
      nome: 'Carla Santos',
      resultado: 'Nova relação com a comida',
      depoimento: 'Não foi só o peso que mudou, foi minha relação com a comida. Hoje me sinto livre e confiante!',
      imagem: imagemAluna3,
      estrelas: 5
    },
    {
      nome: 'Juliana Oliveira',
      resultado: '12kg eliminados',
      depoimento: 'O método do Gustavo é incrível! Emagreci 12kg e aprendi a manter o peso de forma natural.',
      imagem: imagemAluna4,
      estrelas: 5
    },
    {
      nome: 'Fernanda Lima',
      resultado: 'Resultados duradouros',
      depoimento: 'Recomendo para todas as mulheres que querem uma transformação real e duradoura!',
      imagem: imagemAluna5,
      estrelas: 5
    },
    {
      nome: 'Patricia Rocha',
      resultado: '20kg em 6 meses',
      depoimento: 'Nunca pensei que conseguiria emagrecer 20kg de forma tão natural e sem sofrimento. Gratidão eterna!',
      imagem: imagemAluna6,
      estrelas: 5
    }
  ]

  // Duplicamos os depoimentos para criar o efeito infinito
  const depoimentosDuplicados = [...depoimentos, ...depoimentos, ...depoimentos]

  return (
    <section id="depoimentos" className="py-20 relative overflow-hidden">
      
      {/* EFEITOS DE FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-primary/5" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto mobile-padding">
        
        {/* CABEÇALHO DA SEÇÃO */}
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

        {/* CARROSSEL DE DEPOIMENTOS */}
        <div className="relative">
          {/* Máscaras de gradiente nas bordas para efeito de fade */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 sm:gap-6 carousel-scroll"
              style={{
                width: `${depoimentosDuplicados.length * 280}px`
              }}
            >
              {depoimentosDuplicados.map((depoimento, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="flex-shrink-0 w-64 sm:w-80 glass-effect p-4 sm:p-6 rounded-2xl hover-lift group cursor-pointer relative overflow-hidden"
                >
                  {/* Gradiente de fundo no hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Estrelas de avaliação */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(depoimento.estrelas)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Texto do depoimento */}
                    <blockquote className="mobile-text-base text-white/90 mb-6 leading-relaxed">
                      "{depoimento.depoimento}"
                    </blockquote>

                    {/* Informações da aluna */}
                    <div className="flex items-center gap-4">
                      {/* Foto da aluna */}
                      <div className="relative">
                        <img
                          src={depoimento.imagem}
                          alt={`Foto de ${depoimento.nome}`}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent"></div>
                      </div>
                      
                      {/* Nome e resultado */}
                      <div>
                        <h4 className="font-semibold text-primary mobile-text-base">{depoimento.nome}</h4>
                        <p className="mobile-text-sm text-green-400">{depoimento.resultado}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ESTATÍSTICAS DE SUCESSO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 mobile-gap mt-16 max-w-4xl mx-auto"
        >
          {[
            { numero: '3.200+', descricao: 'Pacientes Transformados' },
            { numero: '95%', descricao: 'Taxa de Sucesso' },
            { numero: '4.9/5', descricao: 'Avaliação Média' },
            { numero: '98%', descricao: 'Recomendariam' }
          ].map((estatistica, index) => (
            <div key={index} className="text-center glass-effect p-4 rounded-xl">
              <div className="mobile-text-2xl font-bold text-primary mb-2">{estatistica.numero}</div>
              <div className="mobile-text-sm text-white/60">{estatistica.descricao}</div>
            </div>
          ))}
        </motion.div>

        {/* CHAMADA PARA AÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="mobile-text-2xl font-bold mb-4">
              <span className="gradient-text">Sua Transformação Pode Ser a Próxima!</span>
            </h3>
            <p className="mobile-text-base text-white/70 mb-6">
              Junte-se às milhares de mulheres que já descobriram o segredo para emagrecer 
              com saúde, sem dietas restritivas e com acompanhamento profissional.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mobile-text-sm text-green-400">
              <span>✓ Resultados comprovados</span>
              <span>✓ Suporte completo</span>
              <span>✓ Método científico</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SecaoDepoimentos

