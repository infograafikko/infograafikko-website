import { styled } from "solid-styled-components";
import * as ss from '../Universal/Universal.styled';
import Button from "../Universal/Button";

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

async function tryFetch(url, options, button, response){
    try {
      const fetched = await fetch(url, options)
      return fetched;
    } catch (e) {
        button.innerText = "Pahus. Jotakin meni pieleen..."
        response.innerText = "Lähetä sähköpostia osoitteeseen joel@infograafikko.fi ja poistan listalta."
    }
}

async function submitForm(e, box, response, senderEmail){
    e.preventDefault();

    let button = e.target.querySelector("button")

    console.log(e, box.checked)

    if(box.checked && validateEmail(senderEmail)) {
        const lambdaUrl = "https://15akmxqu9e.execute-api.eu-north-1.amazonaws.com/default/deleteFromContactList"

        const options = {
            method: 'post', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify({
                senderEmail
            })
        }

        const fetched = await tryFetch(lambdaUrl, options, button, response)
        console.log(fetched)
        if (fetched.ok) {
            button.innerText = "Toivottavasti palaat takaisin!"
            response.innerText = "Sinut on onnistuneesti poistettu sähköpostilistalta."
        }
        
    } else if (!box.checked) { 
        response.innerText = "Selvä! Sinua ei poistettu listalta."
    } else {
        button.innerText = "Pahus. Jotakin meni pieleen..."
        response.innerText = "Lähetä sähköpostia osoitteeseen joel@infograafikko.fi ja poistan listalta."
    }
}

export default function CancelNewsLetter(){

    const location = decodeURIComponent(window.location.search);
    const searchParams = new URLSearchParams(location)
    const senderEmail = searchParams.get('email');

    console.log(senderEmail)

    let unsubscriptionCheckbox;
    let response
    
    return (
        <Container>
            <ss.Title style={{'text-align': 'center'}}>Oletko varma, että haluat lopettaa uutiskirjeen tilauksen?</ss.Title>
            <Form onSubmit={(e) => submitForm(e, unsubscriptionCheckbox, response, senderEmail)}>
                <FormContainer>
                    <FieldContainer name="unsubscription" >Lopeta uutiskirjeen tilaus osoitteeseen {senderEmail}</FieldContainer>
                    <Input checked ref={unsubscriptionCheckbox} for="unsubscription" height="short" type="checkbox" value="" name="EMAIL" />
                </FormContainer>
                <Button 
                    text={"Peruuta tilaus"}
                    buttonType="primary"
                />
            </Form>
            <FieldContainer ref={response} style={{'text-align': 'center'}}></FieldContainer>
        </Container>
    )
}

export const Container = styled("div")(
    props => `
    position: relative;
    width: 100%;
    padding: 12px 0px 12px 16px;

  `
);

const Form = styled("form")(
    props => `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    `
);

const FormContainer = styled("div")(
    props => `
        display: flex;
        margin: 20px;
  `
);


export const FieldContainer = styled("div")(
    props => `
    
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
    width: 20px;

    
  `
);