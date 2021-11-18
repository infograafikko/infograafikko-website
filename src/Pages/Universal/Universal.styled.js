import { styled } from "solid-styled-components";
import { sizes } from "../../lib/screenSizes";

export const Title = styled("h2")(
    props => `
    color: ${props.color !== undefined ? props.color: "#003774"};
    font-family: "Palanquin", sans-serif;
    font-weight: 700;
    font-size: 32px;
    margin: 0px;
    line-height: 1.25;
  `
);

export const Paragraph = styled("p")(
  props => `
  
`
);