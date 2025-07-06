let botones = document.querySelectorAll(".btn")

for(boton of botones){
    boton.addEventListener("click",(e)=>{
        e.target.classList.toggle("btn-danger")
        e.target.classList.toggle("btn-warning")
        let primerH2 = e.target.parentNode.firstElementChild
        
        if(e.target.innerText === "Buy"){
            e.target.innerText = "Seleccionado"
        } else {
            e.target.innerText = "Buy"
        }


        if(primerH2.innerText === "Comprado" ){
            primerH2.innerText = "$8900"
        }else {
            primerH2.innerText = "Comprado"
        }

        e.target.closest(".card").classList.toggle("seleccionado")
})
}