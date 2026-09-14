# BlaBlaCar Clone — Trabalho de Tópicos de Desenvolvimento de Aplicativos

## 1. Aplicativo de referência

**BlaBlaCar**

## 2. Telas implementadas

| Tela | Descrição |
| --- | --- |
| **Suas Viagens** | Listagem das viagens oferecida, utilizando componentes e FlatList |
| **Resumo da VIagem** | Ao clicar em um dos componentes da tela "Suas Viagens", o usuário é direcionado para um resumo da viagem com algumas informações básicas |
| **Oferecer** | Tela com um formulário para oferecer/cadastrar uma nova viagem |

### Fluxo de navegação

```
Suas Viagens → toque no card → Resumo da Viagem
       │
       └── Oferecer
```

## 3. Como executar o projeto

### Pré-requisitos

- [Node.js]
- Aplicativo **Expo Go** instalado no celular

### Passos

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npx expo start
```

## 4. Screenshots

| Original | Clone | Observações |
| --- | --- | --- |
| ![Suas Viagens Clone](/docs/WhatsApp%20Image%202026-09-13%20at%2020.37.17%20(1).jpeg)) | ![Suas Viagens Original](/docs/WhatsApp%20Image%202026-09-13%20at%2020.37.10%20(2).jpeg)) | Na parte do menu inferior só foi adicionado os botões referentes as telas navegaveis. |
| ![Suas Viagens Original](/docs/WhatsApp%20Image%202026-09-13%20at%2020.38.47.jpeg)) | ![Suas Viagens Original](/docs/WhatsApp%20Image%202026-09-13%20at%2020.37.10%20(1).jpeg)) | Tela que mostra o resumo da viagem. |
| ![Suas Viagens Original](/docs/WhatsApp%20Image%202026-09-13%20at%2020.37.17.jpeg)) | ![Suas Viagens Original](/docs/WhatsApp%20Image%202026-09-13%20at%2020.37.10.jpeg)) | Esta tela teve que ser severamente simplificada. Cada campo a ser preenchido no aplicativo original era uma nova tela, então, para não aumentar muito o escopo, os campos foram condensados em um só formulário em uma única tela |

## 5. Funcionalidades implementadas

- Listagem de viagens com FlatList, keyExtractor e item componentizado (ViagemCard e InfoGeral)
- Formulário com 7 campos controlados (useState) + Switch, validação simples de formato/obrigatoriedade e feedback visual ao publicar
- Navegação entre as três telas via Expo Router (tabs + stack), com passagem de parâmetro (id da viagem) para a tela de detalhe
- Tipagem dos dados e das props dos componentes

## 6. Dados mockados

Os dados mockados estão dentro do arquivo viagem.ts, na pasta models. Os dados são exportados como um array de viagens (VIagem[]) declarado como "VIAGENS".

## 7. Partes reutilizadas

Elementos de interface que se repetiam ou tinham responsabilidade própria foram reutiliozados e transformados em componentes: app-tabs, viagem-card, form-fields

