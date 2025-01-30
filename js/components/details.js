

function detailsProduct(productDetails) {
    const product = document.getElementById('product-details');
    product.innerHTML = `
        
        <img src="${productDetails.images}" alt="${productDetails.title}">
        <div class="product-info">
            <h2>${productDetails.title}</h2>
            <div class="price-discount">
                <p class="price">R$ ${productDetails.price}</p>
                <p class="discount">${productDetails.discountPercentage}% OFF</p>
            </div>
            <div class="quantity-input">
                <label>Digite a quantidade:</label>
                <input type="number" min="${productDetails.minimumOrderQuantity}" max="${productDetails.stock}" placeholder="${productDetails.stock} disponíveis">
            </div>
            <div class="buttons">
                <button>Comprar Agora</button>
                <button>Adicionar ao Carrinho</button>
            </div>
            <p>Warranty: ${productDetails.warrantyInformation}</p>
        </div>
    `;
}

function featuresProduct(productDetails) {
    const features = document.getElementById('product-features');
    features.innerHTML = `
        <h2>Características Principais</h2>
        <table>
            <tr>
                <td>Categoria</td>
                <td>${productDetails.category}</td>
            </tr>
            <tr>
                <td>Largura</td>
                <td>${productDetails.dimensions.width} cm</td>
            </tr>
            <tr>
                <td>Altura</td>
                <td>${productDetails.dimensions.height} cm</td>
            </tr>
            <tr>
                <td>Profundidade</td>
                <td>${productDetails.dimensions.depth} cm</td>
            </tr>
            <tr>
                <td>Peso</td>
                <td>${productDetails.weight} kg</td>
            </tr>
        </table>
        <h2>Descrição</h2>
        <p>${productDetails.description}</p>
    `;
}

function renderStars(rating){
    const maxStars = 5;
    let stars = "";

    for (let i = 1; i <= maxStars; i++){
        if (i <= rating){
            stars += `<i class="fa-solid fa-star"></i>`;
        }
        else{
            stars += `<i class="fa-regular fa-star"></i>`;
        }
    }
    return stars;
}


function evaluateProduct(productDetails) {
    const evaluateContainer = document.getElementById('product-reviews');
    let reviewsHtml = '<h2>Avaliações</h2>';
    
    productDetails.reviews.forEach(review => {
        reviewsHtml += `
            <div class="review">
                <div class="user">
                    <i class="fa-solid fa-user"></i>
                    <h3>${review.reviewerName}</h3>
                </div>
                <div class="user-review">
                    <div>${renderStars(review.rating)}</div>
                    <p>${review.comment}</p>
                </div>
                <hr>
            </div>
        `;
    });
    
    evaluateContainer.innerHTML = reviewsHtml;
}


(async () => {
    const productDetails = await fetchProductDetails(productId);
    detailsProduct(productDetails);
    featuresProduct(productDetails);
    evaluateProduct(productDetails);
})();
