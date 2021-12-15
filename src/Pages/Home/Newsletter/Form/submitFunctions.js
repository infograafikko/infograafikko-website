
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

async function tryFetch(url, options, button){
    try {
      const fetched = await fetch(url, options)
      return fetched;
    } catch (e) {
        button.innerText = "Pahus, jokin meni vikaan...";
        console.log(e)
    }
}
  

async function postEmail(senderEmail, firstName, lastName, e){
    const lambdaUrl = "https://c3cz6rdy77.execute-api.eu-north-1.amazonaws.com/default/addContactToListAndSendGuide"
    let button = e.target.querySelector("button")

    const options = {
        method: 'post', // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify({
            senderEmail,
            firstName,
            lastName
        })
    }

    console.log(options)

    const fetched = await tryFetch(lambdaUrl, options, button)
    if (fetched.ok) {
        button.innerText = "Lähetimme oppaan sähköpostiisi!"
        e.target.reset()
        console.log(fetched)
    }
    return fetched.json()


}

export function submitForm(emailInput, emailLabel, firstNameInput, firstNameLabel, lastNameInput, lastNameLabel, question, e) {
    e.preventDefault();
    //valid email address
    if(validateEmail(emailInput.value) && firstNameInput.value.length > 0 && lastNameInput.value.length > 0 && question.value == 'Tätä kenttää sinun ei tule muuttaa') {
        //post mail using fetch request
        const posted = postEmail(emailInput.value, firstNameInput.value, lastNameInput.value, e)

        console.log(posted)
    } else if (!validateEmail(emailInput.value)) {
        emailLabel.style.color = "red"
        emailLabel.innerText = "Syötä kelvollinen sähköpostiosoite *"
    } else if (firstNameInput.value.length == 0) {
        firstNameLabel.style.color = "red"
        firstNameLabel.innerText = "Syötä etunimesi *"
    } else if (lastNameInput.value.length == 0) {
        lastNameLabel.style.color = "red"
        lastNameLabel.innerText = "Syötä sukunimesi *"
    }

}