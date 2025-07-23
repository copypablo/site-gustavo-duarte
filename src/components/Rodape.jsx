// COMPONENTE RODAPÉ
// Informações de contato, links e direitos autorais

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  ExternalLink
} from 'lucide-react'

function Rodape() {
  // Informações de contato
  const informacoesContato = [
    {
      icone: Phone,
      titulo: 'WhatsApp',
      valor: '(11) 99999-9999',
      link: 'https://wa.me/5511999999999'
    },
    {
      icone: Mail,
      titulo: 'Email',
      valor: 'contato@gustavoduarte.com',
      link: 'mailto:contato@gustavoduarte.com'
    },
    {
      icone: Instagram,
      titulo: 'Instagram',
      valor: '@gustavoduarte',
      link: 'https://instagram.com/gustavoduarte'
    },
    {
      icone: MapPin,
      titulo: 'Atendimento',
      valor: 'Online - Todo o Brasil',
      link: null
    }
  ]

  // Links úteis
  const linksUteis = [
    { nome: 'Início', id: 'inicio' },
    { nome: 'Sobre', id: 'sobre' },
    { nome: 'Metodologia', id: 'metodologia' },
    { nome: 'Depoimentos', id: 'depoimentos' },
    { nome: 'Contato', id: 'contato' }
  ]

  // Função para rolar suavemente até uma seção
  const rolarParaSecao = (idSecao) => {
    const elemento = document.getElementById(idSecao)
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      
      {/* EFEITOS DE FUNDO */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-background/95" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        
        {/* CONTEÚDO PRINCIPAL DO RODAPÉ */}
        <div className="container mx-auto mobile-padding py-16">
          <div className="grid lg:grid-cols-3 mobile-gap">
            
            {/* COLUNA 1 - INFORMAÇÕES DA MARCA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              {/* Logo/Nome */}
              <h3 className="mobile-text-2xl font-bold gradient-text mb-4">
                Gustavo Duarte
              </h3>
              
              {/* Descrição */}
              <p className="mobile-text-base text-white/70 mb-6 leading-relaxed">
                Nutricionista especializado em emagrecimento feminino. 
                Mais de 3.200 transformações realizadas com metodologia 
                científica e acompanhamento humanizado.
              </p>
              
              {/* Credenciais */}
              <div className="space-y-2 mobile-text-sm text-white/60">
                <p>🏆 CRN Ativo - Nutricionista Registrado</p>
                <p>📚 Autor dos livros "O Super Cérebro" e "VOCÊ 2.0"</p>
                <p>📊 95% de taxa de sucesso comprovada</p>
                <p>👥 711k+ seguidores no Instagram</p>
              </div>
            </motion.div>

            {/* COLUNA 2 - LINKS ÚTEIS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h4 className="mobile-text-lg font-semibold mb-6 text-primary">
                Navegação
              </h4>
              
              <nav className="space-y-3">
                {linksUteis.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => rolarParaSecao(link.id)}
                    className="block mobile-text-base text-white/70 hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.nome}
                  </button>
                ))}
              </nav>
              
              {/* Serviços */}
              <div className="mt-8">
                <h5 className="mobile-text-base font-semibold mb-3 text-white/80">
                  Serviços
                </h5>
                <div className="space-y-2 mobile-text-sm text-white/60">
                  <p>• Consultoria Nutricional Personalizada</p>
                  <p>• Planos Alimentares Flexíveis</p>
                  <p>• Acompanhamento Quinzenal</p>
                  <p>• Suporte Diário via WhatsApp</p>
                </div>
              </div>
            </motion.div>

            {/* COLUNA 3 - CONTATO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h4 className="mobile-text-lg font-semibold mb-6 text-primary">
                Contato
              </h4>
              
              <div className="space-y-4">
                {informacoesContato.map((contato, index) => {
                  const IconeComponente = contato.icone
                  
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <IconeComponente className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="mobile-text-sm text-white/60">{contato.titulo}</p>
                        {contato.link ? (
                          <a
                            href={contato.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mobile-text-base text-white/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                          >
                            {contato.valor}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <p className="mobile-text-base text-white/80">{contato.valor}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
              
              {/* Horário de atendimento */}
              <div className="mt-6 glass-effect p-4 rounded-lg">
                <h5 className="mobile-text-base font-semibold mb-2 text-green-400">
                  Horário de Atendimento
                </h5>
                <div className="mobile-text-sm text-white/70 space-y-1">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p>Domingo: Plantão WhatsApp</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* LINHA DIVISÓRIA */}
        <div className="border-t border-white/10"></div>

        {/* RODAPÉ INFERIOR - DIREITOS AUTORAIS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto mobile-padding py-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            
            {/* Direitos autorais */}
            <div className="flex items-center gap-2 mobile-text-sm text-white/60">
              <span>© 2024 Gustavo Duarte. Todos os direitos reservados.</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </div>
            
            {/* Links legais */}
            <div className="flex items-center gap-4 mobile-text-sm text-white/60">
              <button className="hover:text-primary transition-colors">
                Política de Privacidade
              </button>
              <span>•</span>
              <button className="hover:text-primary transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-4 mobile-text-xs text-white/50 text-center">
            <p>
              Este site não faz parte do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. 
              FACEBOOK é uma marca registrada da Facebook Inc. Os resultados podem variar de pessoa para pessoa.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Rodape

