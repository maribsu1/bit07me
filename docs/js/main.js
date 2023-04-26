console.log ('Mariangel Socorro')

let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("html");
        habilidades[1].classList.add("css");
        habilidades[2].classList.add("github");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("scrum");
        habilidades[5].classList.add("respuesta");
        habilidades[6].classList.add("adaptabilidad");
        habilidades[7].classList.add("detalles");
        habilidades[8].classList.add("compromiso");
        habilidades[9].classList.add("comunicacion");
    }
}

window.onscroll = function(){
    efectoHabilidades();
} 