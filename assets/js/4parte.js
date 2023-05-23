document.addEventListener('keydown', function (event) {

    if (event.key === 'a') {

        document.querySelector("#div1").style.backgroundColor = "DarkViolet"
        document.querySelector("#div2").style.backgroundColor = "DarkViolet"
        document.querySelector("#div3").style.backgroundColor = "DarkViolet"
        document.querySelector("#div4").style.backgroundColor = "DarkViolet"
    } 
    else if (event.key === 's') {

        document.querySelector("#div1").style.backgroundColor = "DarkRed"
        document.querySelector("#div2").style.backgroundColor = "DarkRed"
        document.querySelector("#div3").style.backgroundColor = "DarkRed"
        document.querySelector("#div4").style.backgroundColor = "DarkRed"
    }
    else if (event.key === 'd') {

        document.querySelector("#div1").style.backgroundColor = "DarkSeaGreen"
        document.querySelector("#div2").style.backgroundColor = "DarkSeaGreen"
        document.querySelector("#div3").style.backgroundColor = "DarkSeaGreen"
        document.querySelector("#div4").style.backgroundColor = "DarkSeaGreen"
    }
})


document.querySelectorAll("div").forEach(item => {
    item.addEventListener('click', event => {
        item.style.backgroundColor = "Goldenrod"
    })
})