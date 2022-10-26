let header = `
<nav class="navbar">
<a href="home.html"><img src="img/Logo.png" alt="3D Todo Logo" class="imgl"></a>
<a href="" class="nav-branding"></a>
<ul class="nav-menu">
    <li class="nav-item">
        <a href="home.html" class="nav-link">Inicio</a>
    </li>
    <li class="nav-item">
        <a href="productos.html" class="nav-link">Productos</a>
    </li>
    <li class="nav-item">
        <a href="personalizados.html" class="nav-link">Personalizados</a>
    </li>
    <li class="nav-item">
        <a href="contactos.html" class="nav-link">Contacto</a>
    </li>
</ul>
<div class="hamburger">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
</div>
</nav>
`
document.getElementById("idheader").innerHTML = header

let footer = `
<div class="grid">
<div class="textos-footer">
    <h2 class="subtitulo">Contactanos
    </h2>
</div>
<div class="footer-item1">
    <a href="https://www.instagram.com/3dtodook/"  target="_blank">
    <i class="fa-brands fa-instagram"></a></i>
</div>
<div class="footer-item2">
<a href="https://wa.me/541156694040"  target="_blank">
    <i class="fa-brands fa-whatsapp"></a></i>
</div>
<div class="footer-item3">
<a href="mailto:ferfidanza@gmail.com">
    <i class="fa-sharp fa-solid fa-address-card"></a></i>
</div>
<div class="footer-item4">
<a href="https://www.facebook.com/ferfidanza/"  target="_blank">
    <i class="fa-brands fa-facebook"></a></i>
</div>
<div class="textos-footer">
    <p>©2022 3DTodo
    </p>
</div>
</div>
`

document.getElementById("idfooter").innerHTML = footer

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

function iniciarMap(){
    var coord = {lat: -34.608628,lng: -58.440108};
    var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 15,
    center: coord
});
var marker = new google.maps.Marker({
    position: coord,
    map: map
})}