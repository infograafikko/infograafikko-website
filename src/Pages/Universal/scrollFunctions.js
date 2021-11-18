import {onMount, onCleanup} from 'solid-js';

export function calcScrollPosition(setScrollPos) {
    const setPos = () => {
        setScrollPos(window.scrollY)
    };

    onMount(() => window.addEventListener("scroll", setPos, { passive: true }))
    onCleanup(() => window.removeEventListener("scroll", setPos));
}

function handleClassChange(el, elCenterInViewport, boundary, id, id2) {

    const heart = el.querySelector(id)
    const heartUnfilled = el.querySelector(id2)
    const heartClasslist = [...heart.classList]

    if (heartClasslist.includes("preAnimation") && elCenterInViewport <= boundary) { 
        heart.classList.add("animateHeart")
        heart.classList.remove("preAnimation")

        heart.classList.add("showInSVG")
        heart.classList.remove("hideInSVG")

        heartUnfilled.classList.add("hideInSVG")
        heartUnfilled.classList.remove("showInSVG")

    } else if (heartClasslist.includes("animateHeart") && elCenterInViewport > boundary) {
        heart.classList.remove("animateHeart")
        heart.classList.add("preAnimation")

        heart.classList.remove("showInSVG")
        heart.classList.add("hideInSVG")

        heartUnfilled.classList.remove("hideInSVG")
        heartUnfilled.classList.add("showInSVG")
    }
}

export function refPositionInViewport(className, boundary, id, id2) {
    const setPos = () => {
        const el = document.querySelector(className)
        if(el !== null) {
            //compares image center to viewport. 
            //If number negative then image above
            //If number over 1 then image below
            const elCenterInViewport = 
                (el.getBoundingClientRect().top + el.getBoundingClientRect().height / 2) 
                / window.innerHeight;
            

            if(elCenterInViewport < 1 && elCenterInViewport > -1) {
                handleClassChange(el, elCenterInViewport, boundary, id, id2)
            }
        }

        
    };

    onMount(() => window.addEventListener("scroll", setPos, { passive: true }))
    onCleanup(() => window.removeEventListener("scroll", setPos));
}