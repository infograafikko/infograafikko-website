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
                                bgImg={work.bgImg}
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
    justify-content: center;  
    padding: 6px 16px;
    margin: 10px 0;
    `
);


const BGImg = styled("div")(
    props => `
    margin: 0px 10px 10px 0;
    width: 300px;
    height: 300px;
    background-image: url(${props.bgImg});
    background-size: cover;
    background-position: top center;
  `
);
