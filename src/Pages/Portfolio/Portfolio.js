import { styled, keyframes } from "solid-styled-components";
import PortfolioList from "./img/PortfolioList";

const RenderWorkContainer = ({works}) => {
    return (
        <For each={works}>{work => {
            return(
                <BGImg 
                    bgImg={work.bgImg}
                />
            )
        }}</For>      
    )
}

export default function Portfolio({

}) {
    return(
        <Container>
            <RenderWorkContainer 
                works={PortfolioList}
            />
        </Container>
    )
}

const Container = styled("div")(
    props => `
    padding: 6px 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
