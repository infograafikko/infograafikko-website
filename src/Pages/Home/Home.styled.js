import { styled, keyframes } from "solid-styled-components";

export const Container = styled("div")(
    props => `
    position: relative;
    background-color: ${props.background};
    width: 100%;

  `
);

const animatedGradient = keyframes` 
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`

export const AnimatedContainer = styled("div")(
    props => `
    position: relative;
    background: linear-gradient(270deg, ${props.background1}, ${props.background2});
    background-size: 400% 400%;
    width: 100%;

    animation-name: ${animatedGradient};
    animation-duration: 40s;
    animation-iteration-count: infinite;

  `
);