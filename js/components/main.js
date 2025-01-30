let favorites = loadFavorites(); 

function updateProduct(productData) {
    const productCard = document.getElementById('product-info');
    productCard.innerHTML = productData.products.map(product => {
        return `
        <li class="product-search">
            <div class="product">
                <img src="${product.thumbnail}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>$${product.price}</p>
                <a href="details.html?id=${product.id}"><button class="link-product">Ver produto</button></a>
                <button onclick="captureId(event)" class="heart" data-id="${product.id}"><i class="fa-solid fa-heart"></i></button>
            </div>
        </li>
        `;
    }).join(' ');
}

function captureId(event) {
    const item = event.target.closest('.heart');
    const itemId = item.getAttribute('data-id');

    if (!favorites.includes(itemId)) {
        favorites.push(itemId); 
        item.classList.add('active');
    } else {
        const index = favorites.indexOf(itemId);
        if (index > -1) {
            favorites.splice(index, 1); 
            item.classList.remove('active');
        }
    }
    saveFavorites(favorites); 
    return favorites;
}

function saveFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function loadFavorites() {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
}

const url = `https://dummyjson.com/products`;

async function fetchProductFavorite(favorites) {
    if (favorites.length === 0) {
        return [];
    }

    let products = [];
    for (let favorite of favorites) {
        try {
            const response = await fetch(`${url}/${favorite}`);
            if (!response.ok) {
                throw new Error(`Erro ao buscar o produto de ID ${favorite}: ${response.status}`);
            }
            const data = await response.json();
            products.push(data);
        } catch (error) {
            console.error(`Erro ao buscar o produto de ID ${favorite}:`, error);
        }
    }
    return products;
}

(async () => {
    const productData = await fetchProductData(limit, skip);
    updateProduct(productData);
    markFavoriteItems();
})();

function markFavoriteItems(){
    const heartButtons = document.querySelectorAll('.heart');
    heartButtons.forEach(button =>{
        const itemId = button.getAttribute('data-id')
        if(favorites.includes(itemId)){
            button.classList.add('active')
        }
    });
}
