// SEÇÃO CHAMADA FINAL - CTA PARA CONVERSÃO
// Última oportunidade de conversão antes do rodapé

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  CheckCircle, 
  Clock,
  Star,
  Zap
} from 'lucide-react'
import { Button } from './ui/button'

function SecaoChamadaFinal() {
  // Função para rolar até uma seção específica
  const rolarParaSecao = (idSecao) => {
    const elemento = document.getElementById(idSecao)
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Benefícios inclusos na consultoria
  const beneficiosInclusos = [
    'Metodologia exclusiva comprovada',
    'Plano alimentar 100% personalizado',
    'Suporte diário via WhatsApp',
    'Acompanhamento quinzenal',
    'Ajustes conforme necessário',
    'Sem restrições extremas'
  ]

  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      
      {/* EFEITOS DE FUNDO DECORATIVOS */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-green-500/10" />
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-float" />
      
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
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="mobile-text-sm font-medium text-yellow-400">Transformação Garantida</span>
          </div>
          
          <h2 className="mobile-text-4xl font-bold mb-6">
            <span className="gradient-text">Pronta para Sua Transformação?</span>
          </h2>
          
          <p className="mobile-text-xl text-white/70 max-w-3xl mx-auto">
            Comece hoje mesmo sua jornada rumo ao corpo e à saúde que você sempre sonhou.<br />
            <span className="text-primary font-semibold">Mais de 3.200 mulheres já fizeram essa escolha.</span>
          </p>
        </motion.div>

        {/* CARD PRINCIPAL DE CONVERSÃO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-effect p-8 lg:p-12 rounded-2xl relative overflow-hidden border border-primary/20">
            {/* Gradiente de fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-green-500/5 to-blue-500/10" />
            
            <div className="relative z-10">
              
              {/* TÍTULO DO CARD */}
              <div className="text-center mb-8">
                <h3 className="mobile-text-3xl font-bold mb-4">
                  Consultoria Nutricional <span className="gradient-text">Personalizada</span>
                </h3>
                <p className="mobile-text-lg text-white/80">
                  Transforme sua vida com acompanhamento profissional completo
                </p>
              </div>

              {/* BENEFÍCIOS INCLUSOS */}
              <div className="grid md:grid-cols-2 mobile-gap mb-8">
                <div>
                  <h4 className="mobile-text-xl font-semibold mb-4 text-primary">
                    ✨ O que está incluso:
                  </h4>
                  <div className="space-y-3">
                    {beneficiosInclusos.map((beneficio, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="mobile-text-base text-white/80">{beneficio}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* GARANTIAS E DIFERENCIAIS */}
                <div>
                  <h4 className="mobile-text-xl font-semibold mb-4 text-green-400">
                    🛡️ Suas garantias:
                  </h4>
                  <div className="space-y-3">
                    {[
                      'Nutricionista CRN ativo',
                      'Metodologia cientificamente comprovada',
                      'Mais de 3.200 casos de sucesso',
                      '95% de taxa de aprovação',
                      'Suporte humanizado e próximo',
                      'Resultados em até 30 dias'
                    ].map((garantia, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 fill-current" />
                        <span className="mobile-text-base text-white/80">{garantia}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* URGÊNCIA E ESCASSEZ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-xl mb-8 border border-orange-400/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-orange-400" />
                  <h4 className="mobile-text-lg font-semibold text-orange-400">
                    Vagas Limitadas - Atendimento Personalizado
                  </h4>
                </div>
                <p className="mobile-text-base text-white/80">
                  Para garantir a qualidade do atendimento, trabalho com um número limitado 
                  de pacientes por mês. <span className="text-orange-400 font-semibold">
                  Garante já sua vaga para começar sua transformação!</span>
                </p>
              </motion.div>

              {/* BOTÕES DE AÇÃO */}
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mobile-flex mobile-gap justify-center"
                >
                  {/* BOTÃO PRINCIPAL */}
                  <Button
                    onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Quero saber mais sobre a consultoria nutricional personalizada.', '_blank')}
                    size="lg"
                  
                    
                  >
                    <span className="mobile-text-lg">QUERO MINHA AVALIAÇÃO GRATUITA</span>
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  {/* BOTÃO SECUNDÁRIO */}
                  <Button
                    onClick={() => window.open('https://instagram.com/gustavoduarte', '_blank')}
                    variant="outline"
                    size="lg"
                    className="border-primary/50 text-primary hover:bg-primary/10 mobile-button rounded-full w-full sm:w-auto"
                  >
                    Ver Mais Resultados
                  </Button>
                </motion.div>

                {/* INFORMAÇÕES DE CONTATO */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-6 mobile-text-sm text-white/60"
                >
                  <p>📱 WhatsApp: (11) 99999-9999</p>
                  <p>📧 Email: contato@gustavoduarte.com</p>
                  <p>📍 Atendimento online para todo o Brasil</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ÚLTIMA MOTIVAÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="mobile-text-lg text-white/70 max-w-2xl mx-auto">
            <span className="text-primary font-semibold">Não deixe para amanhã</span> a transformação 
            que você pode começar hoje. Sua melhor versão está esperando por você! 💪✨
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SecaoChamadaFinal

