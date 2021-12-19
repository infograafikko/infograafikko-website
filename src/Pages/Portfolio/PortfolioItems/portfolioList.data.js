import { createResource } from "solid-js";

const imgDir = '/img/portfolio/'

const portfolioItems = [
    {
        url: "annalect-neural-network",
        name: "Neurotutkimus",
        description: "Mainonnan toimivuutta voidaan testata mittaamalla aivojen tiedostamattomia toimintoja. Tämä infografiikka selventää sen, miten neurotutkimus toimii ja mitä kaikkea sillä voidaan mitata.",
        link: "https://www.annalect.fi/infographic-neuroresearch-helps-understand-subconscious-mind-consumer/",
        linkText: "annalect.fi",
        imgDir,
        bgImg: 'neuro-research-infographics.png',
        img: 'neuro-research-infographics.png'
    },
    {
        url: "infra-materiaalivirrat",
        name: "Rakennustyömaan materiaalivirrat",
        description: "Infran kanssa yhteistyössä toteutettu infografiikka havainnollistaa, millaisista osista rakennustyömaan materiaalivirrat koostuvat.",
        imgDir,
        bgImg: 'infra.png',
        img: 'infra.png'
    },
    {
        url: "faktaa-express",
        name: "Faktaa Express",
        description: "Opetushallitus hyödyntää tutkimusartikkeleissaan infografiikalla rikastettua taittoa.",
        link: "https://www.oph.fi/fi/tilastot-ja-julkaisut/julkaisut/faktaa-express-5a2018-mika-vei-ulkomaille-mika-toisi-takaisin",
        linkText: "Opetushallitus",
        imgDir,
        bgImg: 'faktaa-express-open.png',
        pdf: "https://www.oph.fi/sites/default/files/documents/faktaaexpress5a_2018.pdf"
    },
    {
        url: "retail-revolution-omd",
        name: "Tekoäly Suomessa",
        description: "Toteuttamaani infograafista tutkimusyhteenvetoa jaettiin toimittajille sekä käytettiin presentointimateriaalina, kun OMD Finland esitteli “Tekoälyn tila Suomessa” -tutkimuksen tuloksia. Muun muassa [Helsingin Sanomat](https://www.hs.fi/teknologia/art-2000005434266.html) teki aiheesta jutun.",
        link: "https://www.slideshare.net/OMD_Finland/tutkimus-mit-suomalaiset-ajattelevat-tekolyst/1",
        linkText: "Slideshare",
        imgDir,
        bgImg: 'retail-revolution-prese-sq.jpeg',
        img: 'retail-revolution-kansi.jpeg',
    },
    {
        url: "professoriliitto",
        name: "Sosiaalinen media",
        description: "Infografiikalla keräät tykkäyksiä somessa ja herätät keskustelua.",
        imgDir,
        bgImg: 'professorimaara-kartalla-2020.png',
        img: 'professorimaara-kartalla-2020.png',
        link: "https://www.instagram.com/p/BuLihNaB87w/",
        linkText: "Instagram"
    },
    {
        url: "tivi",
        name: "Älykäs hiirenloukku",
        description: "Tivi-lehdessä julkaistu infografiikka älykkään hiirenloukun toiminnasta.",
        imgDir,
        bgImg: 'tiviSQ.png',
        img: 'tivi.png'
    },
    {
        url: "fish-sludge",
        name: "Näin lietettä hyödynnetään kiertotaloudessa",
        description: "Infografiikka näyttää, kuinka lietettä pystytään käyttämään kiertävänä resurssina.",
        imgDir,
        bgImg: 'ouluSQ.png',
        img: 'fish-sludge-infographics.png',

    },
    {
        url: "annalect-marketing-mix-modelling",
        name: "Markkinointimixin mallinnus",
        description: "Infografiikka esittää mallinnuksen, jonka avulla markkinoija saa selville ne tekijät, jotka selittävät tuotteiden myyntiä.",
        imgDir,
        bgImg: 'infografiikka-mmm-kansi-suomi.png',
        img: 'markkinointimixin-mallinnus-annalect-infografiikka.png',
        link: "https://www.annalect.fi/infographic-marketing-mix-modelling-works/",
        linkText: "annalect.fi",
    },
    {
        url: "nuorisobarometri",
        name: "Nuorisobarometri 2020",
        description: "Infografiikka kiteyttää Nuorisobarometri-kyselytutkimuksen keskeisimmät tulokset.",
        imgDir,
        bgImg: 'nuorisobarometri.jpg',
        pdf: 'https://tietoanuorista.fi/wp-content/uploads/2021/03/FI.pdf',
        link: "https://tietoanuorista.fi/nuorisobarometri/nuorisobarometri-2020/",
        linkText: "tietoanuorista.fi",
    }
]

function resourceData(portfolioId) {
    const portfolioData = portfolioItems.filter(d => d.url == portfolioId)[0]
    return portfolioData
}

export default function ({params, location, navigate}){
    const portfolioId = params.id;

    //In portfolio item page
    if(portfolioId !== undefined) {
        const [portfolioData] = createResource(() => portfolioId, resourceData)
        return portfolioData
    //in portfolio list
    } else {
        return portfolioItems
    }
} 