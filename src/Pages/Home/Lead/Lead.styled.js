import { styled, keyframes } from "solid-styled-components";
import { sizes } from "../../../lib/screenSizes";

export const LeadContent = styled("div")(
    props => `
    display: flex;
    max-width: ${sizes.xl};
    margin: auto;
    padding: 0 16px;

    @media only screen and (max-width: ${sizes.m}) {
        flex-direction: column;
    }
  `
);

export const LeadTexts = styled("div")(
    props => `
    padding-top: 36px;
    margin-right: 10px;
    width: 40%;
    line-height: 1.2;

    @media only screen and (max-width: ${sizes.l}) {
        width: 45%;
    }

    @media only screen and (max-width: ${sizes.m}) {
        width: calc(100% - 20px);
    }

  `
);

export const Title = styled("h1")(
    props => `
    font-family: 'Palanquin', sans-serif;
    font-weight: 700;
    font-size: 41px;
    margin: 0;

    @media only screen and (max-width: ${sizes.l}) {
        font-size: 36px;
    }

  `
);

export const Text = styled("p")(
    props => `
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 18px;
    margin: 24px 0;
    line-height: 1.4;

    @media only screen and (max-width: ${sizes.m}) {
        width: calc(100% - 20px);
    }
  `
);

export const LeadImages = styled("div")(
    props => `
    margin: 24px;
    flex-direction: row;
    position: relative;
    height: ${props.height};
    max-width: calc(100% - 20px);

  `
);

export const ImageStack = styled("div")(
  props => `
  position: absolute;
  height: ${props.height};
  left: ${props.left};
  top: ${props.top};

  @media only screen and (max-width: ${sizes.m}) {
      height: ${props.heightM};
      left: ${props.leftM};
  }

  @media only screen and (max-width: ${sizes.s}) {
      height: ${props.heightS};
      left: ${props.leftS};
  }
`
);

export const NonClippedImage = styled("img")(
  props => `
  height: 100%;
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

//clip-path: inset(2% 4% 24% 4% round 3vh);
const animateToPosition = (leftOriginal, leftEnd) => keyframes` 
    0% { left: ${leftOriginal}; }
    100% { left: ${leftEnd}; }
`

export const LeadImage = styled("img")(
    props => `
    position: absolute;
    height: ${props.height};
    left: ${props.leftOriginal};
    top: ${props.top};
    animation: ${props.animate && animateToPosition(props.leftOriginal, props.left)} 1s forwards ease;

    @media only screen and (max-width: ${sizes.m}) {
        height: ${props.heightM};
        left: ${props.leftOriginal};
    }

    @media only screen and (max-width: ${sizes.s}) {
        height: ${props.heightS};
        left: ${props.leftOriginal};
    }
  `
);
//clip-path: polygon(285px 11px, 259px 11px, 250px 18px, 250px 21px, 232px 36px, 108px 36px, 89px 21px, 89px 18px, 80px 11px, 54px 11px, 15px 50px, 15px 605px, 54px 645px, 285px 645px, 324px 605px, 324px 50px, 285px 11px);    
//clip-path: ${props.clipPath !== undefined && `url(${props.clipPath})`};