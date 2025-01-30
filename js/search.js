function search() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let products = document.getElementsByClassName('product-search');
    let noResults = document.getElementById('no-results');
    let found = false;

    for (let i = 0; i < products.length; i++) {
        let product = products[i].querySelector('h2');
        if (input === "") {
            products[i].style.display = "block";
            found = true;
        } else if (product.innerHTML.toLowerCase().includes(input)) {
            products[i].style.display = "block";
            found = true;
        } else {
            products[i].style.display = "none";
        }
    }

    if (!found && input !== ""){ 
        noResults.style.display = "flex";
    }else{
        noResults.style.display = "none";
    }
    
}