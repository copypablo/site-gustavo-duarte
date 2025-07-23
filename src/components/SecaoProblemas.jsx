// SEÇÃO PROBLEMAS - DORES DAS CLIENTES
// Identifica os problemas que as mulheres enfrentam com dietas e emagrecimento

import React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle } from 'lucide-react'

function SecaoProblemas() {
  // Lista dos problemas mais comuns que as clientes enfrentam
  const problemasComuns = [
    'Já tentou várias dietas e sempre volta ao peso anterior?',
    'Se sente perdida sem saber o que comer para emagrecer?',
    'Tem dificuldade para manter a disciplina sozinha?',
    'Quer resultados duradouros, não apenas temporários?',
    'Precisa de um plano que se encaixe na sua rotina corrida?',
    'Cansada de promessas vazias e métodos que não funcionam?'
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      
      {/* EFEITOS DE FUNDO DECORATIVOS */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow" />
      
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
            <AlertCircle className="w-4 h-4 text-orange-400" />
            <span className="mobile-text-sm font-medium text-orange-400">Situações Comuns</span>
          </div>
          
          <h2 className="mobile-text-4xl font-bold mb-6">
            Você se identifica com <span className="text-red-400">alguma</span><br className="hidden sm:block" />
            <span className="sm:hidden"> </span>dessas <span className="gradient-text">situações?</span>
          </h2>
          
          <p className="mobile-text-xl text-white/70 max-w-3xl mx-auto">
            Se você respondeu sim para pelo menos uma dessas perguntas, 
            você está no lugar certo para transformar sua vida.
          </p>
        </motion.div>

        {/* LISTA DE PROBLEMAS */}
        <div className="grid md:grid-cols-2 mobile-gap max-w-5xl mx-auto mb-16">
          {problemasComuns.map((problema, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass-effect p-6 rounded-xl hover-lift group cursor-pointer relative overflow-hidden"
            >
              {/* Gradiente de fundo no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex items-start gap-4">
                {/* Ícone de alerta */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                </div>
                
                {/* Texto do problema */}
                <p className="mobile-text-base text-white/90 leading-relaxed group-hover:text-white transition-colors">
                  {problema}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEÇÃO DE IDENTIFICAÇÃO E SOLUÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto relative overflow-hidden">
            {/* Gradiente de fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-primary/5" />
            
            <div className="relative z-10">
              {/* Título da solução */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h3 className="mobile-text-2xl font-bold">
                  Se você se identificou com essas situações...
                </h3>
              </div>
              
              {/* Mensagem de esperança */}
              <p className="mobile-text-lg text-white/80 mb-6 leading-relaxed">
                <span className="text-green-400 font-semibold">Você não está sozinha!</span> Milhares de mulheres 
                já passaram por isso e conseguiram transformar suas vidas com minha metodologia exclusiva. 
                <span className="text-primary font-semibold"> É hora de quebrar esse ciclo!</span>
              </p>
              
              {/* Indicadores de sucesso */}
              <div className="flex flex-wrap justify-center gap-6 mobile-text-sm">
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SecaoProblemas

