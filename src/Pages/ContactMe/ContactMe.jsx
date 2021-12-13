import { styled } from "solid-styled-components";
import { sizes } from "../../lib/screenSizes";
import Button from "../Universal/Button";
import { submitForm } from "./submitFunctions";
import * as ss from '../Universal/Universal.styled';

import InfographicTypes from './infografiikkatyypit-infograafikkofi.png'

export default function ContactMe({ }) {


    let emailLabel
    let emailInput;
    let textInput;

    return(
        <Container>
            <ContentContainer>
                <ParagraphContainer>
                    <ss.Title>Ota yhteyttä</ss.Title>
                    <ss.Paragraph>Autan yrityksiä ja yhteisöjä infografiikassa, tiedonvisualisoinnissa ja tiedon interaktiivisessa esittämisessä.</ss.Paragraph>
                    <ss.Paragraph>Ota yhteyttä oheisella lomakkeella, ja kerro visualisointitarpeestasi. Olen yhteydessä mahdollisimman pian.</ss.Paragraph>
                    <ss.Paragraph>Voit lähettää sähköpostin liitteineen myös suoraan osoitteeseen <a href="mailto:joel@infograafikko.fi">joel@infograafikko.fi</a>.</ss.Paragraph>
                </ParagraphContainer>
                <Form onSubmit={(e) => submitForm(emailLabel, emailInput, textInput, e)}>
                    <FormContainer>
                        <FieldContainer ref={emailLabel}>Sähköpostiosoitteesi*</FieldContainer>
                        <Input ref={emailInput} height="short" type="text" value="" name="EMAIL" />
                    </FormContainer>
                    <FormContainer>
                        <FieldContainer>Viestisi</FieldContainer>
                        <Input ref={textInput} as="textarea" height="long" type="text" value="" name="CONTENT" />
                    </FormContainer>
                    <Button 
                        text={"Lähetä viesti"}
                        buttonType="primary"
                    />
                </Form>
            </ContentContainer>
            <Img src={InfographicTypes} />
        </Container>
    )
}

const Container = styled("div")(
    props => `
    padding: 16px 16px;
    max-width: 1200px;
    margin: auto;
    min-height: 100vh;
    background-color: #F1F2F4;

  `
);

const ParagraphContainer = styled("div")(
    props => `
    display: flex;
    flex-direction: column;
    width: 40%;

    @media only screen and (max-width: ${sizes.m}) {
        
        width: 100%;
    }
  `
);

const ContentContainer = styled("div")(
    props => `
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 16px;

    @media only screen and (max-width: ${sizes.m}) {
        flex-direction: column;
    }
  `
);

const Form = styled("form")(
    props => `
    width: calc(100% - 40%);
    margin: 12px 24px 0 24px;

    @media only screen and (max-width: ${sizes.m}) {
        margin: 12px 12px 0 0;
        width: 100%;
    }

    `
);

const FormContainer = styled("div")(
    props => `
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;
  `
);

export const FieldContainer = styled("div")(
    props => `
    display: flex;
    flex-direction: column;
    margin: 4px 0 16px 0;
  `
);

export const Label = styled("label")(
    props => `
    font-weight: 600;
    margin-bottom: 6px;
  `
);

export const Input = styled("input")(
    props => `
    margin-bottom: 6px;
    padding: 6px;
    width: auto;
    height: ${props.height == "short" ? "12px" : "200px"};
    resize:none;
    font-family: 'Roboto', sans-serif;

    
  `
);

export const Img = styled("img")(
    props => `
    display: block;
    margin: 20px auto;
  `
);
