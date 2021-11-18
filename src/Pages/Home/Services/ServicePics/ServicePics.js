import Insta from './instaphone.png';
import PhoneTemplate from './phone-with-shadow.svg';
import LaptopTemplate from './laptop-with-shadow.svg';

import PowerPoint from './markkinointimix.png';
import ProfessoriliittoEmbed from './professoriliitto-embed.jpg';


export default [
    {
        name: "professoriliitto",
        component: undefined,
        background: PhoneTemplate,
        embed: ProfessoriliittoEmbed,
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
        component: PowerPoint,
        background: LaptopTemplate,
        embed: ProfessoriliittoEmbed,
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