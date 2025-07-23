// SEÇÃO SOBRE - QUEM É GUSTAVO DUARTE
// Apresenta o profissional, suas credenciais e experiência

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Award, 
  BookOpen, 
  Users, 
  Clock,
  CheckCircle,
  Quote
} from 'lucide-react'

// Importando a imagem do Gustavo
import imagemGustavo from '../assets/images/gustavo-1.jpg'

function SecaoSobre() {
  // Credenciais e conquistas do Gustavo
  const credenciais = [
    {
      icone: Award,
      titulo: 'Nutricionista CRN Ativo',
      descricao: 'Registro profissional ativo no Conselho'
    },
    {
      icone: BookOpen,
      titulo: 'Especialização em Emagrecimento Feminino',
      descricao: 'Foco específico no público feminino'
    },
    {
      icone: Users,
      titulo: 'Autor de Livros Bestseller',
      descricao: '"O Super Cérebro" e "VOCÊ 2.0"'
    },
    {
      icone: CheckCircle,
      titulo: 'Metodologia Baseada em Evidências',
      descricao: 'Fundamentação científica comprovada'
    }
  ]

  // Estatísticas de sucesso
  const estatisticas = [
    {
      numero: '3.200+',
      descricao: 'Pacientes Atendidos',
      detalhe: 'Transformações reais e duradouras'
    },
    {
      numero: '95%',
      descricao: 'Taxa de Sucesso',
      detalhe: 'Resultados comprovados'
    },
    {
      numero: '711k+',
      descricao: 'Seguidores',
      detalhe: 'Comunidade engajada'
    },
    {
      numero: '8+',
      descricao: 'Anos de Experiência',
      detalhe: 'Especialização em nutrição'
    }
  ]

  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      
      {/* EFEITOS DE FUNDO DECORATIVOS */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-primary/5" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
      
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
            <Award className="w-4 h-4 text-purple-400" />
            <span className="mobile-text-sm font-medium text-purple-400">Especialista Reconhecido</span>
          </div>
          
          <h2 className="mobile-text-4xl font-bold mb-6">
            Quem é <span className="gradient-text">Gustavo Duarte</span>
          </h2>
        </motion.div>

        {/* CONTEÚDO PRINCIPAL - FOTO E INFORMAÇÕES */}
        <div className="grid lg:grid-cols-2 mobile-gap items-center mb-16">
          
          {/* FOTO DO GUSTAVO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto">
              {/* Efeitos decorativos atrás da foto */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-primary/20 rounded-2xl blur-xl transform -rotate-3"></div>
              
              {/* Foto principal */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={imagemGustavo}
                  alt="Gustavo Duarte - Nutricionista especialista em emagrecimento feminino"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* INFORMAÇÕES SOBRE O GUSTAVO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {/* Descrição principal */}
            <p className="mobile-text-lg text-white/80 mb-6 leading-relaxed">
              Nutricionista especializado em emagrecimento feminino, autor dos livros 
              <span className="text-primary font-semibold"> "O Super Cérebro"</span> e 
              <span className="text-primary font-semibold"> "VOCÊ 2.0"</span>, com mais de 
              <span className="text-primary font-semibold"> 711k seguidores</span> no Instagram.
            </p>
            
            <p className="mobile-text-lg text-white/80 mb-6 leading-relaxed">
              Minha metodologia é baseada em evidências científicas, com foco na construção 
              de um plano alimentar flexível, que se encaixe na realidade e nas preferências 
              da paciente, sem abrir mão de resultados consistentes.
            </p>
            
            <p className="mobile-text-lg text-white/80 mb-8 leading-relaxed">
              Meu diferencial é o acompanhamento próximo e humanizado, com suporte diário 
              via WhatsApp e feedbacks quinzenais personalizados, garantindo que você 
              <span className="text-primary font-semibold"> nunca se sinta sozinha</span> nessa jornada.
            </p>

            {/* Citação do Gustavo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect p-6 rounded-xl relative overflow-hidden mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-primary mb-3" />
                <blockquote className="mobile-text-base text-white/90 italic leading-relaxed mb-3">
                  "Minha missão é transformar vidas através da nutrição, criando uma 
                  relação saudável e duradoura com a alimentação."
                </blockquote>
                <cite className="mobile-text-sm text-primary font-semibold">- Gustavo Duarte</cite>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ESTATÍSTICAS DE SUCESSO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 mobile-gap mb-16"
        >
          {estatisticas.map((estatistica, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center glass-effect p-6 rounded-xl hover-lift"
            >
              <div className="mobile-text-3xl font-bold text-primary mb-2">{estatistica.numero}</div>
              <div className="mobile-text-base font-semibold mb-1">{estatistica.descricao}</div>
              <div className="mobile-text-sm text-white/60">{estatistica.detalhe}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CREDENCIAIS E FORMAÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="mobile-text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Credenciais e Formação</span>
          </h3>
          
          <div className="grid md:grid-cols-2 mobile-gap">
            {credenciais.map((credencial, index) => {
              const IconeComponente = credencial.icone
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect p-6 rounded-xl hover-lift group"
                >
                  <div className="flex items-start gap-4">
                    {/* Ícone da credencial */}
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <IconeComponente className="w-5 h-5 text-primary" />
                    </div>
                    
                    {/* Informações da credencial */}
                    <div>
                      <h4 className="mobile-text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {credencial.titulo}
                      </h4>
                      <p className="mobile-text-sm text-white/70">
                        {credencial.descricao}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SecaoSobre

