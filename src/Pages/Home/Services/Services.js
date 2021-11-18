import { styled } from "solid-styled-components";
import { sizes } from "../../../lib/screenSizes";
import { refPositionInViewport } from '../../Universal/scrollFunctions'
import { createSignal } from 'solid-js';

import * as ss from '../../Universal/Universal.styled';
import * as s from './Services.styled';

import ServicePics from "./ServicePics/ServicePics";
import ServicePicsRow2 from "./ServicePics/ServicePicsRow2";
import Professoriliitto from "./ServicePics/Professoriliitto";


const RenderServicePics = ({ServicePics}) => {
    let imgRef;
    
    refPositionInViewport(".followMe", .5, "#heartFilled", "#heartUnfilled")


    return(
        <For each={ServicePics}>{(pic) => {
            return(
                <s.ImgContainer
                    zIndex={pic.zIndex}
                >
                    {pic.background !== undefined ?
                    <s.ImageStack
                        height={pic.height}
                        heightS={pic.heightS}
                        margin={pic.marginPicture}
                        marginS={pic.marginPictureS}
                        ref={imgRef}
                        className="followMe"
                    >
                        {pic.name == "professoriliitto" ?
                        <>
                            <s.NonClippedImage 
                                src={pic.background} 
                                alt={"Puhelin upotettuna taittoon - päällä näkyy instagram-upotus"}
                            />
                            <s.ClippedImageNew
                                inset={"3% 3% 3% 3%"}
                                insetMobile={"3% 3% 3% 3%"}
                                insetRound={"3vh"}
                                insetRoundMobile={"24px"}
                                top={"0px"}
                                topMobile={"0px"}
                                left={"0"}
                            >
                                <Professoriliitto 
                                    animate={imgPosInViewport() < 0.5}
                                />
                            </s.ClippedImageNew>
                            <s.EmbedImage 
                                height={pic.height}
                                heightS={pic.heightS}
                                src={pic.embed} 
                                alt={"Infografiikka-viesti Instagramissa."}
                            />
                        </> :
                        <>
                            <s.NonClippedImage 
                                src={pic.background} 
                                alt={"Puhelin upotettuna taittoon - päällä näkyy instagram-upotus"}
                            />
                            <s.ClippedImageNew
                                top={"10%"}
                                topMobile={"12%"}
                                left={"12.5%"}
                            >
                                <s.Img 
                                    src={pic.component} 
                                    alt={pic.alt}
                                    height={"32vh"}
                                    heightS={"23.5vh"}
                                />
                            </s.ClippedImageNew>
                        </>
                        }
                    </s.ImageStack>
                    :
                    <s.Img 
                        src={pic.component} 
                        alt={pic.alt} 
                        height={pic.height}
                        heightS={pic.heightS}
                        margin={pic.marginPicture}
                        marginS={pic.marginPictureS}
                    />}
                    <s.ImgText
                        margin={pic.marginText}
                        marginS={pic.marginTextS}
                        marginXL={pic.marginTextXL}
                        widthXS={pic.textWidthXS}
                        centerText={pic.centerText}
                    >{pic.type}</s.ImgText>
                </s.ImgContainer>
            )     
            }
        }
        </For>
    )
}

export default function Services( {title, text, text2} ) {

    return(
        <s.Container>
            <ss.Title>{title}</ss.Title>
            <s.TextContainer>
                <s.Paragraph>{text}</s.Paragraph>
                <s.Paragraph>{text2}</s.Paragraph>
            </s.TextContainer>
            <s.AllImages>
            <s.ImagesContainer>
                <RenderServicePics 
                    ServicePics={ServicePics}
                />
            </s.ImagesContainer>
            <s.ImagesContainer2>
                <RenderServicePics 
                    ServicePics={ServicePicsRow2}
                />
            </s.ImagesContainer2>
            </s.AllImages>
        </s.Container>
    )
}
