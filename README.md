### 16 - Adicione as classes de forma aleatória a fim de estilizar as palavras.

  Pontos importantes:

    * As classes devem ser adicionadas às tags `span` de forma **aleatória**.
    * Sempre adicione mais de uma classe em uma palavra.
    * Utilize as classes:
      - `newspaper`, `magazine1`, `magazine2` (Grupo estilo)
      - `medium`, `big`, `reallybig` (Grupo tamanho)
      - `rotateleft`, `rotateright` (Grupo rotação)
      - `skewleft`, `skewright` (Grupo inclinação)

      Não é necessário utilizar classes de todos os grupos em uma palavra, mas **não** utilize mais de uma classe do mesmo grupo.
      Ou seja, se você utilizar as classes `magazine1` e `skewright` em uma palavra, as classes `newspaper`, `magazine2`, `skeleft` não devem ser usadas para essa mesma palavra.

## Requisitos Bônus:

### 17 - Com uma carta misteriosa gerada, adicione a possibilidade de alterar o estilo de uma palavra específica ao clicar nela.

  Pontos importantes:

    * Ao clicar em uma palavra, um novo estilo **aleatório** deve ser aplicado.
    * O número de mudanças deve ser ilimitado;

### 18 - Deve haver um parágrafo com o `id="carta-contador"` onde existirá um contador de palavras.

  Pontos importantes:

    * Esse contador deve informar a quantidade de palavras presentes na carta misteriosa gerada.

---

## Dicas

- A propriedade `transform` só funciona em elementos do tipo `block` ou `inline-block`. Então, é sugerido adicionar a propriedade `display: inline-block` para que os elementos spans apresentem o conteúdo da forma correta.

- [Que tal](https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/) usar um _loop_ para adicionar o mesmo evento em vários elementos? [Ou então](https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/) a técnica de _event bubbling_ combinada com `classList`?

- Se precisar consultar os valores do _CSS_ de um elemento a partir do _JavaScript_, [dê uma olhada aqui](https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp).

- Para alterar alguma propriedade do _CSS_ de um elemento através do _JavaScript_, dê uma olhada no [atributo `style`](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp) do elemento.

- Para colocar sua página no [GitHub Pages](https://pages.github.com/), não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta `/projetos/pixels-art`.

---

### DURANTE O DESENVOLVIMENTO

* ⚠ **RECOMENDAMOS QUE VOCÊ FIQUE ATENTO ÀS ISSUES DO CODDE CLIMATE, PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO. A PARTIR DO PRÓXIMO BLOCO SEU PROJETO SOMENTE SERÁ AVALIADO SE NÃO TIVER ISSUES NO CODE CLIMATE!** ⚠

* Faça `commits` das alterações que você fizer no código regularmente;

* Lembre-se de sempre após um ~~(ou alguns)~~ `commits` atualizar o repositório remoto (o famoso `git push`);

* Os comandos que você utilizará com mais frequência são:

  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;

  2. `git add` _(para adicionar arquivos ao stage do Git)_;

  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;

  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;

  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-07`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

#VQV 🚀
