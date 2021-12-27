import { styled } from "solid-styled-components";
import * as ss from '../../Universal/Universal.styled';

import { sizes } from "../../../lib/screenSizes";

function RenderLogos({logos, maxHeight, maxHeightM, margin, marginM}) {
  return(
    <For each={logos}>{(logo) => {
      
      return(
        <Img 
          src={logo.imgDir + logo.img} 
          maxHeight={maxHeight}
          maxHeightM={maxHeightM}  
          margin={margin}
          marginM={marginM}
          alt={logo.alt}
        />
      )
    }}

    </For>
  )
}

export default function LogoList({title, logos, maxHeight, maxHeightM, margin, marginM}) {
    return (
        <Container>
            <ss.Title>{title}</ss.Title>
            <ImagesContainer>
              <RenderLogos
                logos={logos}
                maxHeight={maxHeight}
                maxHeightM={maxHeightM}  
                margin={margin}
                marginM={marginM}
              />
            </ImagesContainer>

        </Container>
    )
}


const Container = styled("div")(
    props => `
    padding: 12px 16px;
  `
);

const ImagesContainer = styled("div")(
    props => `
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  `
);

const Img = styled("Img")(
    props => `
    display: block;
    max-height: ${props.maxHeight};
    margin: ${props.margin};
    
    @media only screen and (max-width: ${sizes.m}) {
        max-height: ${props.maxHeightM};
        margin: ${props.marginM};

    }

  `
);

const Svg = styled("svg")(
  props => `
  width: 100%;
  height: auto;  

`
);