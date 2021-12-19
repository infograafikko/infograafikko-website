
const imgDir = new URL('/img/home/', import.meta.url).href;


export default [
    {
        name: "professoriliitto",
        component: undefined,
        background: imgDir + 'phone-with-shadow.svg',
        embed: imgDir + 'professoriliitto-embed.jpg',
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
        component: imgDir + 'markkinointimix.png',
        background: imgDir + 'laptop-with-shadow.svg',
        embed: imgDir + 'professoriliitto-embed.jpg',
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