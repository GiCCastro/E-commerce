# Projeto de E-commerce com Pesquisa, Menu Responsivo e Favoritos

Este é um projeto de e-commerce simples que utiliza dados de um arquivo JSON fictício (Dummy JSON) para preencher a lista de produtos, permitindo uma experiência de pesquisa e marcando produtos como favoritos. O projeto também implementa um menu responsivo, adequado para dispositivos móveis, e inclui um formulário de newsletter no rodapé da página.

## Funcionalidades

- **Pesquisa de produtos:** O usuário pode pesquisar os produtos disponíveis, e a lista será filtrada conforme o que for digitado na barra de pesquisa.
- **Marcar produtos como favoritos:** O usuário pode marcar e desmarcar produtos como favoritos.
- **Lista de favoritos:** Todos os produtos marcados como favoritos ficam armazenados em uma seção específica para visualização.
- **Página de Detalhes do Produto:** Cada produto possui uma página dedicada com informações detalhadas, incluindo imagem, descrição e preço.
- **Menu responsivo:** O menu da navegação adapta-se ao tamanho da tela, exibindo um menu de hambúrguer em dispositivos móveis.
- **Design responsivo:** O layout da página se ajusta automaticamente ao tamanho da tela para garantir uma boa experiência de usuário em dispositivos móveis, tablets e desktops.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3** (incluindo Flexbox e Media Queries para responsividade)
- **JavaScript** (para funcionalidades como a pesquisa, favoritos e o menu hambúrguer)
- **Dummy JSON** (dados fictícios para simular um banco de dados de produtos)

## Como Rodar o Projeto

1. Clone o repositório:

    ```bash
    git clone https://github.com/GiCCastro/E-commerce.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd E-commerce
    ```

3. Abra o arquivo `index.html` em um navegador de sua preferência. Não é necessário instalar nada além de um navegador para visualizar o site.

## Como Funciona a Pesquisa

A pesquisa é realizada no título dos produtos. Quando o usuário digita algo na barra de pesquisa, o script percorre os títulos dos produtos e exibe apenas aqueles que correspondem ao termo digitado. A busca não diferencia maiúsculas de minúsculas.

## Menu Responsivo

O menu foi desenvolvido para ser responsivo. Quando o site é acessado de um dispositivo móvel, o menu se transforma em um menu hambúrguer. O usuário pode abrir e fechar o menu clicando no ícone de hambúrguer. Todos os links do menu são navegáveis, permitindo fácil acesso a diferentes seções do site, exceto o ícone do carrinho de compras, que é apenas indicativo.


## Como Funciona a Lista de Favoritos

A lista de favoritos permite que os usuários marquem produtos específicos que eles gostem para visualização rápida posterior. Aqui está como funciona:

1. **Marcar como Favorito:** Cada produto possui um ícone de coração ao lado. Quando o usuário clica nesse ícone, o produto é adicionado à lista de favoritos. O ícone de coração muda de cor para indicar que o produto foi marcado como favorito.
   
2. **Desmarcar como Favorito:** Se o usuário clicar novamente no ícone de coração de um produto que já está na lista de favoritos, ele será removido da lista, e o ícone voltará à cor original.

3. **Visualizar Favoritos:** Há um link de coração no menu que permite aos usuários visualizar todos os produtos que foram marcados como favoritos. Esta lista exibe apenas os produtos que foram favoritados, proporcionando uma maneira rápida e fácil de acessar os itens preferidos do usuário.

4. **Persistência dos Favoritos:** A lista de favoritos é armazenada no local storage do navegador. Isso significa que, mesmo se o usuário fechar o navegador ou recarregar a página, os produtos marcados como favoritos serão lembrados e reaparecerão na lista de favoritos na próxima vez que o site for carregado.

   ## Página de Detalhes do Produto
   
Cada produto possui uma página dedicada com informações detalhadas. Ao clicar em um produto na lista, o usuário é levado à página de detalhes, que inclui:

- Imagem do produto
- Título
- Descrição
- Preço
- Tabela de características principais
- Avaliações

### Conclusão

Este projeto é uma demonstração das minhas habilidades e estudos em HTML5, CSS3 e JavaScript, criando uma aplicação de e-commerce funcional e responsiva. Fique à vontade para explorar o código e me enviar seu feedback!
