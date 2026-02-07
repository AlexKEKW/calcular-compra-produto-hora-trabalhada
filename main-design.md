# Guia de Implementação: Calculadora de Horas de Trabalho

## 📋 Visão Geral do Projeto

Aplicação web para calcular quantas horas de trabalho são necessárias para comprar um produto específico, baseada no salário do usuário e sua carga horária mensal.

### Objetivo
Fornecer uma visualização clara e imediata do custo real de produtos em termos de tempo de trabalho, ajudando na tomada de decisões financeiras conscientes.

---

## 🎨 Design System Aplicado

### Referência Base
Esta implementação utiliza o Design System extraído da interface do Google Analytics Setup, adaptado para o contexto de uma calculadora financeira pessoal.

---

## 🎯 Estrutura de Layout

### Arquitetura Visual
- **Layout**: Grid de 2 colunas em desktop, 1 coluna em mobile
- **Espaçamento entre colunas**: 24px (3 unidades do grid de 8px)
- **Container máximo**: 1000px de largura
- **Padding externo**: 24px em todas as direções

### Hierarquia de Informação
1. **Header centralizado** com título e descrição
2. **Card 1 (Esquerda)**: Formulário de entrada de dados
3. **Card 2 (Direita)**: Exibição de resultados calculados

---

## 🎨 Paleta de Cores Aplicada

### Cores Principais do Projeto

