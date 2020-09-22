# Delivery: projeto base em React e Redux

Projeto base para entrevistas usando React, Redux e Enzyme como biblioteca de testes.

## Requerimentos de ambiente

NodeJS > 12.0
IDE ou editor opcional

## Configurando o ambiente

Após clonar o repositório, basta rodar:

```bash
npm i
```

### Rodando os testes

Para testar seu ambiente, rode os testes propostos com:

```bash
npm test
```

Três testes devem falhar, todos relacionados à remoção de produtos do carrinho
Se isso aconter, o ambiente estará pronto para sua entrevista!

### Desafio

A ideia aqui não é testar profundamente seu conhecimento em React ou Redux, mas sim simplesmente entender sua forma de pensar e sua abordagem ao problema. Não se preocupe, não esperamos que você termine todo o desafio no tempo da entrevista. Ao resolver, tente manter uma linha de raciocínio e sempre diga aos entrevistadores o que está pensando em fazer ou fazendo.

1ª parte:
Observe o carrinho de comprar após adicionar um produto. O número "1" aparece ao lado do nome do produto, independentemente de quantas vezes o produto em questão foi adicionado ao carrinho. O desafio aqui é tornar esse número dinâmico, representando quantas instâncias do mesmo produto estão no carrinho atualmente.

2ª parte:
Ao clicar no "X" do lado esquerdo de um produto no carrinho, nada acontece.
O desafio é implementar as modificações necessárias para que um produto possa ser removido do carrinho.
As regras de negócio são:
	Apenas um produto pode ser removido por vez, por exemplo: se um cliente adicionou 2 pratos de macarrão, apenas um deles deve ser removido ao clicar no X.

	Após remover um produto do carrinho, ele deve voltar ao estoque.