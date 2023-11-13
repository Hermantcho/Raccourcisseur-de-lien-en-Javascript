let error = document.querySelector('.error_message');
let longLink = document.querySelector('.long_link');
let short = document.querySelector('.result');

function shortLinkFunct() {
    //verification input
    if (!longLink.value == "") {
        //vider l'erreur
        error.innerHTML = "";
        //connection API
        let url = `https://api.shrtco.de/v2/shrten?url=${longLink.value}`;
        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
    } else {
        //error
        error.innerHTML = "Veillez remplir le champ !"
    }
}