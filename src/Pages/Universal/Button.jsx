import { styled } from "solid-styled-components";
import { Link } from "solid-app-router";

import { sizes } from "../../lib/screenSizes";

export default function Button ({
    buttonType="primary",
    color="#f7931e",
    border="#f7931e",
    textColor="black",
    colorSecondary="white",
    borderSecondary="#f7931e",
    textColorSecondary="black",
    fontFamily="Palanquin",
    fontWeight="600",
    fontSize="16px",
    text="placeholder",
    buttonPath="",
    target="",
    onClick
}) {
    const buttonStyles = buttonType == "primary" ? 
    {
        color,
        border,
        textColor,
        fontFamily,
        fontWeight,
        fontSize
    }
    :
    {
        color: colorSecondary,
        border: borderSecondary,
        textColor: textColorSecondary,
        fontFamily,
        fontWeight,
        fontSize
    }

    return(
        buttonPath.length > 1 ?
        <LinkStyled rel={target == "_blank" ? "noreferrer" : ""} href={buttonPath} target={target}>
            <ButtonContainer
                {...buttonStyles}
            >
                {text}
            </ButtonContainer>
        </LinkStyled>
        :
        <ButtonContainer
            name="subscribe" id="mc-embedded-subscribe" class="button"
            type="submit"
            onClick={onClick}
            {...buttonStyles}
        >
            {text}
        </ButtonContainer>
    )
}

const ButtonContainer = styled("button")(
    props => `
    background-color: ${props.color};
    border: 3px solid ${props.border};
    font-family: ${props.fontFamily};
    font-size: ${props.fontSize};
    font-weight: ${props.fontWeight};
    border-radius: 24px;
    padding: 4px 16px;
    cursor: pointer;
    text-decoration: none;
    color: ${props.textColor};
    width: fit-content;
    margin-right: 12px;

    @media only screen and (max-width: ${sizes.s}) {
        margin-top: ${props.target !== "" && "12px"};
    }
    
  `
);

const LinkStyled = styled(Link)(
    props => `
    text-decoration: none;
    cursor: pointer;
  `
);