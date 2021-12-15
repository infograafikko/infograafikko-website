
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
  

async function postEmail(senderEmail, message, e){
    const lambdaUrl = "https://pt1i38ivrg.execute-api.eu-north-1.amazonaws.com/default/sendContactEmail"
    let button = e.target.querySelector("button")

    const options = {
        method: 'post', // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify({
            senderEmail,
            message
        }) // body data type must match "Content-Type" header
        /*
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'xLY74ri3DSHVUT3x'
          //"Access-Control-Allow-Origin": "http://localhost:3000",
          //'Access-Control-Allow-Credentials': false,
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        
        */
      }

    const fetched = await tryFetch(lambdaUrl, options, button)
    if (fetched.ok) {
        button.innerText = "Kiitos viestistäsi!"
        e.target.reset()
    }
    return fetched.json()


}

export function submitForm(emailLabel, emailInput, textInput, question, e) {
    e.preventDefault();
    //valid email address
    if(validateEmail(emailInput.value) && textInput.value.length > 0 && question.value == "Tätä kenttää sinun ei tule muuttaa") {
        //post mail using fetch request
        postEmail(emailInput.value, textInput.value, e)

        emailLabel.style.color = "black"
        emailLabel.innerText = "Sähköpostiosoitteesi*"
    } else if (!validateEmail(emailInput.value)) {
        emailLabel.style.color = "red"
        emailLabel.innerText = "Syötä kelvollinen sähköpostiosoite *"
    }

}