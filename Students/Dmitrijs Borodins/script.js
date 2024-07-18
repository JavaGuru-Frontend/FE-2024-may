let webpage = {
   navigation: {
      logo: `link`,
      navigation: [`Home`, `About us`, `Services`, `Blog`],
      btn: `TEST`,
   },


   main: {
      leftContent: {
         title: `Find a gift for your wife or girlfriend`,
         discription: `link`,
         btn: `FIND GIFT NOW`,
         img: `link`,
      },

      rightContent: {
         title: `link`,
         discription: `link`,
         btn: `FIND GIFT NOW`,
         img: `link`,
      },
   },

   gifts: {
      img: [`link`, `link2`, `link3`, `link4`],
      title: [`Birthday`, 'Anniversary', 'Valentines Day', 'Chrismas',],
      btn: `See More`,
   },

   footerHeader: {
      navigation: [`Home`, `About us`, `Services`, `Blog`],

      links: [

         {

            name: `github`,
            url: `www.github.com`,
         },

         {

            name: `gmail`,
            url: `www.gmail.com`,
         },

         {

            name: `linkedin`,
            url: `www.linkedin.com`,
         },

         {

            name: `stackoverflow`,
            url: `www.stackoverflow.com`,
         },

         {

            name: `tumblr`,
            url: `www.tumblr.com`,
         },

         {

            name: `twitter`,
            url: `www.twitter.com`,
         },
      ]

   }

}


let web = {
   navigation: {
      links: [
         {
            title: `New-form`,
            url: `https://google.lv `,
         },

         {
            title: `New-form2`,
            url: `https://inbox.lv `,
         }
      ]
   }
}

let header = document.getElementById(`header`);

header.innerHTML = `   <header id="header" class="header container">
      <img src="img/logo.png" alt="Logo">
      <nav class="header__nav">
         <a href="${web.navigation.links[0].url}" class="header__link">${web.navigation.links[0].title}</a>
         <a href="${web.navigation.links[1].url}" class="header__link">${web.navigation.links[1].title}</a>
         <a href="#" class="header__link">Services</a>
         <a href="#" class="header__link">Blog</a>
      </nav>
      <button class="header__btn">${webpage.navigation.btn}</button>
   </header>`

console.log(header);




