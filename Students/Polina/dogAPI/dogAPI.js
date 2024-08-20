let getDataBtn = document.getElementById('getDogimg');
let imgOutput = document.getElementById('renderImg');


let renderDog = (data) => {
    imgOutput.innerHTML = '<img src="$(data.message)"/>'
}

getDataBtn.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => renderDog(data))
    .catch(error => alert(error))
}
)