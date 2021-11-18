import { styled } from "solid-styled-components";
import Logo from "./Logo";

import { sizes } from "../../lib/screenSizes";

function RenderCards({cards}) {
    return(
        <For each={cards}>
            {(card)=> {
                return(
                    <Card>
                        <CardTitle>{card.title}</CardTitle>
                        <CardRow>{card.row1}</CardRow>
                        <CardRow>{card.row2}</CardRow>
                    </Card>
                )
            }}
        </For>
    )
}

export default function Footer({}){

    const cards = [
        {
            title: "YHTEYSTIEDOT",
            row1: "Email: joel@infograafikko.fi",
            row2: "Tel: 040 707 0975"
        },{
            title: "YRITYSTIEDOT",
            row1: "Y-tunnus: 2819442-5",
            row2: "ALV-tunnus: FI28194425"
        }
    ]

    return(
        <Container>
            <RenderCards 
                cards={cards}
            />
            <LogoHolder>
                <Logo 
                    color="#f7931e"
                    color2="#fff"
                />
            </LogoHolder>
        </Container>
    )
}

const Container = styled("div")(
    props => `
    padding: 0 16px 16px 16px;
    display: flex;
    background-color: #333;
    width: 100%;
    position: relative;

    @media only screen and (max-width: ${sizes.s}) {
        flex-direction: column;
    }

  `
);

const Card = styled("div")(
    props => `
    color: white;
    display: flex;
    flex-direction: column;
  `
);

const CardTitle = styled("h4")(
    props => `
    font-family: "Palanquin", sans-serif;
    font-weight: 700;
    margin: 12px 40px 6px 0;
  `
);

const CardRow = styled("p")(
    props => `
    margin: 0px 40px 3px 0;

  `
);

const LogoHolder = styled("div")(
    props => `
    display: block;
    height: 40px;
    width: auto;
    position: absolute;
    bottom: 16px;
    right: 50px;

    @media only screen and (max-width: ${sizes.s}) {
        height: 30px;
    }

  `
);