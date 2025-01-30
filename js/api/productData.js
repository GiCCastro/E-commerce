
const limit = 17;
const skip = 136;

async function fetchProductData(limit, skip) {
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    try {
        const fetching = await fetch(url);
        if (!fetching.ok) {
            throw new Error(`HTTP error! status: ${fetching.status}`);
        }
        const data = await fetching.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
    }
}



fetchProductData(limit, skip);
