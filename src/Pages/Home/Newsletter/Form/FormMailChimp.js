import {createSignal, onCleanup} from 'solid-js'

import { styled } from "solid-styled-components";
import Button from "../../../Universal/Button";

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function submitForm(thisForm, emailLabel, emailInputValue, setShowForm,e) {
    e.preventDefault()
    const delay = 2000;    
    const newRef = thisForm;

    if(validateEmail(emailInputValue)) {
        
        setShowForm(1)
        
        setTimeout(() => {
            document.body.appendChild(newRef);
            newRef.submit()
            document.body.removeChild(newRef);

        },delay);
        setTimeout(() => setShowForm(2) ,delay+1000)

        
    } else {
        emailLabel.style.color = "red"
        emailLabel.innerText = "Syötä kelvollinen sähköpostiosoite *"
    }
    

}

const FollowInstructions = () => {
    const [dots, setDots] = createSignal(".")
    const dotInterval = setInterval(() => {
        let newDots = dots().length < 3 ? dots() + "." : "."
        setDots(newDots)
    }, 500)

    onCleanup(() => clearInterval(dotInterval))


    return (
        <>
            <ConfirmNewsletter>Vahvista uutiskirjeen tilaus uudella välilehdellä{dots()}</ConfirmNewsletter>
        </>
    )
}

const ThankYou = () => {
    return (
        <>
            <ConfirmNewsletter>Kiitos tilauksesta! Saat oppaan automaattisesti sähköpostiisi, kun olet vahvistanut tilauksen sähköpostissa olevasta viestistä.</ConfirmNewsletter>
        </>
    )
}

const Form = ({setShowForm}) => {

    let thisForm;
    let emailLabel;
    let emailInput

    return (
    <>
        <div id="mc_embed_signup">
        <form ref={thisForm} action="https://infograafikko.us14.list-manage.com/subscribe/post?u=243cfca3869d7e92072a0220c&amp;id=ae1eb9d489" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll" />
            <div class="indicates-required"><span class="asterisk">*</span> tarkoittaa pakollista kenttää</div>
            <FieldContainer class="mc-field-group">
            	<Label ref={emailLabel} for="mce-EMAIL">Sähköpostiosoite  <span class="asterisk">*</span></Label>
            	<Input ref={emailInput} type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" />
            </FieldContainer>
            <FieldContainer class="mc-field-group">
            	<Label for="mce-FNAME">Etunimi </Label>
            	<Input type="text" value="" name="FNAME" class="" id="mce-FNAME" />
            </FieldContainer>
            <FieldContainer class="mc-field-group">
            	<Label for="mce-LNAME">Sukunimi </Label>
            	<Input type="text" value="" name="LNAME" class="" id="mce-LNAME" />
            </FieldContainer>
            	<div id="mce-responses" class="clear foot">
            		<div class="response" id="mce-error-response" style="display:none"></div>
            		<div class="response" id="mce-success-response" style="display:none"></div>
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_243cfca3869d7e92072a0220c_ae1eb9d489" tabindex="-1" value="" /></div>
                    <div class="optionalParent">
                        <div class="clear foot">
                            <Button 
                                text="Tilaa uutiskirje"
                                buttonType="primary"
                                onClick={(e) => submitForm(thisForm, emailLabel, emailInput.value, setShowForm, e)}
                            />
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </>
    )
}

export default function FormMailChimp({}) {

    const [showForm, setShowForm] = createSignal(0)
    
    return (
        <>
            {showForm() == 0 ? <Form setShowForm={setShowForm} />
            : showForm() == 1 ? <FollowInstructions />
            : <ThankYou />
        }
        </>
    )
}

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

export const ConfirmNewsletter = styled("p")(
    props => `
    font-weight: 700;
    font-size: 18px;
  `
);