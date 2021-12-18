import { createMemo, Show } from "solid-js";
import { useLocation, useData, Link } from "solid-app-router";
import { styled } from "solid-styled-components";
import * as ss from '../Universal/Universal.styled';
import SolidMarkdown from "solid-markdown";
import { sizes } from '../../lib/screenSizes.js'
import { filterDataBasedOnUrl } from '../../lib/filterDataBasedOnUrl.js'

import Button from '../Universal/Button';
import NotFound from '../notFound'


export default function PortfolioItems() {
    const itemData = useData();
    
    const { name, description, link, linkText, imgDir, img, pdf } = itemData()

    return(
        <Show when={typeof itemData() == "object"} fallback={<NotFound />}>
            <Container>
                <ContentContainer>
                <ss.Title>{name}</ss.Title>
                <ss.Paragraph><SolidMarkdown children={description} /></ss.Paragraph>
                <Show when={link}>
                    <ss.Paragraph>Linkki: <LinkA href={link} target="_blank">{linkText}</LinkA></ss.Paragraph>
                </Show>
                <Show when={img}>
                    <InfographicImage 
                        src={imgDir + img}
                    />
                </Show>
                <ButtonContainer>
                <Show when={pdf}>
                    <a href={pdf} target="_blank">
                        <Button 
                            type="primary"
                            text="Avaa PDF uudella välilehdellä"
                        />
                    </a>
                </Show>
                <Link style={{"margin-top": "20px"}} href='/portfolio'>
                    <Button 
                        text={"← Takaisin portfolioon"}
                        buttonType="secondary"
                    />                
                </Link>
                </ButtonContainer>
                </ContentContainer>
            </Container>
            
        </Show>
    )
    
}

const Container = styled("div")(
    props => `
    padding: 16px 16px;
    background-color: #F1F2F4;
    min-height: 100vh;
  `
);

const ButtonContainer = styled("div")(
    props => `
    display: flex;
    flex-direction: column;
    margin-top: 30px;

  `
);

const ContentContainer = styled("div")(
    props => `
    padding: 16px 16px;
    background-color: white;

    max-width: 800px;
    margin: auto;
  `
);

const LinkA = styled("a")(
    props => `
    font-weight: 700;
    text-decoration: underline;
    color: black;
  `
);

const InfographicImage = styled("img")(
    props => `
    display: block;
    margin: 20px auto;
    width: 100%;
  `
);
