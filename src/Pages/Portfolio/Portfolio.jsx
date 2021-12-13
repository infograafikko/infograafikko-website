import { styled } from "solid-styled-components";
import * as ss from '../Universal/Universal.styled';

import { useData, Link } from "solid-app-router";


const RenderWorkContainer = ({works}) => {
    return (
        <ImgsContainer>
            <For each={works}>{work => {
                return(
                    <ImgContainer>
                        <Link href={"/portfolio/" + work.url}>
                            <BGImg 
                                bgImg={work.imgDir + work.bgImg}
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
            <ss.Title style={{"text-align": "center"}}>Portfolio</ss.Title>
            <RenderWorkContainer 
                works={portfolioList}
            />
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
    background-image: url(${props.bgImg});
    background-size: cover;
    background-position: top center;

    @media only screen and (max-width: 680px) {
        width: calc(50vw - 32px);
        height: calc(50vw - 32px);
    }

    @media only screen and (max-width: 500px) {
        width: calc(100vw - 32px);
        height: calc(100vw - 32px);
    }
  `
);
