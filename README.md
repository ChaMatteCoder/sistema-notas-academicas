# 📊 Sistema de Notas Acadêmicas

## 📖 Descrição do Projeto
Sistema web desenvolvido em ReactJS para gerenciamento de notas estudantis com interface responsiva e visualização de diferentes cenários acadêmicos. O projeto implementa contadores, eventos e formatação condicional utilizando Bootstrap para estilização.

## 🎯 Objetivo da Atividade
Demonstrar o uso de ReactJS com Bootstrap para criar uma aplicação web mobile que implementa:
- Componentização modular
- Formatação condicional
- Gerenciamento de estado
- Navegação entre diferentes cenários
- Design responsivo com Bootstrap

## ✨ Funcionalidades

### 🎓 Gestão de Estudantes
- **5 Estudantes** com diferentes perfis acadêmicos
- **Navegação por botões** para alternar entre estudantes
- **Visualização individual** de cada boletim

### 📈 Sistema de Notas
- **5 Disciplinas** por estudante
- **Notas individuais** com formatação condicional
- **Círculos de notas** com design moderno
- **Três status possíveis**:
  - ✅ Acima da Média (≥ 7.0)
  - ⚠️ Na Média (5.0 - 6.9)
  - ❌ Abaixo da Média (< 5.0)

### 📊 Dashboard de Resultados
- **Cálculo automático** da média final
- **Sistema de aprovação** (média ≥ 7.0)
- **Estatísticas detalhadas** por status
- **Total de pontos** acumulados

### 🎨 Interface
- **Design responsivo** com Bootstrap 5
- **Ícones profissionais** do Bootstrap Icons
- **Animações suaves** em transições
- **Cards organizados** por seção
- **Cores significativas** para cada status

## 🛠️ Tecnologias Utilizadas

### Frontend
- **ReactJS 19.2.0** - Biblioteca principal
- **Bootstrap 5.3.8** - Framework de estilização
- **Bootstrap Icons 1.13.1** - Conjunto de ícones
- **CSS3** - Estilos personalizados

### Ferramentas de Desenvolvimento
- **Create React App (VScode)** - Ambiente de desenvolvimento
- **npm** - Gerenciador de pacotes
- **Git** - Controle de versão

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
```bash
git clone [https://github.com/ChaMatteCoder/sistema-notas-academicas]
cd escola-notas
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
npm start dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
escola-notas/
├── public/
│   ├── index.html          # Template HTML principal
│   └── favicon.ico         # Ícone da aplicação
├── src/
│   ├── components/         # Pasta de componentes React
│   │   ├── StudentNavigation.js
│   │   ├── StudentName.js
│   │   ├── SubjectGrade.js
│   │   ├── GradeStatus.js
│   │   └── FinalResult.js
│   ├── App.js              # Componente principal
│   └── index.js            # Ponto de entrada da aplicação
├── package.json            # Dependências e scripts
└── README.md               # Documentação do projeto
```

## 🎮 Como Usar

### Navegação entre Estudantes
1. Utilize os botões na **barra superior** para selecionar um estudante
2. Cada botão mostra o primeiro nome do estudante
3. O estudante ativo é destacado em verde

### Análise de Notas
1. Cada disciplina mostra:
   - Nome da matéria
   - Nota em círculo azul
   - Status com ícone e cor

### Interpretação dos Resultados
1. **Média Final**: Nota geral do estudante
2. **Total de Pontos**: Soma de todas as notas
3. **Situação**: Aprovado/Reprovado
4. **Estatísticas**: Quantidade de matérias em cada faixa

## 👥 Estudantes Demonstrativos

### 1. Maria Eduarda Santos
- **Situação**: Aprovada
- **Perfil**: Notas variadas (demonstra todos os status)
- **Média**: 7.3

### 2. Carlos Oliveira
- **Situação**: Reprovado
- **Perfil**: Notas abaixo da média
- **Média**: 4.7

### 3. Ana Beatriz Lima
- **Situação**: Aprovada
- **Perfil**: Excelente desempenho
- **Média**: 9.24

### 4. Pedro Henrique Costa
- **Situação**: Aprovado
- **Perfil**: Notas na média limítrofe
- **Média**: 7.14

### 5. Juliana Ferreira
- **Situação**: Reprovada
- **Perfil**: Notas na faixa de 5.0
- **Média**: 5.22

## 🎨 Design e UX

### Princípios de Design
- **Hierarquia visual** clara com cards
- **Cores significativas** (verde, amarelo, vermelho)
- **Ícones intuitivos** do Bootstrap Icons
- **Espaçamento consistente** com sistema do Bootstrap

### Responsividade
- **Mobile-first** approach
- **Layout adaptativo** para tablets e desktops
- **Componentes flexíveis** que se reorganizam

### Acessibilidade
- **Contraste adequado** de cores
- **Ícones com significado** textual
- **Navegação por teclado** habilitada

## 📚 Conceitos de React Aplicados

### Componentização
- Single File Component para App.js
- Reutilização de estilos com Bootstrap
- Separação lógica por seções

### Gerenciamento de Estado
- `useState` para controle do estudante ativo
- Dados mockados para demonstração
- Estado derivado para cálculos

### Formatação Condicional
- Classes dinâmicas baseadas em notas
- Cores condicionais por status
- Textos e ícones variáveis

### Event Handling
- Navegação por clique nos botões
- Feedback visual imediato
- Atualização de estado síncrona

## 🏫 Contexto Acadêmico

### Disciplina
- **Tecnologias Web Mobile** - 2025/02
- **Professor**: Marcio José da Cunha
- **Instituição**: Universidade Federal de Uberlândia (UFU)
- **Faculdade**: Faculdade de Engenharia Elétrica (FEELT)

### Objetivos de Aprendizado
1. Desenvolver aplicações web com ReactJS
2. Utilizar Bootstrap para interface responsiva
3. Implementar formatação condicional
4. Gerenciar estado e eventos em React
5. Criar componentes reutilizáveis
6. Desenvolver para dispositivos móveis

## 👨‍🎓 Autor

**Matheus da Silva Fernandes**  
🎓 Estudante de Engenharia de Computação  
🏛️ Faculdade de Engenharia Elétrica (FEELT)  
🏢 Universidade Federal de Uberlândia (UFU)  
📅 2025

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte da disciplina de Tecnologias Web Mobile. O código é aberto para estudo e referência acadêmica.

---

## 📞 Contato

Para dúvidas ou mais informações sobre o projeto:

- **Email**: [matheus.fernandescha@ufu.br]
- **GitHub**: [[ChaMatteCoder](https://github.com/ChaMatteCoder/)]
- **LinkedIn**: [[Matheus Fernandes](https://www.linkedin.com/in/chamatheus/)]

---

*Projeto desenvolvido com ReactJS e Bootstrap - 2025*
