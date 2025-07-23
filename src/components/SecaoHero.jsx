// SEÇÃO HERO - PRIMEIRA IMPRESSÃO
// Esta é a primeira seção que o visitante vê, com o título principal e chamada para ação

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from './ui/button'

function SecaoHero() {
  // Função para rolar até uma seção específica
  const rolarParaSecao = (idSecao) => {
    const elemento = document.getElementById(idSecao)
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/10">
      
      {/* EFEITOS DE FUNDO DECORATIVOS */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      
      <div className="container mx-auto mobile-padding text-center relative z-10">
        
        {/* BADGE DE CREDIBILIDADE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Começa invisível e um pouco abaixo
          animate={{ opacity: 1, y: 0 }} // Aparece na posição normal
          transition={{ delay: 0.2, duration: 0.8 }} // Atraso e duração da animação
          className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-8"
        >
          <Star className="w-4 h-4 text-primary fill-current" />
          <span className="mobile-text-sm font-medium">Mais de 3.200 transformações realizadas</span>
          <Star className="w-4 h-4 text-primary fill-current" />
        </motion.div>

        {/* TÍTULO PRINCIPAL */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mobile-text-5xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Transforme</span> Sua Relação<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>com a Comida e <span className="gradient-text">Conquiste</span><br className="hidden sm:block" />
          <span className="sm:hidden"> </span>o Corpo dos Seus Sonhos
        </motion.h1>

        {/* SUBTÍTULO EXPLICATIVO */}
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

        {/* ESTATÍSTICAS IMPORTANTES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap justify-center mobile-gap mb-10"
        >
          {/* Array com as estatísticas para mostrar */}
          {[
            { numero: '3.200+', descricao: 'Pacientes Atendidos' },
            { numero: '95%', descricao: 'Taxa de Sucesso' },
            { numero: '711k+', descricao: 'Seguidores' }
          ].map((estatistica, index) => (
            <div key={index} className="text-center">
              <div className="mobile-text-3xl font-bold text-primary">{estatistica.numero}</div>
              <div className="mobile-text-sm text-white/60">{estatistica.descricao}</div>
            </div>
          ))}
        </motion.div>

        {/* BOTÕES DE CHAMADA PARA AÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mobile-flex mobile-gap justify-center items-center"
        >
          {/* BOTÃO PRINCIPAL - Mais importante */}
          <Button
            onClick={() => rolarParaSecao('contato')}
            size="lg"
            className="bg-gradient-to-r from-primary to-blue-400 hover:from-blue-400 hover:to-primary text-black font-bold mobile-button rounded-full glow-effect hover-lift group w-full sm:w-auto"
          >
            QUERO MINHA AVALIAÇÃO GRATUITA
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          {/* BOTÃO SECUNDÁRIO - Para saber mais */}
          <Button
            onClick={() => rolarParaSecao('metodologia')}
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 mobile-button rounded-full w-full sm:w-auto"
          >
            Conhecer Metodologia
          </Button>
        </motion.div>

        {/* INDICADORES DE CONFIANÇA */}
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
      </div>
    </section>
  )
}

export default SecaoHero

