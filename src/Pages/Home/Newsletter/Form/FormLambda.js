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

    return (
        <Form onSubmit={(e) => submitForm(emailInput, emailLabel, firstNameInput, firstNameLabel, lastNameInput, lastNameLabel, e)}>
            <FormContainer>
                <FieldContainer ref={emailLabel}>Sähköpostiosoitteesi*</FieldContainer>
                <Input ref={emailInput} height="short" type="text" value="" name="EMAIL" />
            </FormContainer>
            <FormContainer>
                <FieldContainer ref={firstNameLabel}>Etunimesi*</FieldContainer>
                <Input ref={firstNameInput} height="short" type="text" value="" name="FIRSTNAME" />
            </FormContainer>
            <FormContainer>
                <FieldContainer ref={lastNameLabel}>Sukunimesi*</FieldContainer>
                <Input ref={lastNameInput} height="short" type="text" value="" name="FIRSTNAME" />
            </FormContainer>
            <Button 
                text={"Lähetä viesti"}
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