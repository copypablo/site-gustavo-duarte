// SEÇÃO SOLUÇÃO - METODOLOGIA EXCLUSIVA
// Apresenta a metodologia do Gustavo como solução para os problemas

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  MessageCircle, 
  TrendingUp, 
  Zap, 
  Award, 
  ArrowRight 
} from 'lucide-react'
import { Button } from './ui/button'

function SecaoSolucao() {
  // Função para rolar até uma seção específica
  const rolarParaSecao = (idSecao) => {
    const elemento = document.getElementById(idSecao)
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Lista dos pilares da metodologia
  const pilaresDaMetodologia = [
    {
      icone: Heart,
      titulo: 'Plano Alimentar Personalizado',
      descricao: 'Criado durante videochamada individual, respeitando suas preferências e rotina',
      beneficios: [
        'Análise completa do seu perfil',
        'Cardápio flexível e variado',
        'Adaptado à sua realidade'
      ]
    },
    {
      icone: MessageCircle,
      titulo: 'Suporte Diário',
      descricao: 'WhatsApp direto comigo para tirar dúvidas e manter você motivada',
      beneficios: [
        'Resposta em até 2h',
        'Orientações personalizadas',
        'Motivação constante'
      ]
    },
    {
      icone: TrendingUp,
      titulo: 'Acompanhamento Próximo',
      descricao: 'Feedbacks quinzenais com ajustes necessários para otimizar resultados',
      beneficios: [
        'Avaliação por fotos',
        'Ajustes no plano',
        'Monitoramento de progresso'
      ]
    },
    {
      icone: Zap,
      titulo: 'Flexibilidade Total',
      descricao: 'Sem restrições extremas, respeitando suas preferências alimentares',
      beneficios: [
        'Sem radicalismo',
        'Inclui seus alimentos favoritos',
        'Sustentável a longo prazo'
      ]
    },
    {
      icone: Award,
      titulo: 'Base Científica',
      descricao: 'Metodologia comprovada com mais de 3.200 pacientes atendidos',
      beneficios: [
        'Evidências científicas',
        'Resultados comprovados',
        'Método testado e aprovado'
      ]
    }
  ]

  return (
    <section id="metodologia" className="py-20 relative overflow-hidden">
      
      {/* EFEITOS DE FUNDO DECORATIVOS */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      
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
            <Award className="w-4 h-4 text-primary" />
            <span className="mobile-text-sm font-medium text-primary">Solução Comprovada</span>
          </div>
          
          <h2 className="mobile-text-4xl font-bold mb-6">
            Minha <span className="gradient-text">Metodologia Exclusiva</span>
          </h2>
          
          <p className="mobile-text-xl text-white/70 max-w-4xl mx-auto">
            Um sistema completo e personalizado que já transformou a vida de mais de 3.200 mulheres, 
            combinando ciência, flexibilidade e acompanhamento humanizado.
          </p>
        </motion.div>

        {/* PILARES DA METODOLOGIA */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 mobile-gap mb-16">
          {pilaresDaMetodologia.map((pilar, index) => {
            const IconeComponente = pilar.icone
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glass-effect p-6 rounded-xl hover-lift group cursor-pointer relative overflow-hidden"
              >
                {/* Gradiente de fundo no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Ícone do pilar */}
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <IconeComponente className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Título do pilar */}
                  <h3 className="mobile-text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {pilar.titulo}
                  </h3>
                  
                  {/* Descrição */}
                  <p className="mobile-text-base text-white/70 mb-4 leading-relaxed">
                    {pilar.descricao}
                  </p>
                  
                  {/* Lista de benefícios */}
                  <ul className="space-y-2">
                    {pilar.beneficios.map((beneficio, beneficioIndex) => (
                      <li key={beneficioIndex} className="flex items-center gap-2 mobile-text-sm text-green-400">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                        <span>{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CHAMADA PARA EXPERIMENTAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto relative overflow-hidden">
            {/* Gradiente de fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10" />
            
            <div className="relative z-10">
              {/* Título da chamada */}
              <h3 className="mobile-text-2xl font-bold mb-4">
                <span className="gradient-text">Pronta para Experimentar Essa Metodologia?</span>
              </h3>
              
              {/* Texto motivacional */}
              <p className="mobile-text-lg text-white/80 mb-6">
                Mais de 3.200 mulheres já transformaram suas vidas. 
                <span className="text-primary font-semibold"> Chegou a sua vez de fazer parte dessa estatística de sucesso!</span>
              </p>
              
              {/* Indicadores de benefícios */}
              <div className="flex flex-wrap justify-center gap-6 mb-8 mobile-text-sm">
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Resultados em 30 dias</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Suporte completo incluso</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Método cientificamente comprovado</span>
                </div>
              </div>
              
              {/* Botão de chamada para ação */}
              <Button
                onClick={() => rolarParaSecao('contato')}
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-400 hover:from-blue-400 hover:to-primary text-black font-bold mobile-button rounded-full glow-effect hover-lift group"
              >
                QUERO COMEÇAR MINHA TRANSFORMAÇÃO
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SecaoSolucao

