import { styled } from "solid-styled-components";
import * as ss from '../../Universal/Universal.styled';
import Button from "../../Universal/Button";

import { sizes } from "../../../lib/screenSizes";
import MeImage from './img/joel-kanerva3.jpg'

export default function Interested({title,text}) {
    return(
        <Container>
            <Content>
                <ContentLeft>
                    <ss.Title>{title}</ss.Title>
                    <TextContainer>
                        <ss.Paragraph>{text}</ss.Paragraph>
                    </TextContainer>
                    <ButtonsContainer>
                        <Button 
                            text="Ota yhteyttä >"
                            buttonPath="/ota-yhteytta"
                            buttonType="primary"
                        />
                        <Button 
                            text="LinkedIn-profiili >"
                            buttonPath="https://www.linkedin.com/in/joelkanerva/"
                            buttonType="secondary"
                            target="_blank"
                        />
                    </ButtonsContainer>
                </ContentLeft>
                <ContentRight
                    bgImg={"https://main.dxa7363xhsxq9.amplifyapp.com/static/media/joel-kanerva3.bc0eaa3a.jpg"}
                >
                    <BgImg src={MeImage} />
                    </ContentRight>
            </Content>
        </Container>
    )
}

const Container = styled("div")(
    props => `
    padding: 12px 0px 12px 16px;
  `
);

const TextContainer = styled("div")(
    props => `
    width: 100%;
  `
);

const ButtonsContainer = styled("div")(
    props => `
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: ${sizes.s}) {
        flex-direction: column;
    }
  `
);



const Content = styled("div")(
    props => `
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: ${sizes.m}) {
        flex-direction: column;
    }
  `
);

const ContentLeft = styled("div")(
    props => `
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    max-width: 600px;


    @media only screen and (max-width: ${sizes.m}) {
        width: calc(100% - 20px);
    }

  `
);

const ContentRight = styled("div")(
    props => `
    flex-direction: row;
    position: relative;
    width: 100%;
    background-color: #f2f2f2;
    min-height: 300px;

    @media only screen and (max-width: ${sizes.m}) {
        margin-top: 24px;
    }
    

  `
);

const BgImg = styled("div")(
    props => `
    flex-direction: row;
    position: relative;
    margin: auto;
    background-image: url(${props.src});
    background-size: cover;
    background-position: center;
    width: 100%;
    max-width: 1000px;
    min-height: 300px;

  `
);
