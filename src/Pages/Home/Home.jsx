import * as s from './Home.styled';
import { lazy } from "solid-js";
import {getImagesInsideRef} from '../Universal/getImagesInsideRef.js';


import Lead from "./Lead/Lead";

export default function Home() {

    let leadRef;

    const HomeLazy = lazy(async () => {
        // await for images inside first element before loading other content
        await getImagesInsideRef(leadRef, "img")
        return import("./HomeLazy")
    });


    return (
        <>
            <s.AnimatedContainer
                background1="#ffb8d6"
                background2="#f7b76d"
            >
                <Lead 
                    title="Infografiikalla viestit selkeämmin, vaikuttavammin ja visuaalisemmin"
                    text="Maailma on täynnä tietoa, joka ansaitsee tulla näytetyksi. Autan yrityksiä, hallintoa ja yhteisöjä esittämään tietoa visuaalisemmin ja kiinnostavammin. Tutustu, miten infografiikka auttaa juuri sinun yritystäsi."
                    buttonText="Ota yhtettä >"
                    buttonPath="/ota-yhteytta"
                    ref={leadRef}
                />
            </s.AnimatedContainer>
            <HomeLazy />
        </>
    )
}
