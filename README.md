# Cartão de Crédito Válido

## Índice

* [1. Resumo do Projeto](#1-resumo-do-projeto)
* [2. Objetivo](#2-objetivo)
* [3. Executando o projeto](#3-executando-o-projeto)


***

## Projeto SAP010-card-validation 



> Projeto desenvolvido pela estudante da Laboratoria Nívia Miranda, que tem como objetivo trabalhar
os fundamentos de JavaScrit, incluindo conceitos como variáveis, condicionais e funções, 
bem como eventos e manipulação básica de DOM, fundamentos HTML e CSS. :mortar_board:




## :rocket: 1. Resumo do projeto

Este projeto consiste em uma biblioteca JavaScript que permite a validação de números de cartões de crédito
usando o algoritmo de Luhn.

Para isso, foi pensado numa página de finalização de compra em um site. Após todo o processo de compra entre escolher o produto, incluir no carrinho de compra, definir endereço de entrega e calculo de frete, chegaria na página final do site para que o usuário efetue o pagamento com seu cartão de crédito. 

## :dart: 2. Objetivo

O objetivo é garantir que os números de cartão de crédito que eles estão lidando são válidos e podem ser processados corretamente. E que seja uma maneira rápida e confiável de validar os números de cartão de crédito, sem ter que realizar esse processo manualmente.

É claro que existem outros fatores para aprovação de uma compra com o cartão de crédito (limite, validade do cartão, entre outros), porém esta foi uma forma de demonstrar uma validação de cartão muito comum no nosso dia a dia para compras realizadas nos *e-commerce*.

## :computer: 3. Executando o projeto 

Através de um boilerplate iniciei os métodos IsValid que retorna um boolean, de acordo com o algoritimo de Luhn e Maskify que retorna os números do cartão de crédito mascarado, exceto os 4 últimos.  Os testes unitários cobriram 100% os statements, functions, lines e branches.

Em termos de interface, foi criada uma página que simula a última etapa de um compra pela internet, que é o pagamento.  Inclui os campos de inserir número do cartão, validade, código de segurança e nome do titular do cartão. Todos esses campos, é obrigatório o preenchimento para retornar se a compra foi ou não aprovada. Na lateral da página inclui um carrinho de compra, com o resumo do pedido. Na parte superior da tela inclui as etapas de compra, informando que o usuário está na fase do pagamento. 

![Alt text](src/card-validation.jpg)
