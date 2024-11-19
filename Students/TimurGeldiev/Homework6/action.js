let navigation = document.getElementById("navigation");
template1.header.links.forEach(element=>{
    navigation.innerHTML += `<a href="${element.url}" class="header__link">${element.title}</a>`
});

let headerLogo = document.getElementById("headerLogo");
headerLogo.src = template1.header.logo;


let footerLogo = document.getElementById("logoOrange");
footerLogo.src = template1.footer.logo;