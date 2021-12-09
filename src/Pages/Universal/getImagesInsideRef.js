export const getImagesInsideRef = (ref,identifier) => new Promise(resolve => {


    let waitInstances = 0;

    const checkLoaded = () => {
        //make true array of image element list
        const imgEls = Array.from(ref.querySelectorAll(identifier))
        //check if every image element has been completed
        const fullyLoaded = (el) => el.complete == true && el.naturalHeight > 0;
        const complete = imgEls.every(fullyLoaded)

        //resolve if completed
        if(complete) {
            resolve(imgEls)
        //await if not
        } else if (waitInstances > 9) { 
            resolve(imgEls)
        } else {
            waitInstances = waitInstances + 1;
            setTimeout(() => checkLoaded(), 50)
        }
    }
    checkLoaded();
})
