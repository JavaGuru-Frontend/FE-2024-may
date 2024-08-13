// Скопировать материалы в свою репозиторию

// Создадим приложение которое выведит фотографию породы собак
// Пример приложения можно рассмотреть в видео ./DogApiDemo.mp4

// 1) отрендерить список всех парод собак список доступен в data.js
// для этого неблоходимо пройти циклом через все данные и в сущестующий select 
// добавить новую опцию <option value=${breed.value}>${breed.name}

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

// 5) добавить стилей по желанию




// Пример ответа от сервера на запрос 
// https://dog.ceo/api/breed/Affenpinscher/images/random
// {
//     "message": "https://images.dog.ceo/breeds/saluki/n02091831_5654.jpg",
//     "status": "success"
// }


// Назначение переменных
let dogSelector = document.getElementById('dogSelector'); //select
let dogImgSelector = document.getElementById('dogImg'); //div kuda vivodim IMG


// отрендерить список всех парод собак список доступен в data.js
// для этого неблоходимо пройти циклом через все данные и в сущестующий select 
// добавить новую опцию <option value=${breed.value}>${breed.name}
let renderDogData = (data) => {
   data.forEach(breed => {
      dogSelector.innerHTML += `<option value=${breed.value}>${breed.name}</option>`
   })
}


// обработать запрос и отобразить картинку 
// использовать innerHTML и подставить 
// = `<img src='${data.message}'/>`
// где ${data.message} будет ссылочка на картинку 
let renderDogImg = (data) => {
   dogImgSelector.innerHTML = `<img src='${data.message}'class='dog-image'/>`
}
// Пример ответа от сервера на запрос 
// https://dog.ceo/api/breed/Affenpinscher/images/random
// {
//     "message": "https://images.dog.ceo/breeds/saluki/n02091831_5654.jpg",
//     "status": "success"
// }



// создать запрос на сервер 
// мы будем использовать https://dog.ceo/dog-api/
// наш запрос для получения картинки будет вышледить вот так
// https://dog.ceo/api/breed/${dogSelector.value}/images/random`;
// где ${dogSelector.value} это опция которую мы выбрали

let getDogImg = () => {

   const url = `https://dog.ceo/api/breed/${dogSelector.value}/images/random`;

   fetch(url)

      .then(response => response.json())

      .then(data => renderDogImg(data))

      .catch(error => alert(error))
}


renderDogData(data);

//добавить на select .addEventListener('change')
// и вызвать функцию котороя сделает запрос на сервер 
dogSelector.addEventListener('change', getDogImg);