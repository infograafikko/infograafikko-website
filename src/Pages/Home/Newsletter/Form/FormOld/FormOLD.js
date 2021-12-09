import { createStore } from "solid-js/store"
import Button from "../../../Universal/Button";

import { styled } from "solid-styled-components";
import { sizes } from "../../../../lib/screenSizes";

const fields = [
    {
        title: "Sähköposti",
        for: "email"
    },
    {
        title: "Etunimi",
        for: "firstName"
    },
    {
        title: "Sukunimi",
        for: "lastName"
    },

]



export default function Form({}) {

    const [form, setForm] = createStore(
        { 
            email:'', 
            firstName: '',
            lastName: ''
        }
    )

    const updateFormField = (fieldName, inputEl) => {
        setForm({
            [fieldName]:  inputEl.currentTarget.value   
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, firstName, lastName } = form;

        const method = 'POST';
        const headers = {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
            'authorization': "Basic " + window.btoa('randomstring:' + apiKey),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        const body = JSON.stringify(
        {
            email_address: email,
            status: 'subscribed',
            merge_fields: { FNAME: firstName, LNAME: lastName }
        }
    );

        fetch(url, {
            method,
            headers,
            body
        }).then(resp => resp.json())
            .then(resp => {
                return console.log(resp)
            })
            .catch(error => {
                throw new Error(error.statusText)
            });

    }


    return(
        <FormContainer>
            {fields.
            (f => {
                return(
                <FieldContainer>
                    <Label for={f.for}>{f.title}:</Label>
                    <Input 
                        type="text" 
                        name={f.for}
                        value={form[f.for]}
                        onChange={(el) => updateFormField(f.for, el)}    
                    />
                </FieldContainer>
                )
            })}
            <Button 
                text="Lataa opas"
                onClick={handleSubmit}
            />
        </FormContainer>
    )
}

export const FormContainer = styled("form")(
    props => `
    display: flex;
    flex-direction: column;
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
    height: 12px;
    padding: 6px;
  `
);