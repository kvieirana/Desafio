var intervalo = 3000;

function slide1(){
    document.getElementById("banner").src = "imagens/banner-1.jpg";
    setTimeout("slide2()", intervalo);
}

function slide2(){
    document.getElementById("banner").src = "imagens/banner-2.jpg";
    setTimeout("slide1()", intervalo);
} 