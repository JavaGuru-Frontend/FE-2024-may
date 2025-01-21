let categoriesEl = document.getElementById('categories');
let searchEl = document.getElementById('search');
let productEl = document.getElementById('products');


let renderCategories = (data) => {
	data.forEach(element => {
			categoriesEl.innerHTML += `<div class="category">${element}</div>`
	});
}

let renderProduct = (data) => {
	productEl.innerHTML = ''
   data.products.forEach(element => {
	   productEl.innerHTML += `
		<div class="product">
			<img class="product_img" src="${element.thumbnail}">
			<p class="product_text">${element.title}</p>
		</div>
		`
});

}


let loadCategories = () => {
	fetch('https://dummyjson.com/products/category-list')
	.then(res => res.json())
	.then(data => renderCategories(data))
	.catch(error => console.log(error))
}

let getProduct = () => {
	fetch(`https://dummyjson.com/products/search?q=${searchEl.value}`)
	.then(res => res.json())
	.then(data => renderProduct(data))
	.then(console.log);
}

searchEl.addEventListener('input', getProduct)
loadCategories();
