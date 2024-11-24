let headerLogo = document.getElementById('headerLogo');
headerLogo.src = webpage.header.logo;

let nav = document.getElementById("nav");
webpage.header.links.forEach(element => {
    nav.innerHTML += `<a href="${element.url}" class="header__link">${element.title}</a>`
});

let btn = document.getElementById("btn");
webpage.header.btn.innerHTML += `<button class="header__btn btn">"${element.title}"</button>`;

let footer__nav = document.getElementById("footer__nav");
webpage.footer.links.forEach(element => {
    footer__nav.innerHTML += `<a href="${element.url}" class="footer__link">${element.title}</a>`
});

let footer__icons = document.getElementById("footer__icons");
webpage.footer.social.forEach(element => {
    footer__icons.innerHTML += `<i class="${element.icon}" <a href="${element.url}"></a> </i>`
});