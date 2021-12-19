import { styled } from "solid-styled-components";
import * as ss from '../Universal/Universal.styled';
import { Show } from 'solid-js';
import { useData, Link } from "solid-app-router";


const RenderWorkContainer = ({works}) => {
    return (
        <ImgsContainer>
            <For each={works}>{work => {
                //console.log("https://www.infograafikko.fi/portfolio/" + work.url)
                return(
                    <ImgContainer>
                        <Link href={"/portfolio/" + work.url}>
                            <BGImg 
                                bgImg={new URL(work.imgDir + work.bgImg, import.meta.url).href}
                            />
                        </Link>
                    </ImgContainer>
                )
            }}</For>      
        </ImgsContainer>
    )
}

export default function Portfolio() {

    const portfolioList = useData();
    return(
        <Container>
            <Show when={portfolioList.length > 0}>
                <TitleContainer>
                    <ss.Title id="title">Portfolio</ss.Title>
                </TitleContainer>
                <RenderWorkContainer 
                    works={portfolioList}
                />
            </Show>
        </Container>
    )
}

const Container = styled("div")(
    props => `
    padding: 12px 16px;
    background-color: #F1F2F4;

    @media only screen and (max-width: 1024px) {
        padding: 12px 0px;
    }
  `
);

const ImgContainer = styled("div")(
    props => `

  `
);

const TitleContainer = styled("div")(
    props => `
    margin: auto;
    max-width: 960px;

    @media only screen and (max-width: 980px) {
        max-width: 660px;
        padding-left: 15px;
    }
  `
);


const ImgsContainer = styled("div")(
    props => `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;  
    padding: 8px 16px;
    margin: 16px auto;
    background-color: white;
    max-width: 930px;

    @media only screen and (max-width: 980px) {
        max-width: 620px;
    }

    `
);


const BGImg = styled("div")(
    props => `
    margin: 8px 0;
    width: 300px;
    height: 300px;
    background-color: #F1F2F4;
    background-image: url(${props.bgImg});
    background-size: cover;
    background-position: top center;

    @media only screen and (max-width: 680px) {
        width: calc(50vw - 32px);
        height: calc(50vw - 32px);
    }
  `
);
