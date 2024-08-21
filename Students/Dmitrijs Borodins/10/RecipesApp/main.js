/* https://dummyjson.com/docs/recipes */


/*
    В рамках лекции мы сделал небольшой прототип для интернет магазина 
    Попробуйте использовать тот же АПИ но для рецептов 
    И сделать прототип для такого сайта 
    Строка поиска рецептов 
    И вывод рецептов 
*/

let recipesElement = document.getElementById('recipes');
let searchElement = document.getElementById('search');
let productElement = document.getElementById('products');

let renderRecipes = (data) => {
    data.recipes.forEach(element => {
        recipesElement.innerHTML += `<div class="category-recipes">
                                        <h2>${element.name}</h2>
                                     </div>`;
    });

}

let loadRecipes = () => {
    fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then(data => renderRecipes(data))
        .catch(error => console.log(error))
}
let renderProduct = (data) => {
    productElement.innerHTML = '';
    data.recipes.forEach(element => {

        productElement.innerHTML += `<div class="product">
                                       <img class="product_img" width=200px height=200px src="${element.image}">
                                       <p class="product_text">${element.name}</p>
                                       <p class="product_text">${element.rating}&#9733</p>
                                      </div>`;
    });

}

let getRecipes = () => {

    fetch(`https://dummyjson.com/recipes/search?q=${searchElement.value}`)
        .then(res => res.json())
        .then(data => renderProduct(data))
        .catch(error => console.log(error))
}
searchElement.addEventListener(`input`, getRecipes);

loadRecipes();
getRecipes();








// let recipesElement = document.getElementById(`recipes`);


// let renderRecipes = (data) => {
//     data.reciper.forEach(element => {
//         recipesElement.innerHTML += `<div class="category-recipes">
//         <h2>${element.name}</h2>
//          <p>${element.ingredients}</p></div>`
//     });
// }

// let loadRecipes = () => {
//     fetch('https://dummyjson.com/recipes')
//         .then(res => res.json())
//         .then(data => renderRecipes(data))
//         .catch(error => console.log(error))
// }

// window.addEventListener(`load`, loadRecipes);