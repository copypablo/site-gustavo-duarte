// SEÇÃO RESULTADOS - TRANSFORMAÇÕES E NÚMEROS
// Mostra os resultados alcançados e a segunda imagem do Gustavo

import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Heart, 
  Zap, 
  Shield,
  Target,
  Moon,
  Brain,
  Smile
} from 'lucide-react'

// Importando a segunda imagem do Gustavo
import imagemGustavo2 from '../assets/images/gustavo-2.jpg'

function SecaoResultados() {
  // Benefícios e resultados que as clientes alcançam
  const resultadosAlcancados = [
    {
      icone: TrendingUp,
      titulo: 'Emagrecimento saudável e sustentável',
      cor: 'text-green-400'
    },
    {
      icone: Smile,
      titulo: 'Aumento da autoestima e confiança',
      cor: 'text-pink-400'
    },
    {
      icone: Zap,
      titulo: 'Mais energia e disposição no dia a dia',
      cor: 'text-yellow-400'
    },
    {
      icone: Heart,
      titulo: 'Relação equilibrada com a alimentação',
      cor: 'text-red-400'
    },
    {
      icone: Shield,
      titulo: 'Autonomia para manter os resultados',
      cor: 'text-blue-400'
    },
    {
      icone: Moon,
      titulo: 'Melhora na qualidade do sono',
      cor: 'text-purple-400'
    },
    {
      icone: Brain,
      titulo: 'Redução de ansiedade alimentar',
      cor: 'text-indigo-400'
    },
    {
      icone: Target,
      titulo: 'Hábitos alimentares duradouros',
      cor: 'text-orange-400'
    }
  ]

  // Estatísticas principais de sucesso
  const estatisticasPrincipais = [
    {
      numero: '3.200+',
      descricao: 'Pacientes Atendidos',
      detalhe: 'Transformações reais e duradouras'
    },
    {
      numero: '95%',
      descricao: 'Taxa de Sucesso',
      detalhe: 'Resultados comprovados cientificamente'
    },
    {
      numero: '711k+',
      descricao: 'Seguidores',
      detalhe: 'Comunidade engajada e motivada'
    },
    {
      numero: '30 dias',
      descricao: 'Primeiros Resultados',
      detalhe: 'Mudanças visíveis rapidamente'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      
      {/* EFEITOS DE FUNDO DECORATIVOS */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-primary/5" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow" />
      
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
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="mobile-text-sm font-medium text-green-400">Resultados Comprovados</span>
          </div>
          
          <h2 className="mobile-text-4xl font-bold mb-6">
            <span className="gradient-text">Transformações Reais</span><br className="hidden sm:block" />
            <span className="sm:hidden"> </span>e Resultados Duradouros
          </h2>
        </motion.div>

        {/* CONTEÚDO PRINCIPAL - IMAGEM E RESULTADOS */}
    
          
          {/* INFORMAÇÕES SOBRE RESULTADOS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* Descrição principal */}
            <p className="mobile-text-lg text-white/80 mb-8 leading-relaxed">
              Mais de <span className="text-primary font-semibold">3.200 mulheres</span> já conquistaram 
              seus objetivos com minha metodologia exclusiva. Cada transformação é única, mas o 
              compromisso com a excelência é sempre o mesmo.
            </p>
            
            <p className="mobile-text-lg text-white/80 mb-8 leading-relaxed">
              Meu foco não é apenas no emagrecimento, mas na construção de uma 
              <span className="text-green-400 font-semibold"> relação saudável e duradoura</span> com 
              a alimentação, proporcionando autoestima, energia e qualidade de vida.
            </p>

            {/* Lista de resultados alcançados */}
            <div className="grid sm:grid-cols-2 gap-4">
              {resultadosAlcancados.map((resultado, index) => {
                const IconeComponente = resultado.icone
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 glass-effect p-3 rounded-lg hover-lift group cursor-pointer"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors`}>
                      <IconeComponente className={`w-4 h-4 ${resultado.cor}`} />
                    </div>
                    <span className="mobile-text-sm text-white/80 group-hover:text-white transition-colors">
                      {resultado.titulo}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* SEGUNDA FOTO DO GUSTAVO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative max-w-md mx-auto">
              {/* Efeitos decorativos atrás da foto */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-primary/20 rounded-2xl blur-xl transform -rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-2xl blur-xl transform rotate-3"></div>
              
              {/* Foto principal */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={imagemGustavo2}
                  alt="Gustavo Duarte - Resultados comprovados em transformações"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Badge de destaque */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 glass-effect px-4 py-2 rounded-full border border-green-400/30"
              >
                <span className="mobile-text-sm font-bold text-green-400">95% Taxa de Sucesso</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ESTATÍSTICAS PRINCIPAIS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 mobile-gap mb-16"
        >
          {estatisticasPrincipais.map((estatistica, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center glass-effect p-6 rounded-xl hover-lift group"
            >
              <div className="mobile-text-3xl font-bold text-primary mb-2 group-hover:text-green-400 transition-colors">
                {estatistica.numero}
              </div>
              <div className="mobile-text-base font-semibold mb-1">{estatistica.descricao}</div>
              <div className="mobile-text-sm text-white/60">{estatistica.detalhe}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* DESTAQUE FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-3xl mx-auto relative overflow-hidden">
            {/* Gradiente de fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-primary/10" />
            
            <div className="relative z-10">
              <h3 className="mobile-text-2xl font-bold mb-4">
                <span className="text-green-400">95% Taxa de Sucesso</span>
              </h3>
              <p className="mobile-text-lg text-white/80">
                Resultados comprovados em transformações reais
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SecaoResultados

