import { styled, keyframes } from "solid-styled-components";
import { sizes } from "../../../lib/screenSizes";


export const Container = styled("div")(
    props => `
    padding: 6px 16px;
  `
);

export const AllImages = styled("div")(
    props => `
    display: flex;
    flex-direction: row;
    padding: 20px;

    justify-content: center;

    @media only screen and (max-width: 1800px) {
        flex-direction: column;
    }

  `
);

export const TextContainer = styled("div")(
    props => `
    display: flex;
    margin-bottom: 24px;

    @media only screen and (max-width: ${sizes.m}) {
        flex-direction: column;
    }
  `
);

export const Paragraph = styled("p")(
    props => `
    width: calc(50% - 20px);
    margin: 14px 20px 0 0;

    @media only screen and (max-width: ${sizes.m}) {
        width: calc(100% - 20px);
    }
  `
);

export const ImagesContainer = styled("div")(
    props => `
    
    position: relative;
    display: flex;
    flex-direction: row-reverse;

    @media only screen and (max-width: 1800px) {
        flex-direction: row;
    }

    @media only screen and (min-width: 1000px) {
        justify-content: center;
        left: 100px;
    }
  `
);

export const ImagesContainer2 = styled("div")(
    props => `
    position: relative;
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: ${sizes.s}) {
        flex-direction: column;
    }

    @media only screen and (min-width: 1000px) {
        justify-content: center;
    }
  `
);

export const ImgContainer = styled("div")(
    props => `
    position: relative;
    height: fit-content;
    width: fit-content;
    z-index: ${props.zIndex};

    @media only screen and (max-width: ${sizes.s}) {
        display: ${props.displayS};
    }
  `
);

export const Img = styled("img")(
    props => `
    width: auto;
    height: ${props.height};
    display: block;
    margin: ${props.margin};
    
    @media only screen and (max-width: ${sizes.s}) {
        margin: ${props.marginS};
        height: ${props.heightS};
    }
  `
);

export const ImgText = styled("p")(
    props => `
    color: #003774;
    font-family: "Palanquin", sans-serif;
    font-weight: 600;
    font-size: 16px;
    margin: ${props.margin};
    line-height: 1.25;
    text-align: ${props.centerText ? "center" : "left"};
    background-color: none;
    width: fit-content;

    @media only screen and (min-width: 1800px) {
        margin: ${props.marginXL};
    }

    @media only screen and (max-width: ${sizes.s}) {
        margin: ${props.marginS};
    }

    @media only screen and (max-width: ${sizes.xs}) {
        max-width: ${props.widthXS};

    }
  `
);

export const ImageStack = styled("div")(
    props => `
    width: auto;
    height: ${props.height};
    display: block;
    margin: ${props.margin};
    position: relative;
    
    @media only screen and (max-width: ${sizes.s}) {
        margin: ${props.marginS};
        height: ${props.heightS};
    }
  `
  );
  
  export const NonClippedImage = styled("img")(
    props => `
    height: 100%;
  `
  );

  export const EmbedImage = styled("img")(
    props => `
    position: absolute;
    height: 21vh;
    width: auto;
    left: 8%;
    top: 20%;

    @media only screen and (max-width: ${sizes.s}) {
        height: 17vh;
        left: 8%;
        top: 20%;
    }
  `
  );
  
  
  
  export const ClippedImage = styled("img")(
    props => `
    clip-path: inset(${props.inset} round ${props.insetRound});
    height: 100%;
    position: absolute;
    left: 0;
    top: ${props.top};
  
    @media only screen and (max-width: ${sizes.m}) {
      clip-path: inset(${props.insetMobile} round ${props.insetRoundMobile});
      top: ${props.topMobile};
    }
  `
  );
  
  export const ClippedImageNew = styled("div")(
    props => `
    clip-path: inset(${props.inset} round ${props.insetRound});
    height: 100%;
    position: absolute;
    left: ${props.left};
    top: ${props.top};
  
    @media only screen and (max-width: ${sizes.m}) {
      clip-path: inset(${props.insetMobile} round ${props.insetRoundMobile});
      top: ${props.topMobile};
    }
  `
  );


  export const AnimateContainer = styled("div")(
    props => `
      height: 100%;
      width: auto;
    
  `
  );