import * as s from './Home.styled';


import LogoList from "./LogoList/LogoList";
import Services from "./Services/Services";
import Newsletter from "./Newsletter/Newsletter";
import Interested from "./Interested/Interested";

import Clients from "./LogoList/Clients/Clients";
import Tech from "./LogoList/Tech/Tech";

import Footer from "../Universal/Footer";

export default function HomeLazy({}){
    return (
        <>
        <s.Container
                background="white"
            >
                <LogoList 
                    title="Asiakkaita"
                    logos={Clients}
                    maxHeight={"50px"}
                    maxHeightM={"40px"}
                    margin={"24px 40px 24px 0"}
                    marginM="24px 24px 24px 0"
                />
            </s.Container>
            <s.Container
                background="#f2f2f2"
            >
                <Services 
                    title="Palvelut"
                    text="Tarvitsit sitten infografiikkaa tai vuorovaikutteisia työkaluja, autan teitä visualisoimaan tietoa paremmin. Toteutan visualisoinnit alusta loppuun räätälöitynä täysin asiakkaan tarpeisiin. Lopputuloksena voi esimerkiksi olla verkossa jaettava infografiikka, presentaatio tai interaktiivinen työkalu."
                    text2="Tarjoan apua infograafien käsikirjoittamisessa, datalähteiden löytämisessä ja datan analysoinnissa. Konsultoin siinä, miten ja millaisin työkaluin tietoa kannattaa esittää. "
                />
            </s.Container>
            <s.Container
                background="white"
            >
                <LogoList 
                    title="Teknologiat ja työkalut"
                    logos={Tech}
                    maxHeight={"60px"}
                    maxHeightM={"50px"}
                    margin={"16px 40px 24px 0"}
                    marginM="16px 24px 24px 0"

                />
            </s.Container>
            <s.AnimatedContainer
                background1="#fccade"
                background2="#f7b76d"
            >
                <Newsletter 
                    title="Lataa ilmainen infografiikka ja tiedon visualisointi -opas"
                    paragraph="Saat ilmaisen oppaan tiedon esittämiseen, kun tilaat uutiskirjeeni."
                    paragraph2="Opit oppaan avulla kolme avaintaitoa tiedon parempaan esittämiseen. Tilaamalla oppaan saat myös uutiskirjeeni. Uutiskirjeessä annan vinkkejä infografiikan esittämiseen ja tiedon visualisointiin."
                    target="mainPage"
                />
            </s.AnimatedContainer>
            <s.Container
                background="white"
            >
                <Interested 
                    title="Kiinnostuitko?"
                    text="Toteutan havainnollistavaa infografiikkaa, tiedonvisualisointia ja interaktiivisia toteutuksia. Pidän myös koulutuksia. Ota yhteyttä ja jutellaan yhteistyömahdollisuuksista."

                />
            </s.Container>
        </>

    )
}