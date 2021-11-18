import { styled } from "solid-styled-components";
import * as ss from '../../Universal/Universal.styled';

import Form from "./Form/FormMailChimp";

import { sizes } from "../../../lib/screenSizes";

import book from './img/book-mockup.png'


export default function Newsletter({title,paragraph,paragraph2}) {
    return (
        <Container>
            <TextContainer>
                <ss.Title color={"black"}>{title}</ss.Title>
                <ss.Paragraph><strong>{paragraph}</strong></ss.Paragraph>
                <ss.Paragraph>{paragraph2}</ss.Paragraph>
                <Form />
            </TextContainer>
            <LeadImages
                    height="40vh" 
                    heightM="30vh" 
                    heighS="30vh"
            >
                <LeadImage
                    left="10vw" 
                    leftM="50%"
                    leftS="50%"
                    top="40px" 
                    height="40vh" 
                    heightM="30vh" 
                    heighS="30vh" 
                    src={book} 
                    alt={"Kuva Parempia esityksiä -oppaasta"}
                />
            </LeadImages>
            
        </Container>
    )
}

const Container = styled("div")(
    props => `
    padding: 32px 16px;
    display: flex;

    @media only screen and (max-width: ${sizes.m}) {
        flex-direction: column;
    }
  `
);

const TextContainer = styled("div")(
    props => `
    margin-right: 10px;
    width: 40%;
    line-height: 1.2;
    max-width: 1200px;

    @media only screen and (max-width: ${sizes.l}) {
        width: 45%;
    }

    @media only screen and (max-width: ${sizes.m}) {
        width: calc(100% - 20px);
    }
  `
);

export const LeadImages = styled("div")(
    props => `
    margin: 24px;
    flex-direction: row;
    position: relative;
    height: ${props.height};
    max-width: calc(100% - 20px);

  `
);

export const LeadImage = styled("img")(
    props => `
    position: absolute;
    height: ${props.height};
    left: ${props.left};
    top: ${props.top};
    

    @media only screen and (max-width: ${sizes.m}) {
        height: ${props.heightM};
        left: ${props.leftM};
        transform: translateX(-50%);

    }

    @media only screen and (max-width: ${sizes.s}) {
        height: ${props.heightS};
        left: ${props.leftS};
        transform: translateX(-50%);
    }
  `
);