/* let popravciAnimationPath = 'images/popravci.json'
let skracivanjeAnimationPath= 'images/skracivanje.json'
let zamjeneAnimationPath = 'images/zamjene.json'

let popravciContainer = document.getElementById("popravci");
let skracivanjeContainer = document.getElementById("skracivanje");
let zamjeneContainer = document.getElementById("zamjene");

let popravciData = {
    container: popravciContainer,
    renderer: 'svg',
    loop: 'true',
    path: 'https://lottie.host/?file=d548f47d-a7a9-4555-b859-7be00ae1529d/eQcq3gyrKH.json'
};


let skracivanjeData = {
    container: skracivanjeContainer,
    renderer: 'svg',
    loop: 'true',
    path: skracivanjeAnimationPath
};

let zamjeneData = {
    container: zamjeneContainer,
    renderer: 'svg',
    loop: 'true',
    path: zamjeneAnimationPath
};
let animPopravci = bodymovin.loadAnimation(popravciData);
let animSkracivanje = bodymovin.loadAnimation(skracivanjeData);
let animZamjene = bodymovin.loadAnimation(zamjeneData); */



/* const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigationItems = document.querySelector(".nav-items");

  hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    navigationItems.classList.toggle("show");
  });

[...navigationItems].forEach(navItem => {
  navItem.addEventListener("click", ()=> {
      hamburgerMenu.classList.remove('active'); 
      navigationItems.classList.remove('show')
  });
}); */



const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigationItems = document.querySelector(".nav-items");

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("active");
  navigationItems.classList.toggle("show");
});

navigationItems.querySelectorAll("a").forEach(navItem => {
  navItem.addEventListener("click", () => {
    hamburgerMenu.classList.remove('active');
    navigationItems.classList.remove('show');
  });
});
