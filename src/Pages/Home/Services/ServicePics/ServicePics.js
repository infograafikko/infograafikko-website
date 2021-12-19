
const imgDir = '/img/home/';


export default [
    {
        name: "professoriliitto",
        component: undefined,
        background: new URL(imgDir + 'phone-with-shadow.svg', import.meta.url).href,
        embed: new URL(imgDir + 'professoriliitto-embed.jpg', import.meta.url).href,
        type: "Some-infografiikka",
        alt: "Professoriliiton infografikka Instagramissa",
        altBg: "Puhelin upotettuna taittoon - päällä näkyy instagram-upotus",
        marginTextXL: "-15px auto auto 10px",
        marginText: "-5px auto auto 10px",
        marginTextS: "-10px auto auto 10px",
        marginPicture: "-5px auto auto auto",
        marginPictureS: "-5px auto auto -15px",
        textWidthXS: "auto",
        height: "50vh",
        heightS: "40vh",
        zIndex: 2
    },{
        name: "annalect",
        component: new URL(imgDir + 'markkinointimix.png', import.meta.url).href,
        background: new URL(imgDir + 'laptop-with-shadow.svg', import.meta.url).href,
        embed: new URL(imgDir + 'professoriliitto-embed.jpg', import.meta.url).href,
        type: "Vaikuttavat esitykset",
        alt: "Annalectin Powerpoint-esitys",
        altBg: undefined,
        marginTextXL: "-15px 47px auto auto",
        marginText: "-15px auto auto 10px",
        marginTextS: "-10px auto auto 0px",
        textWidthXS: "30vw",
        marginPicture: "10px auto auto auto",
        marginPictureS: "10px auto auto -10vh",
        height: "45vh",
        heightS: "35vh",
        zIndex: 1
    },
    
];