**Primary (Roxo)**
- Principal (#5B4EFF): Título principal, botão calcular, valores de resultado, bordas de destaque
- Hover (#4A3EE6): Estado hover do botão principal
- Light (#F5F4FF): Background dos cards de resultado, background do número do card

**Neutral (Cinzas)**
- Texto primário (#1A1A1A): Títulos dos cards
- Texto secundário (#666666): Descrições, helper texts
- Texto terciário (#999999): Placeholders
- Bordas (#E5E5E5): Bordas de inputs e divisores
- Background claro (#F5F5F5): Hover em botões secundários
- Background suave (#FAFAFA): Background dos cards

**Background da Página**
- Gradiente linear de 135° de #F5F4FF para #E8E6FF
- Cria profundidade sem ser intrusivo

**Estados Especiais**
- Obrigatório (#EF4444): Asterisco de campos required
- Foco (#5B4EFF): Borda de inputs em foco com shadow

---

## 📝 Tipografia

### Fonte Principal
**Inter** (Google Fonts)
- Pesos utilizados: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### Escala Tipográfica do Projeto

**Título Principal (H1)**
- Tamanho: 32px
- Peso: 700 (Bold)
- Cor: Primary (#5B4EFF)
- Letter-spacing: -0.5px
- Uso: "Calculadora de Horas de Trabalho para Comprar um Produto"

**Descrição do Header**
- Tamanho: 16px
- Peso: 400 (Regular)
- Cor: Neutral-600 (#666666)
- Line-height: 24px

**Título dos Cards (H2)**
- Tamanho: 20px
- Peso: 600 (Semibold)
- Cor: Neutral-900 (#1A1A1A)
- Letter-spacing: -0.2px
- Uso: "Informe seus dados" / "Resultado"

**Labels de Inputs**
- Tamanho: 13px
- Peso: 500 (Medium)
- Cor: Neutral-700 (#4A4A4A)

**Texto dos Inputs**
- Tamanho: 15px
- Peso: 500 (Medium)
- Cor: Neutral-900 (#1A1A1A)

**Helper Text**
- Tamanho: 12px
- Peso: 400 (Regular)
- Cor: Neutral-600 (#666666)

**Botões**
- Tamanho: 14px
- Peso: 500 (Medium)

**Valores de Resultado**
- Tamanho: 28px
- Peso: 700 (Bold)
- Cor: Primary (#5B4EFF)
- Letter-spacing: -0.5px

**Labels de Resultado**
- Tamanho: 13px
- Peso: 400 (Regular)
- Cor: Neutral-600 (#666666)

---

## 📏 Sistema de Espaçamento

### Grid Base: 8px

**Escala Aplicada**
- 4px (0.5 unidades): Gap entre label e helper text
- 8px (1 unidade): Margin bottom de labels
- 12px (1.5 unidades): Padding interno de inputs e botões
- 16px (2 unidades): Gap entre input groups, padding de botões
- 20px (2.5 unidades): Margin entre input groups
- 24px (3 unidades): Padding dos cards, gap entre cards no grid, margin do header
- 32px (4 unidades): Margin bottom do header, padding de estados vazios

### Aplicações Específicas

**Cards**
- Padding interno: 24px em todos os lados
- Gap entre cards: 24px
- Border-radius: 12px

**Header do Card**
- Margin bottom: 24px
- Padding bottom: 16px
- Border bottom: 1px

**Input Groups**
- Margin bottom: 20px entre grupos
- Último grupo: sem margin bottom

**Button Group**
- Margin top: 24px
- Padding top: 24px
- Border top: 1px
- Gap entre botões: 12px

**Result Items**
- Gap entre items: 16px
- Padding interno: 16px

---

## 🧩 Componentes e Especificações

### 1. Cards Principais

**Características**
- Background: Branco (#FFFFFF)
- Border-radius: 12px
- Box-shadow: Elevação alta (0px 8px 24px rgba(0,0,0,0.12), 0px 2px 8px rgba(0,0,0,0.08))
- Padding: 24px
- Transition: 150ms para transform e box-shadow

**Estado Hover**
- Transform: translateY(-2px)
- Box-shadow aumentada: 0px 12px 32px rgba(0,0,0,0.15), 0px 4px 12px rgba(0,0,0,0.1)

### 2. Header do Card

**Estrutura**
- Display: Flex horizontal
- Alinhamento: Center
- Gap: 12px
- Border bottom: 1px solid #E5E5E5
- Padding bottom: 16px
- Margin bottom: 24px

**Número do Card**
- Dimensões: 32x32px
- Background: #F5F4FF (Primary-50)
- Border-radius: 8px
- Cor do texto: #5B4EFF (Primary-500)
- Peso da fonte: 600
- Tamanho: 18px
- Alinhamento: Centro (flex)

### 3. Inputs de Texto

**Estado Normal**
- Width: 100%
- Padding: 12px (vertical e horizontal)
- Border: 1px solid #E5E5E5
- Border-radius: 6px
- Background: Branco
- Transition: 150ms para todos os estados

**Estado Hover**
- Border-color: #D4D4D4 (um tom mais escuro)

**Estado Focus**
- Border-color: #5B4EFF (Primary)
- Box-shadow: 0px 0px 0px 3px rgba(91, 78, 255, 0.12)
- Outline: none

**Placeholder**
- Cor: #999999 (Neutral-500)
- Mesmo tamanho e peso do texto normal

### 4. Labels

**Estrutura**
- Display: Block
- Margin bottom: 8px
- Incluir asterisco vermelho (*) para campos obrigatórios

**Asterisco de Obrigatório**
- Cor: #EF4444 (Danger-500)
- Margin left: 2px
- Implementar com ::after pseudo-elemento

### 5. Helper Text

**Características**
- Margin top: 4px do input
- Cor mais suave para não competir com o input
- Fornece contexto adicional sem poluir

### 6. Botões

**Botão Primário (Calcular)**
- Background: #5B4EFF
- Cor do texto: Branco
- Padding: 12px 16px
- Border-radius: 8px
- Flex: 1 (ocupa espaço disponível)
- Transition: 150ms

**Hover Primário**
- Background: #4A3EE6
- Transform: translateY(-1px)
- Box-shadow: 0px 4px 12px rgba(91, 78, 255, 0.3)

**Active Primário**
- Transform: translateY(0)

**Botão Secundário (Limpar)**
- Background: Transparente
- Cor do texto: #4A4A4A
- Border: 1px solid #E5E5E5
- Mesmo padding e border-radius do primário

**Hover Secundário**
- Background: #F5F5F5
- Border-color: #D4D4D4

**Layout do Button Group**
- Display: Flex horizontal
- Gap: 12px
- Border top: 1px solid #E5E5E5
- Padding top: 24px
- Margin top: 24px

### 7. Cards de Resultado

**Result Item**
- Background: #F5F4FF (Primary-50)
- Border-left: 3px solid #5B4EFF
- Border-radius: 6px
- Padding: 16px
- Transition: 150ms

**Hover Result Item**
- Background: #EBE9FF (um tom mais saturado)
- Transform: translateX(4px)

**Estado Vazio**
- Text-align: Center
- Padding: 32px 16px
- Ícone: 📊 (emoji, 48px, opacidade 30%)
- Texto: Cor terciária (#999999)

---

## ✨ Animações e Transições

### Entrada da Página

**Container Principal**
- Animação: fadeIn
- Duração: 600ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- De: opacity 0, translateY(20px)
- Para: opacity 1, translateY(0)

**Header**
- Animação: slideDown
- Duração: 600ms
- De: opacity 0, translateY(-20px)
- Para: opacity 1, translateY(0)

**Content Grid**
- Animação: slideUp
- Duração: 600ms
- Delay: 200ms
- Animation-fill-mode: both
- De: opacity 0, translateY(20px)
- Para: opacity 1, translateY(0)

### Resultado Aparecer

**Result Items**
- Animação: resultAppear
- Duração: 400ms
- De: opacity 0, scale(0.95)
- Para: opacity 1, scale(1)

**Escalonamento**
- Item 1: sem delay
- Item 2: delay 100ms
- Item 3: delay 200ms

### Transições de Interação

**Padrão**
- Duração: 150ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Propriedades: all (ou específicas como transform, box-shadow)

---

## 📱 Responsividade

### Breakpoint: 768px

**Desktop (> 768px)**
- Grid: 2 colunas (1fr 1fr)
- Cards lado a lado
- Button group: horizontal (flex-row)

**Mobile (≤ 768px)**
- Grid: 1 coluna (1fr)
- Cards empilhados verticalmente
- Button group: vertical (flex-column-reverse)
- Título principal: 24px (reduzido de 32px)

---

## 🎯 Campos do Formulário

### Input 1: Salário Mensal
- Label: "Salário Mensal" + asterisco vermelho
- Placeholder: "R$ 2.202,00"
- Type: text (com máscara de moeda)
- Helper: "Seu ganho total no mês"
- Required: Sim

### Input 2: Preço do Produto
- Label: "Preço do Produto" + asterisco vermelho
- Placeholder: "R$ 1.517,00"
- Type: text (com máscara de moeda)
- Helper: "Valor do item que deseja comprar"
- Required: Sim

### Input 3: Horas por Dia
- Label: "Horas trabalhadas por dia" + asterisco vermelho
- Placeholder: "8"
- Type: number
- Min: 1
- Max: 24
- Helper: "Ex: 8 horas"
- Required: Sim

### Input 4: Dias por Mês
- Label: "Dias trabalhados por mês" + asterisco vermelho
- Placeholder: "24"
- Type: number
- Min: 1
- Max: 31
- Helper: "Ex: 22 dias"
- Required: Sim

---

## 📊 Resultados Exibidos

### Resultado 1: Valor da Hora
- Label: "Valor da sua Hora"
- Formato: Moeda brasileira (R$ X,XX)
- Tamanho: 28px, peso 700, cor primary

### Resultado 2: Horas Necessárias
- Label: "Horas de trabalho necessárias"
- Formato: XXX.X horas (1 casa decimal)
- Tamanho: 28px, peso 700, cor primary

### Resultado 3: Dias Equivalentes
- Label: "Dias equivalentes"
- Formato: XX.X dias (1 casa decimal)
- Tamanho: 28px, peso 700, cor primary

---

## ⚙️ Lógica de Funcionamento

### Cálculos Necessários

**1. Valor da Hora**
```
valorHora = salárioMensal ÷ (horasPorDia × diasPorMês)
```

**2. Horas Necessárias**
```
horasNecessárias = preçoProduto ÷ valorHora
```

**3. Dias Equivalentes**
```
diasEquivalentes = horasNecessárias ÷ horasPorDia
```

### Formatações

**Entrada de Moeda**
- Implementar máscara que formata automaticamente
- Padrão: R$ X.XXX,XX
- Remove caracteres não numéricos
- Divide por 100 para casas decimais
- Adiciona separadores de milhar

**Saída de Moeda**
- Usar toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

**Números Decimais**
- Usar toFixed(1) para 1 casa decimal

### Estados da Interface

**Estado Inicial (Vazio)**
- Mostrar ícone 📊 centralizado
- Texto: "Preencha os dados para ver o resultado"
- Cor terciária (#999999)
- Padding generoso (32px)

**Estado Preenchido**
- 3 cards de resultado empilhados
- Cada um com animação escalonada
- Border-left colorida de 3px

**Estado de Limpar**
- Resetar formulário
- Voltar ao estado vazio
- Manter foco na UX

---

## 🎭 Micro-interações

### Feedback Visual

**Inputs**
- Hover: Leve escurecimento da borda
- Focus: Shadow azul + borda colorida
- Typing: Aplicar máscara em tempo real

**Botões**
- Hover: Elevação + cor mais escura
- Active: Remover elevação (pressão)
- Cursor: Pointer em todos os botões

**Cards**
- Hover: Leve elevação (translateY -2px)
- Shadow mais proeminente

**Result Items**
- Hover: Background mais saturado + slide para direita (4px)

---

## 🔍 Detalhes de Acessibilidade

### Recomendações

**Labels**
- Sempre associar label ao input com atributo 'for'
- Indicar campos obrigatórios visualmente E semanticamente

**Contraste**
- Todos os textos seguem WCAG AA (4.5:1)
- Primary (#5B4EFF) em branco: contraste adequado
- Neutral-600 (#666666) em branco: verificar contraste

**Focus States**
- Nunca remover outline sem substituir
- Usar box-shadow colorido como alternativa
- Manter visibilidade clara do foco

**Navegação por Teclado**
- Tab order lógico (top-down, left-right)
- Enter para submeter formulário
- Escape para limpar (opcional)

---

## 📐 Especificações Técnicas de Border e Shadows

### Border Radius
- Small (4px): Badges, pequenos elementos
- Medium (6px): Inputs, result items
- Large (8px): Botões, card numbers
- Extra Large (12px): Cards principais

### Box Shadows

**Elevação 1 - Focus**
```
0px 0px 0px 3px rgba(91, 78, 255, 0.12)
```

**Elevação 2 - Cards Normal**
```
0px 8px 24px rgba(0, 0, 0, 0.12),
0px 2px 8px rgba(0, 0, 0, 0.08)
```

**Elevação 3 - Cards Hover**
```
0px 12px 32px rgba(0, 0, 0, 0.15),
0px 4px 12px rgba(0, 0, 0, 0.1)
```

**Elevação 4 - Botão Primário Hover**
```
0px 4px 12px rgba(91, 78, 255, 0.3)
```

---

## 🎨 Guia de Implementação Visual

### Ordem de Construção Recomendada

1. **Estrutura Base**
   - Definir variáveis CSS (custom properties)
   - Reset CSS básico
   - Container e grid principal

2. **Header**
   - Título centralizado
   - Descrição
   - Animação de entrada

3. **Cards**
   - Estrutura básica
   - Header com número
   - Sombra e hover

4. **Formulário (Card 1)**
   - Input groups sequenciais
   - Labels e helpers
   - Button group no footer

5. **Resultados (Card 2)**
   - Estado vazio primeiro
   - Result items com dados
   - Animações de aparição

6. **Interações**
   - Máscaras de input
   - Validações
   - Cálculos

7. **Responsividade**
   - Media queries
   - Ajustes de layout
   - Testes em diversos tamanhos

---

## 🚀 Checklist de Implementação

### Design System
- [ ] Definir todas as custom properties (cores, espaçamentos, tipografia)
- [ ] Importar fonte Inter do Google Fonts
- [ ] Configurar reset CSS básico

### Layout
- [ ] Container centralizado (max-width 1000px)
- [ ] Grid 2 colunas responsivo
- [ ] Background com gradiente

### Componentes
- [ ] Cards com sombra e hover
- [ ] Header dos cards com número
- [ ] Inputs com estados (normal, hover, focus)
- [ ] Labels com asterisco obrigatório
- [ ] Helper texts
- [ ] Botão primário com hover e active
- [ ] Botão secundário com hover
- [ ] Result items com animação

### Funcionalidades
- [ ] Máscara de moeda nos inputs de valor
- [ ] Validação HTML5 dos campos
- [ ] Função de cálculo com 3 resultados
- [ ] Formatação de moeda brasileira
- [ ] Formatação de decimais (1 casa)
- [ ] Função de limpar formulário
- [ ] Estado vazio do resultado

### Animações
- [ ] Fade in do container (600ms)
- [ ] Slide down do header (600ms)
- [ ] Slide up do grid (600ms + 200ms delay)
- [ ] Result appear escalonado (400ms + delays)
- [ ] Transições de hover (150ms)

### Responsividade
- [ ] Breakpoint 768px configurado
- [ ] Grid 1 coluna em mobile
- [ ] Button group vertical em mobile
- [ ] Título reduzido em mobile

### Acessibilidade
- [ ] Labels associados aos inputs
- [ ] Focus states visíveis
- [ ] Contraste adequado
- [ ] Navegação por teclado

---

## 📚 Referências de Design

### Inspiração Visual
- **Google Analytics**: Sistema de cores, tipografia, componentes
- **Material Design**: Elevações e sombras
- **Airbnb**: Espaçamento e hierarquia
- **Stripe**: Inputs e formulários

### Princípios Seguidos
- **Consistência**: Uso de design tokens em todo o projeto
- **Hierarquia**: Clara separação visual entre elementos
- **Feedback**: Todos os estados interativos têm resposta visual
- **Simplicidade**: Foco no essencial, sem elementos desnecessários
- **Delicadeza**: Animações sutis que melhoram a experiência

---

## 💡 Observações Finais

### Por que este Design System?

**Profissional e Confiável**
- Baseado em interface real de empresa líder (Google)
- Transmite seriedade para contexto financeiro

**Acessível e Legível**
- Contrastes adequados
- Hierarquia tipográfica clara
- Espaçamentos generosos

**Moderno e Atual**
- Uso de gradientes sutis
- Animações fluidas
- Componentes contemporâneos

**Escalável**
- Sistema de tokens permite fácil manutenção
- Componentes reutilizáveis
- Padrões bem definidos

### Próximos Passos Sugeridos

Após implementar este design:
1. Testar em diversos navegadores
2. Validar acessibilidade com ferramentas
3. Adicionar testes de usabilidade
4. Considerar modo escuro (dark mode)
5. Implementar funcionalidades extras (salvar histórico, comparar produtos, etc.)

---

**Versão do Guia:** 1.0  
**Data:** Fevereiro 2026  
**Base:** Design System Google Analytics Setup  
**Aplicação:** Calculadora de Horas de Trabalho