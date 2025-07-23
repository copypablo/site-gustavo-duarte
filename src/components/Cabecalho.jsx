// COMPONENTE CABEÇALHO
// Menu de navegação fixo no topo da página

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

function Cabecalho() {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [menuMobileAberto, setMenuMobileAberto] = useState(false)

  // Função para rolar suavemente até uma seção específica
  const rolarParaSecao = (idSecao) => {
    const elemento = document.getElementById(idSecao)
    if (elemento) {
      elemento.scrollIntoView({ 
        behavior: 'smooth', // Rolagem suave
        block: 'start' // Alinha no topo
      })
    }
    setMenuMobileAberto(false) // Fecha o menu mobile após clicar
  }

  // Lista dos itens do menu
  const itensMenu = [
    { nome: 'Início', id: 'inicio' },
    { nome: 'Sobre', id: 'sobre' },
    { nome: 'Metodologia', id: 'metodologia' },
    { nome: 'Depoimentos', id: 'depoimentos' },
    { nome: 'Contato', id: 'contato' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }} // Começa fora da tela (acima)
      animate={{ y: 0 }} // Desce para a posição normal
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10"
    >
      <div className="container mx-auto mobile-padding">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO/NOME */}
          <motion.div
            whileHover={{ scale: 1.05 }} // Pequeno zoom no hover
            className="text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => rolarParaSecao('inicio')}
          >
            Gustavo Duarte
          </motion.div>

          {/* MENU DESKTOP - Visível apenas em telas grandes */}
          <nav className="hidden md:flex items-center space-x-8">
            {itensMenu.map((item) => (
              <button
                key={item.id}
                onClick={() => rolarParaSecao(item.id)}
                className="text-white/80 hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.nome}
              </button>
            ))}
          </nav>

          {/* BOTÃO CTA DESKTOP */}
          <div className="hidden md:block">
            <Button
              onClick={() => rolarParaSecao('contato')}
              className="bg-gradient-to-r from-primary to-blue-400 hover:from-blue-400 hover:to-primary text-black font-bold px-6 py-2 rounded-full"
            >
              Quero Minha Consultoria
            </Button>
          </div>

          {/* BOTÃO MENU MOBILE - Visível apenas em telas pequenas */}
          <button
            onClick={() => setMenuMobileAberto(!menuMobileAberto)}
            className="md:hidden text-white p-2"
          >
            {menuMobileAberto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MENU MOBILE - Aparece quando o botão é clicado */}
        {menuMobileAberto && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} // Começa invisível e sem altura
            animate={{ opacity: 1, height: 'auto' }} // Aparece com animação
            exit={{ opacity: 0, height: 0 }} // Desaparece com animação
            className="md:hidden border-t border-white/10 py-4"
          >
            <nav className="flex flex-col space-y-4">
              {itensMenu.map((item) => (
                <button
                  key={item.id}
                  onClick={() => rolarParaSecao(item.id)}
                  className="text-white/80 hover:text-primary transition-colors duration-300 font-medium text-left"
                >
                  {item.nome}
                </button>
              ))}
              
              {/* BOTÃO CTA MOBILE */}
              <Button
                onClick={() => rolarParaSecao('contato')}
                className="bg-gradient-to-r from-primary to-blue-400 text-black font-bold mt-4 rounded-full"
              >
                Quero Minha Consultoria
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Cabecalho

