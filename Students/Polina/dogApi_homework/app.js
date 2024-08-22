let dogSelector = document.getElementById('dogSelector');
let dogImgSelector = document.getElementById('dogImg');
// 1) отрендерить список всех парод собак список доступен в data.js
// для этого неблоходимо пройти циклом через все данные и в сущестующий select 
// добавить новую опцию <option value=${breed.value}>${breed.name}

let renderDogData = (data) => {
    data.forEach(breed => {
       dogSelector.innerHTML += `<option value=${breed.value}>${breed.name}</option>`
    })
 }

// 2) добавить на селект .addEventListener('change')
// и вызвать функцию котороя сделает запрос на сервер

// 3) создать запрос на сервер 
// мы будем использовать https://dog.ceo/dog-api/
// наш запрос для получения картинки будет вышледить вот так
// https://dog.ceo/api/breed/${dogSelector.value}/images/random`;
// где ${dogSelector.value} это опция которую мы выбрали


// 4) обработать запрос и отобразить картинку 
// использовать innerHTML и подставить 
// = `<img src='${data.message}'/>`
// где ${data.message} будет ссылочка на картинку 

let renderDogImg = (data) => {
    dogImgSelector.innerHTML = `<img src='${data.message}'class='dogimage'/>`
 }

 let getDogImg = () => { 
   fetch(`https://dog.ceo/api/breed/${dogSelector.value}/images/random`)

      .then(response => response.json())
      .then(data => renderDogImg(data))
      .catch(error => alert(error))
}

dogSelector.addEventListener('change', getDogImg);
renderDogData(data);
