const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

async function fetchProductDetails(productId) {
    const url = `https://dummyjson.com/products/${productId}`;
    try {
        const fetching = await fetch(url);
        if (!fetching.ok) {
            throw new Error(`HTTP error! status: ${fetching.status}`);
        }
        const data = await fetching.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
    }
}

fetchProductDetails(productId);