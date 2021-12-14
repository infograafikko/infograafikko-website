import { html as muutosjohtaminen } from './muutosjohtaminen.md'
import { html as nuorisobarometriVaikuttavuus } from './nuorisobarometri-vaikuttavuus.md'
import { html as paremmatKaaviot } from './paremmat-kaaviot.md'
import { html as parhaatKaytannot } from './tiedon-visualisointi-parhaat-kaytannot.md'
import { html as satokausikalenteri } from './satokausikalenteri.md'

const dir = '/img/blog/'
const imgDir = new URL(dir, import.meta.url).href;

export default [
    {
        url: "muutosjohtaminen-tiedon-visualisoinnin-nakokulmasta",
        title: "Muutosjohtaminen tiedon visualisoinnin näkökulmasta",
        lead: "Tärkeintä muutosjohtamisessa on toimeenpano. Kun kerrot uusista tutkimustuloksista sidosryhmillesi, tärkeintä on tehdä se niin kiinnostavasti, että tämän jälkeen laitetaan hihat heilumaan.",
        content: muutosjohtaminen,
        imgDir,
        coverImg: 'kansikuva-data-presentation.png'
    },
    {
        url: "nuorisobarometri-vaikuttavuus",
        title: "Näin infografiikka on parantanut Nuorisobarometrin vaikuttavuutta",
        lead: "Nuorisobarometrin vaikuttavuustuloksiin on oltu viimeisen kahden vuoden ajan erityisen tyytyväisiä. Tutkimustulos on välitetty aiempaa laajemmalle joukolle kustannustehokkaalla tavalla. Lue, miten infografiikka on auttanut parantamaan tuloksia.",
        content: nuorisobarometriVaikuttavuus,
        imgDir,
        coverImg: 'nuorisobarometri.jpg'
    },
    {
        url: "paremmat-graafit-esityksiin",
        title: "Näin teet parempia graafeja esityksiin",
        lead: "Tässä muutama infograafikon vinkki, miten esittää tehdä selkeämpiä ja ymmärrettävämpiä graafeja.",
        content: paremmatKaaviot,
        imgDir,
        coverImg: 'paremmat-kaaviot.jpg'
    },
    {
        url: "tiedon-visualisointi-parhaat-kaytannot",
        title: "Tiedon visualisointi - parhaat käytännöt",
        lead: "Millaisiin luokkiin tiedon visualisointitavat voi jakaa? Tämä artikkeli auttaa ymmärtämään sinua paremmin infografiikan perusteet.",
        content: parhaatKaytannot,
        imgDir,
        coverImg: 'concept-visualization.jpeg'
    },
    {
        url: "satokausikalenteri-kotimaiset-tuotteet",
        title: "Kotimaiset satotuotteet -kausikalenteri",
        lead: "Kotimaiset satotuotteet ovat erinomainen tapa tukea suomalaista lähellä tuotettua ruokaa. Tässä kalenteri sesonkien seuraajalle.",
        content: satokausikalenteri,
        imgDir,
        coverImg: 'satokausikalenteri-elokuu.png'
    },
]