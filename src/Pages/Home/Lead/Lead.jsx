import * as s from './Lead.styled';
import { createSignal } from "solid-js";
import Button from '../../Universal/Button';
import {calcScrollPosition} from '../../Universal/scrollFunctions.js';

const imgDir = new URL('/img/home/', import.meta.url).href;


const speed = 10;

function defineInset(scrollPos, multiplier){
    const realSpeed = speed*multiplier
    const insetTop = 1.5 + scrollPos/realSpeed + "%";
    const insetBottom = 37 - scrollPos/realSpeed + "%";
    return `${insetTop} 4% ${insetBottom} 4%`;
}

const defineTop = (scrollPos, multiplier) => {
    const realSpeed = speed*multiplier
    return -scrollPos/realSpeed + "%"
};

export default function Lead({
    title,
    text,
    buttonText,
    buttonPath,
    ref
}) {

    const [scrollPos, setScrollPos] = createSignal(-20)
    calcScrollPosition(setScrollPos)


    return(

        <s.LeadContent ref={ref}>
            <s.LeadTexts>
                <s.Title id="title">{title}</s.Title>
                <s.Text id="lead">{text}</s.Text> 
                    <Button buttonType="primary" buttonPath={buttonPath} text={buttonText} />
            </s.LeadTexts>
            <s.LeadImages height="70vh">
                <s.LeadImage 
                    leftOriginal="100vw"
                    left="10vw" 
                    leftM="10vw"
                    leftS="10vw"
                    top="40px" 
                    height="60vh" 
                    heightM="50vh" 
                    heighS="50vh" 
                    src={imgDir + 'lead-laptop.png'} 
                    animate={true}
                    alt={"Infografikka esittää, miten kiviaines kiertää työmaalla"}

                />
                <s.ImageStack
                    left="10px"
                    leftM="10px" 
                    leftS="-10px"
                    height="70vh"
                    heightM="70vh" 
                    heightS="70vh" 
                >
                    <s.NonClippedImage 
                        src={imgDir + 'lead-phone-plain.svg'}
                        alt={"Puhelin upotettuna taittoon - päällä näkyy infografiikkaa"}
                    />
                    <s.ClippedImage 
                        src={imgDir + 'lead-phone-infographic.svg'}
                        inset={defineInset(scrollPos(), 2.5)}
                        insetMobile={defineInset(scrollPos(), 5)}
                        insetRound={"3vh"}
                        insetRoundMobile={"24px"}
                        top={defineTop(scrollPos(), 2.5)}
                        topMobile={defineTop(scrollPos(), 5)}
                        alt={"Infografikkaa esittää, miten voit optimoida markkinointiviestejäsi neurotutkimuksen avulla."}
                    /> 
                </s.ImageStack>
                
            </s.LeadImages>
        </s.LeadContent>
    )
}

