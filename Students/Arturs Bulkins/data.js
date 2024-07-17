let data = {
    navigation: {
            links: [
            {
                title: 'Home',
                url: 'https://220.lv/lv/'
            },
            {
                name: 'about us',
                url: 'linkurl'
            },
            {
                name: 'Contacts',
                url: 'linkurl'
            },
            {
                name: 'Blog',
                url: 'linkurl'
            }
        ]
    },
    main: {
        /* heroblocklinks:[
            {
                name: 'Birthday',
                url: 'linkurl'
            },
            {
                name: 'Anniversary',
                url: 'linkurl'
            }
        ], */
        giftlinks: [
                {
                    name: 'Birthday',
                    url: 'linkurl'
                },
                {
                    name: 'Anniversary',
                    url: 'linkurl'
                },
                {
                    name: 'Valentines Day',
                    url: 'linkurl'
                }, 
                {
                    name: 'Chrismas',
                    url: 'linkurl'
                }
        ],
        gridcontainer: [
            {
                name: 'ARTURS ARTURS ARTURS',
                url: 'linkurl'
            },
            {
                name: 'Read More',
                url: 'linkurl'
            },
            {
                name: 'Read More',
                url: 'linkurl'
            }
        ]

    },
    footer: {
            links: [
            {
                name: 'facebook',
                url: 'https://www.youtube.com/'
            },
            {
                name: 'twitter',
                url: 'linkUrl'
            },
            {
                name: 'instagram',
                url: 'linkUrl'
            },
            {
                name: 'youtube',
                url: 'linkUrl'
            },
            {
                name: 'printerest',
                url: 'linkUrl'
            }
        ]
    }
}

let header = document.getElementById ('header');
header.innerHTML = `
     <header id="header" class="header">
            <img src="images/A.B.logo.png" class="header__img">
            <nav>
                <a href="${data.navigation.links[0].url}" class="header__link">${data.navigation.links[0].title}</a>
                <a href="#" class="header__link">About us</a>
                <a href="#" class="header__link">Contacts</a>
                <a href="#" class="header__link">Blog</a>
            </nav>
            <button class="btn btn_full btn_small">GIFT FINDER</button>
    </header> 
`
let gifts = document.getElementById ('gifts');
gifts.innerHTML = `
     <section id="gifts" class="gifts">
            <div class="gift">
                <img src="images/happybirthday.png">
                <div class="gift__text">
                    <h3>Birthday</h3>
                    <a href="#">See More</a>
            </div>
            </div>
            <div class="gift">
                <img src="images/Anniversary.png">
                <div class="gift__text">
                    <h3>Anniversary</h3>
                    <a href="#">See More</a>
            </div>
            </div>
            <div class="gift">
                <img src="images/Valentine's Day.png">
                <div class="gift__text">
                    <h3>Valentine's Day</h3>
                    <a href="#">See More</a>
                </div>
            </div>
            <div class="gift">
                <img src="images/Chrismas.png">
                <div class="gift__text">
                    <h3>Chrismas</h3>
                    <a href="#">See More</a>
                </div>
            </div>
        </section>
`

let gridcontainer = document.getElementById('gridcontainer');
gridcontainer.innerHTML =`
 <div id="gridcontainer" class="grid-container">
            <img class="item1" src="images/Media.png" alt="">
            <div class="item2">
                <h3>Mr.JohnDoe</h3>
                <h6 class="item2_h6">The best way to wish<br <br class="br"> your wife</h6>
                <nav>
                <a class="item2_nav" href="">${data.main.gridcontainer[0].name}</a>
                </nav>
            </div>
            <div class="item3">
                <h3 class="item_bold">Database to find the gifts for your<br class="br">
                 girlfriend</h3>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br class="br"> 
                sed do eiusmod tempor incididunt ut labore et dolore...
                </h4>
                 <nav>
                <a class="item2_nav item2_nav__black" href="">Read More</a>
                </nav>
            </div>
            <div class="item3 item4">
            <h3 class="item_bold">How Artificial Intelligence read your mind<br class="br">
                 to find the best gift</h3>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br class="br">
                 sed do eiusmod tempor incididunt ut labore et dolore...
            </h4>
            <nav>
                <a class="item2_nav item2_nav__black" href="">Read More</a>
            </nav>
            </div> 
        </div>
`

let footer = document.getElementById ('footer');
footer.innerHTML =`
 <footer id="footer" class="footer">
        <nav class="footer__nav">
            <a href="#" class="footer__link">Home</a>
            <a href="#" class="footer__link">About</a>
            <img src="images/logo.png" class="footer__img">
            <a href="#" class="footer__link">Service</a>
            <a href="#" class="footer__link">Blog</a>
        </nav>
        <div class="footer__borderline">
        </div>
        <div class="spriteflex">
            <a href="https://www.facebook.com/"    class="sprite sprite__facebook"></a>
            <a href="https://twiiter.com/"         class="sprite sprite__twitter"></a>
            <a href="https://www.instagram.com//"  class="sprite sprite__instagram"></a>
            <a href="https://www.youtube.com/"     class="sprite sprite__youtube"></a>
            <a href="https://www.pinterest.com/"   class="sprite sprite__pinterest"></a>
            
        </div>
        <div class="footerh5">
            <h5>© 2010 — 2020 Privacy - Terms</h5>
        </div>

    </footer>
`


console.log(header);
console.log(gifts);
console.log(footer);
console.log(gridcontainer);


/* let btn = document.getElementById ('btn'); */