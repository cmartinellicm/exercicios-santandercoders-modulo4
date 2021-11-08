# Santander Coders - Módulo 4

Atividades propostas no curso Santander Coders | Web Full-Stack Degree realizado na [Let's Code](https://www.letscode.com.br/). Exercícios de fixação em JavaScript referente a DOM (Document Object Model).

## Calculadora

_Módulo calculadora em uma página da web simples, utilizando um input para números e um seletor de operação._

* O usuário digita o primeiro número e aperta o botão `Enter`
* O sistema guarda o número e limpa o input
* O usuário digita o segundo número e aperta o botão `Enter`
* O sistema guarda o número e limpa o input novamente
* A inclusão de números pode ser repetida para quantos números desejar incluir na operação
* O usuário aperta o botão `=` e a resposta aparece na tela, assim como o histórico é atualizado
* O usuário pode selecionar uma nova operação com o mesmos números, inserir mais números ou limpar o acumulador
* Para limpar o acumulador, o usuário aperta o botão `Reset Accumulator`
* Para limpar o histórico, o usuário aperta o botão `Reset History`

## Cadastro

_Cadastro simples de usuários, onde o nome inserido é incluído na lista de usuários cadastrados, podendo também ser removido da lista._

* O usuário digita o nome do usuário e aperta o botão `Add`
* O usuário é adicionado à `Users List` junto com um botão `Remove`
* Para remover o usuário da lista, clicar no botão `Remove` do respectivo usuário

## Promises

_Criação de 3 promises resolvidas em tempos diferentes, com resultados apresentados quando todas forem resolvidas._

* O botão `Gerar lista` cria 3 promises que são resolvidas cada uma em seu tempo e exibe uma lista com o resultado das promises geradas
* Cada uma dessas promises é resolvida com um array que recebe um length aleatório (de 1 a 10)
* Cada array é totalmente preenchido com números aleatórios
* Após as 3 promises serem resolvidas, são exibidos todos os resultados em uma lista criada no HTML

## Modal

_Exibição de modal e captura de dados preenchidos em formulário_

* Botão `Open modal` abre modal na tela com formulário
* Usuário preenche formulário e clica no botão `Ok`, os dados preenchidos são capturados e exibidos no console
* Para fechar modal, clicar no botão `Cancel`

## DragRace

_Criação de cronômetro e uso do storage para armazenar tempo dos competidores em corrida._

* Inserir o nome do competidor no `input`
* Selecionar botão `start` para iniciar contagem do tempo
* Selecionar botão `stop` para parar contagem do tempo e inserir nome e tempo do competidor em uma lista no HTML
* Todos os competidores e seus tempos ficam armazenados em Storage temporário (sessionStorage)
* Somente o competidor mais rápido fica armazenado em storage permanente (localStorage)