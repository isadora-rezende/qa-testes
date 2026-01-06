# Plano de Testes - Projeto SauceDemo

## Objetivo do Plano
O objetivo deste plano é definir a estratégia e abordagem para testar a funcionalidade de login do Sauce Demo, garantindo que todos os requisitos funcionais e não funcionais sejam atendidos.

## Escopo do Teste
Serão testadas as seguintes funcionalidades:
- Login com usuário e senha válidos
- Mensagem de erro para login com campos vazios
- Mensagem de erro para login inválido
- Redirecionamento para a página de produtos
- Logout do sistema

## Estratégia de Teste
- Testes manuais serão realizados inicialmente para validar todos os requisitos.
- Serão realizados testes positivos (usuário correto) e negativos (usuário incorreto).
- Critérios de sucesso serão baseados nos Critérios de Aceite definidos na Análise de Requisitos.
- Testes automatizados serão criados com Cypress para aumentar a cobertura.

## Critérios de Entrada
- A aplicação Sauce Demo deve estar acessível
- Contas de teste válidas criadas (ex.: standard_user / secret_sauce)

## Critérios de Saída
- Todos os casos de teste planejados foram executados
- Todos os erros críticos foram registrados
- Resultados documentados no relatório de testes

## Critérios de Aceite do Plano
- Todos os requisitos funcionais e não funcionais foram cobertos pelos testes
- Todos os resultados esperados foram documentados
- Bugs críticos foram identificados e reportados

## Referências
- [Análise de Requisitos](analise_de_requisitos.md)
- Aplicação de teste: [Sauce Demo](https://www.saucedemo.com/)

