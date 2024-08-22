let categoriesElement = document.getElementById(`categories`);
let searchElement = document.getElementById(`search`);
let productsElement = document.getElementById(`products`);


let renderCategories = (data) => {
    data.forEach(element => {
        categoriesElement.innerHTML += `<div class="category">${element}</div>`
    });
}
let renderProducts = (data) => {
    productsElement.innerHTML = ``
    data.forEach(element => {
        productsElement.innerHTML +=
        `<div class="product">
            <img class="product_img" width=200px height=200px src="${element.thumbnail}"/>
            <p class="product_text">${element.title}</p>
        </div>`;
    });
}

let loadCategories = () => {
    fetch(`https://dummyjson.com/products/category-list`)
    .then(res => res.json())
    .then(data => renderCategories(data))
    .catch(error => console.log(error))
};

let loadProducts = () => {
    fetch(`https://dummyjson.com/products/search?q=${searchElement.value}`)
    .then(res => res.json())
    .then(data => renderProducts(data))
    .catch(error => console.log(error))
}

searchElement.addEventListener(`input`, getProduct());

loadCategories();
loadProducts();