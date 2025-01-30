function updateFavorite(productData, favorites) {
    const favoriteProduct = document.getElementById('product-favorite');

    if (favorites.length === 0) {
        favoriteProduct.innerHTML = `
    <div class="empty-message"  id="empty-message">
        <h1>Lista de Produtos Favoritos</h1>
        <p>Parece que você ainda não adicionou nenhum produto aos seus favoritos.</p>
        <p>Explore nossos produtos e encontre seus favoritos!</p>
        <a href="index.html">
            <button class="explore-button">Ver Produtos</button>
        </a>
    </div>`;
    } else {

    favoriteProduct.innerHTML = productData.map(favorite => {
        return `
        <li  class="product-search">
            <div class="product">
                <img src="${favorite.thumbnail}" alt="${favorite.title}">
                <h2>${favorite.title}</h2>
                <p>R$${favorite.price}</p>
                <a href="details.html?id=${favorite.id}"><button  class="link-product">Ver produto</button></a>
                <button onclick="captureId(event)" class="heart active" data-id="${favorite.id}"><i class="fa-solid fa-heart"></i></button>
            </div>
        </li>
        `;
    }).join('');}
}

function captureId(event) {
    const item = event.target.closest('.heart.active');
    const itemId = item.getAttribute('data-id');
    const index = favorites.indexOf(itemId);
    if (index > -1) {
        favorites.splice(index, 1);
        item.classList.remove('active');

        const productElement = item.closest('.product');
        if (productElement) {
            productElement.parentElement.removeChild(productElement);
        }
    }
    saveFavorites(favorites);


    const favoriteProduct = document.getElementById('product-favorite');
    if (favorites.length === 0) {
        favoriteProduct.innerHTML = `
    <div class="empty-message">
        <h1>Lista de Produtos Favoritos</h1>
        <p>Parece que você ainda não adicionou nenhum produto aos seus favoritos.</p>
        <p>Explore nossos produtos e encontre seus favoritos!</p>
        <a href="index.html">
            <button class="explore-button">Ver Produtos</button>
        </a>
    </div>`;
    } else {
        updateFavorite(productData, favorites);
    }
    


    return favorites;
}


function saveFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}



(async () => {

    const favorites = loadFavorites();
    const productData = await fetchProductFavorite(favorites);
    updateFavorite(productData, favorites);
})();
