import { styled } from "solid-styled-components";
import Button from "../../../Universal/Button";
import { sizes } from "../../../../lib/screenSizes";
import { submitForm } from "./submitFunctions";

export default function FormLambda() {

    let emailLabel
    let emailInput;
    let firstNameLabel;
    let firstNameInput;
    let lastNameLabel;
    let lastNameInput;
    let question;

    return (
        <Form onSubmit={(e) => submitForm(emailInput, emailLabel, firstNameInput, firstNameLabel, lastNameInput, lastNameLabel, question, e)}>
            <FormContainer>
                <FieldContainer ref={emailLabel}>Sähköpostiosoite*</FieldContainer>
                <Input ref={emailInput} height="short" type="text" value="" name="EMAIL" />
            </FormContainer>
            <FormContainer>
                <FieldContainer ref={firstNameLabel}>Etunimi*</FieldContainer>
                <Input ref={firstNameInput} height="short" type="text" value="" name="FIRSTNAME" />
            </FormContainer>
            <FormContainer style={{"position": "absolute", "left": "-1234px"}}>
                <FieldContainer>Kysymys*</FieldContainer>
                <Input ref={question} height="short" type="text" value="Tätä kenttää sinun ei tule muuttaa" name="QUESTION" />
            </FormContainer>
            <FormContainer>
                <FieldContainer ref={lastNameLabel}>Sukunimi*</FieldContainer>
                <Input ref={lastNameInput} height="short" type="text" value="" name="LASTNAME" />
            </FormContainer>
            <Button 
                text={"Lataa opas"}
                buttonType="primary"
            />
        </Form>
    )
    
}

const Form = styled("form")(
    props => `
    width: 100%;

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
    font-weight: 700;
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