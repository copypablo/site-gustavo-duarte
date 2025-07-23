// APLICATIVO PRINCIPAL - GUSTAVO DUARTE
// Este é o arquivo principal que organiza todas as seções do site

import React from 'react'
import './App.css'

// Importando todos os componentes (seções) do site
import Cabecalho from './components/Cabecalho'
import SecaoHero from './components/SecaoHero'
import SecaoProblemas from './components/SecaoProblemas'
import SecaoSolucao from './components/SecaoSolucao'
import SecaoSobre from './components/SecaoSobre'
import SecaoDepoimentos from './components/SecaoDepoimentos'
import SecaoResultados from './components/SecaoResultados'
import SecaoChamadaFinal from './components/SecaoChamadaFinal'
import Rodape from './components/Rodape'

// Função principal do aplicativo
function App() {
  return (
    <div className="App">
      {/* ESTRUTURA DO SITE - ORDEM DAS SEÇÕES */}
      
      {/* 1. CABEÇALHO - Menu de navegação fixo no topo */}
      <Cabecalho />
      
      {/* 2. SEÇÃO HERO - Primeira impressão, título principal e CTA */}
      <SecaoHero />
      
      {/* 3. SEÇÃO PROBLEMAS - Dores e situações que as clientes enfrentam */}
      <SecaoProblemas />
      
      {/* 4. SEÇÃO SOLUÇÃO - Metodologia exclusiva do Gustavo */}
      <SecaoSolucao />
      
      {/* 5. SEÇÃO SOBRE - Quem é o Gustavo Duarte */}
      <SecaoSobre />
      
      {/* 6. SEÇÃO DEPOIMENTOS - Provas sociais com carrossel */}
      <SecaoDepoimentos />
      
      {/* 7. SEÇÃO RESULTADOS - Transformações e números */}
      <SecaoResultados />
      
      {/* 8. SEÇÃO CHAMADA FINAL - CTA final para conversão */}
      <SecaoChamadaFinal />
      
      {/* 9. RODAPÉ - Informações de contato e links */}
      <Rodape />
    </div>
  )
}

export default App

