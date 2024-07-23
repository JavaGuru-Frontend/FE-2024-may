let num1 = 10;
let num2 = 20;
let result = function(num1, num2) {
    console.log(num1 + num2)}

/*     Не открывается код в браузере. Виден только результат.
 */

let webpage = {
    header: {
        logo: {url: `img/logo.png`},
        navigation: [
            {
                name: `Home`,
                url: `#`
            },
            {
                name: `About Us`,
                url: `#`
            },
            {
                name: `Services`,
                url: `#`
            },
            {
                name: `Blog`,
                url: `#`
            }
        ],
        btn: {
            name: `GIFT FINDER`,
            url: `#`
        }
    },

    main: { 
        heroblock: {
            text1: `Find a gift for your wife or girlfriend`,
            text2: `Struggling to find a gift for your wife or girlfriend? No problem!`,
            btn1: {
                name: `Find gift now`,
                url: `#`
            },
            img1: {url: `../img/bg1.png`},
            img2: {url: `../img/bg2.png`},
            text3: `We’ve actually already asked hundreds of women what they want, and made a database with the results.
                All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.`,
            btn2: {
                name: `Find gift no`,
                url: `#`
            }
        },

        title1: {
            text1: `Our Best Blogs Ever`,
            text2: `“Try our blog to find the best tips and tricks to select your gift”`
        },

        gifts: [
            {img: `img/gift1.png`,
            text: `Birthday`,
            link: {name: `See more`,
                    url: `#`}
            },

            {img: `img/gift2.png`,
            text: `Anniversary`,
            link: {name: `See more`,
                    url: `#`}
            },

            {img: `img/gift3.png`,
            text: `Valentine's Day`, /* Почему не стоит использовать двойные кавычки? */
            link: {name: `See more`,
                    url: `#`}
            },

            {img: `img/gift4.png`,
            text: `Christmas`,
            link: {name: `See more`,
                    url: `#`}
            }
        ],
        
        orangeblock: {
            text1: `Ready to get started?`,
            text2: `Sign up or contact us`,
            btn1: {
                name: `Find gift now`,
                url: `#`
            },
            btn2: {name: `How it works`,
                url: `#`
            }
        },

        title1: {
            text1: `Our Best Blogs Ever`,
            text2: `“Try our blog to find the best tips and tricks to select your gift”`
        },

        blackblock: {
            img: `img/blackblock.png`,
            text1: `Mr. John Doe`,
            text2: `The best way to wish your wife`,
            link: {
                name: `Read More`,
                url: `#`
            }
        },
        
        whiteblock: {
            text1: `Database to find the gifts for your girlfriend`,
            text2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...`,
            link1: {
                name: `Read More`,
                url: `#`
            },
            text3: `How Artificial Intelligence read your mind to find the best gift`,
            text4: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...`,
            link2: {
                name: `Read More`,
                url: `#`
            }
        }
    },

    footer: {
        logo: {url: `img/logo.png`},
        navigation: [
            {
                name: `Home`,
                url: `#`
            },
            {
                name: `About Us`,
                url: `#`
            },
            {
                name: `Services`,
                url: `#`
            },
            {
                name: `Blog`,
                url: `#`
            }
        ],
        
        footer__icons: [
            {
                name: `facebook`,
                url: `#`
            },
            {
                name: `instagram`,
                url: `#`
            },
            {
                name: `youtube`,
                url: `#`
            },
            {
                name: `twitter`,
                url: `#`
            },
            {
                name: `pinterest`,
                url: `#`
            }
        ],

        footer__privacy: {
            text1: `© 2010 — 2020`,
            link: {
                name: `Privacy — Terms`,
                url: `#`
            }
        }

    }

}