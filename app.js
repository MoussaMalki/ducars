let log = console.log;
let doc = document;
///////////////////////////

setTimeout(() => {
  if (
    doc.querySelector(".allLang").children[0].getAttribute("src") ===
    "images/us-flag.png"
  ) {
    let home = doc.querySelector(".home").textContent;
    let about = doc.querySelector(".about").textContent;
    let serv = doc.querySelector(".serv").textContent;
    let contact = doc.querySelector(".contact").textContent;

    localStorage.setItem("home", home);
    localStorage.setItem("about", about);
    localStorage.setItem("serv", serv);
    localStorage.setItem("contact", contact);

    // ===> for home section

    let bigSpan = doc.querySelector(".bigSpan").textContent;
    let otherSpan = doc.querySelector(".otherSpan").textContent;
    let theP = doc.querySelector(".theP").innerHTML;
    let rentnow = doc.querySelector(".rentnow").textContent;

    localStorage.setItem("bigSpan", bigSpan);
    localStorage.setItem("otherSpan", otherSpan);
    localStorage.setItem("theP", theP);
    localStorage.setItem("rentnow", rentnow);

    // ===> about us

    let aboutUsH2 = doc.querySelector(".aboutUsH2").innerHTML;
    let aboutUsP = doc.querySelector(".aboutUsP").innerHTML;

    localStorage.setItem("aboutUsH2", aboutUsH2);
    localStorage.setItem("aboutUsP", aboutUsP);

    // ====> services

    let servicesHeader = doc.querySelector(".servicesHeader").innerHTML;
    localStorage.setItem("servicesHeader", servicesHeader);
  }
}, 100);

/// ====> for the language drop menu

let selectLang = doc.querySelector("#selectLang");
let flagPic = doc.querySelector(".flag");

selectLang.onclick = () => {
  if (selectLang.value === "AR") {
    flagPic.setAttribute("src", "images/Morocco-Flag.png");
    flagPic.setAttribute("alt", "MR");
    localStorage.setItem("currentLang", "AR");
    localStorage.setItem("currentLangImg", "images/Morocco-Flag.png");
    arabicSwitch();
  }
  if (selectLang.value === "SP") {
    flagPic.setAttribute("src", "images/Flag-spain.png");
    localStorage.setItem("currentLang", "SP");
    localStorage.setItem("currentLangImg", "images/Flag-spain.png");
    flagPic.setAttribute("alt", "SP");
    spanishSwitch();
  }
  if (selectLang.value === "EN") {
    flagPic.setAttribute("src", "images/us-flag.png");
    localStorage.setItem("currentLang", "EN");
    localStorage.setItem("currentLangImg", "images/us-flag.png");
    flagPic.setAttribute("alt", "US");
    englishSwitch();
  }
};

if (localStorage.getItem("currentLang") !== null) {
  selectLang.value = localStorage.getItem("currentLang");
  let imgSrc = localStorage.getItem("currentLangImg");
  flagPic.setAttribute("src", imgSrc);

  if (selectLang.value === "AR") {
    arabicSwitch();
  }
  if (selectLang.value === "EN") {
    englishSwitch();
  }
  if (selectLang.value === "SP") {
    spanishSwitch();
  }
}

/// ====> changing language to spanish

function spanishSwitch() {
  // ===> for nav bar

  doc.querySelector(".home").textContent = `Inicial`;
  doc.querySelector(".about").textContent = `Sobre nosotros`;
  doc.querySelector(".serv").textContent = `Servicios`;
  doc.querySelector(".contact").textContent = `Contacto`;

  // ===> for home section

  doc.querySelector(".bigSpan").textContent = `Quieres`;
  doc.querySelector(".otherSpan").textContent = ` un coche`;
  doc.querySelector(".theP").innerHTML = `si buscas
  <span class="smallSpan">alquilar un coche</span> en el 
  <span class="smallSpan">norte de</span>
  <span class="spanBr"></span>
  <span class="smallSpan">Marruecos</span>  has venido al
  <span class="smallSpan">lugar correcto</span>`;
  doc.querySelector(".rentnow").textContent = "alquilar";
  doc.querySelector(".rentnow").style.cssText = "padding: 5 20px";

  // ===> about us

  doc.querySelector(
    ".aboutUsH2"
  ).innerHTML = `<span class="us">Nosotros</span>`;
  doc.querySelector(".aboutUsP").innerHTML = `
  Somos una nueva empresa de alquiler de coches ubicada en <span>Tetu??n</span>, creada por un grupo de adultos j??venes apasionados y que buscan el ??xito, y por <span>"nuevo"</span> queremos decir <span>"moderno"</span>, nuestro prop??sito al crear esta empresa es hacer que alquilar coches sea f??cil y accesible para todos, ya seas turista o local. hacemos que el alquiler de autos sea f??cil hasta el punto de que no tiene que hacer ning??n esfuerzo f??sico para alquilar un auto, con un clic de un bot??n lo tendr?? todo listo, solo tendr?? que venir a recoger las llaves de su auto, Adem??s de eso, contamos con personal <span>multiling??e</span> que lo ayudar?? sin importar el idioma universal que hable. Puede que no seamos la empresa m??s grande que existe, pero le aseguramos que nuestro servicio es el mejor, y eso es todo lo que nos importa, <span>"hacer felices a nuestros clientes"</span>.`;
  doc.querySelector(".aboutUsP").style.cssText = "font-size: 1rem";
  // ====> services

  doc.querySelector(".servicesHeader").innerHTML = `<span>Servicios</span>`;
  let carBtn = doc.querySelectorAll(".carBtn");
  let days = doc.querySelectorAll(".day");

  for (i = 0; i < days.length; i++) {
    days[i].textContent = "/d??a";
    carBtn[i].textContent = `alquilar`;
  }

  // ====> contact

  doc.querySelector(".contactHeader").innerHTML = `<span>Contacto</span>`;
  doc.querySelectorAll("input")[0].setAttribute("placeholder", "Nombre");
  doc.querySelectorAll("input")[1].setAttribute("placeholder", "Email");
  doc
    .querySelectorAll("textarea")[0]
    .setAttribute(
      "placeholder",
      "su n??mero, modelo de coche y fecha de recogida"
    );
  doc.querySelector(".send").textContent = "enviar";

  // ====> side bar
  doc.querySelector(".sideHome").textContent = `Inicial`;
  doc.querySelector(".sideAbout").textContent = `Sobre nosotros`;
  doc.querySelector(".sideServ").textContent = `Servicios`;
  doc.querySelector(".sideContact").textContent = `Contacto`;
}
/// ====> changing language to Arabic

function arabicSwitch() {
  // ===> for nav bar

  doc.querySelector(".home").textContent = `????????????????`;
  doc.querySelector(".about").textContent = `?????????????? ??????`;
  doc.querySelector(".serv").textContent = `??????????????`;
  doc.querySelector(".contact").textContent = `?????????? ????????`;

  // ===> for home section

  doc.querySelector(".bigSpan").textContent = `???? ????????????????`;
  doc.querySelector(".otherSpan").textContent = `???????? ??????????????????`;
  doc.querySelector(".theP").innerHTML = `???? ?????? ???????? ????
  <span class="smallSpan">???????????????? ??????????</span> ????
  <span class="smallSpan">????????????????</span>
  <span class="spanBr"></span>
  <span class="smallSpan">????????????????????</span> ???????? ????
  <span class="smallSpan">???????????????????? ??????????????</span>`;
  doc.querySelector(".rentnow").textContent = "??????????????????????????";
  doc.querySelector(".rentnow").style.cssText = "padding: 10px 20px";

  // ===> about us

  doc.querySelector(
    ".aboutUsH2"
  ).innerHTML = ` ?????????????? <span class="us"> ??????</span> `;
  doc.querySelector(
    ".aboutUsP"
  ).innerHTML = `?????? ???????? ?????????? ???????????? ?????????? ?????? ???? <span>??????????</span> ?? ???? ?????????????? ???? ?????? ???????????? ???? ???????????? ???????????????? ?? ???????????? <span>"??????????"</span> ????????<span> "??????????"</span>?? ?????????? ???? ???????? ?????????? ?????? ???????????? ???? ?????? ?????????? ???????????????? ?????????? ?????????? ???? ???????????? ???????????? ?? ???????? ?????? ???????????? ???? ????????????. ???????? ?????????????? ???????????????? ?????????? ?????????? ?????????? ?????? ???? ?????????? ???????? ?????? ???? ?????? ???????????????????? ?? ?????????? ???? ?????????? ?????????? ???? ?????? ?? ???? ???????? ?????? ???????????? ?????????????? ???????????? ???????????? ?? ?????????? ?????? ?????? ?? ?????????? ???????? ??????<span> ?????????? ????????????</span> ?????????????? ?????? ?????????? ???? ?????????? ???????????????? ???????? ??????????????. ???? ???? ???????? ???????? ???????? ?? ?????????? ???????? ???? ???? ???????????? ???????????????? ???? ???????????? ???????????? ?? ???????? ???? ???? ?????????? .<span>?????? ?????????????? ??????????</span>`;
  doc.querySelector(".aboutUsP").style.cssText = "font-size: 1.5rem";
  // ====> services

  doc.querySelector(".servicesHeader").innerHTML = `<span>??????????????????????????</span>`;
  let carBtn = doc.querySelectorAll(".carBtn");
  let days = doc.querySelectorAll(".day");

  for (i = 0; i < days.length; i++) {
    days[i].textContent = "/??????";
    carBtn[i].textContent = ` ???????????? ????????`;
  }

  // ====> contact

  doc.querySelector(".contactHeader").innerHTML = `<span>??????????????????</span>`;
  doc.querySelectorAll("input")[0].setAttribute("placeholder", "??????????");
  doc.querySelectorAll("input")[1].setAttribute("placeholder", "????????????????");

  doc
    .querySelectorAll("textarea")[0]
    .setAttribute("placeholder", "????????, ?????? ?????????????? ?? ?????????? ??????????");
  doc.querySelector(".send").textContent = "????????????????????";

  // ====> side bar
  doc.querySelector(".sideHome").textContent = `????????????????`;
  doc.querySelector(".sideAbout").textContent = `?????????????? ??????`;
  doc.querySelector(".sideServ").textContent = `??????????????`;
  doc.querySelector(".sideContact").textContent = `?????????? ????????`;
}

function englishSwitch() {
  // ===> for nav bar

  doc.querySelector(".home").textContent = localStorage.getItem("home");
  doc.querySelector(".about").textContent = localStorage.getItem("about");
  doc.querySelector(".serv").textContent = localStorage.getItem("serv");
  doc.querySelector(".contact").textContent = localStorage.getItem("contact");

  // ===> for home section

  doc.querySelector(".bigSpan").textContent = localStorage.getItem("bigSpan");
  doc.querySelector(".otherSpan").textContent =
    localStorage.getItem("otherSpan");
  doc.querySelector(".theP").innerHTML = localStorage.getItem("theP");
  doc.querySelector(".rentnow").textContent = localStorage.getItem("rentnow");

  // ===> about us

  doc.querySelector(".aboutUsH2").innerHTML = localStorage.getItem("aboutUsH2");
  doc.querySelector(".aboutUsP").innerHTML = localStorage.getItem("aboutUsP");
  doc.querySelector(".aboutUsP").style.cssText = "font-size: 1rem";

  // ====> services

  doc.querySelector(".servicesHeader").innerHTML =
    localStorage.getItem("servicesHeader");

  let carBtn = doc.querySelectorAll(".carBtn");
  let days = doc.querySelectorAll(".day");

  for (i = 0; i < days.length; i++) {
    days[i].textContent = "/day";
    carBtn[i].textContent = `Rent Now`;
  }
  // ====> contact

  doc.querySelector(".contactHeader").innerHTML = `Contact <span>Us</span>`;
  doc.querySelectorAll("input")[0].setAttribute("placeholder", "Name");
  doc.querySelectorAll("input")[1].setAttribute("placeholder", "Email");
  doc
    .querySelectorAll("textarea")[0]
    .setAttribute("placeholder", "your number, car model and pickUp date");
  doc.querySelector(".send").textContent = "Send";

  // ====> side bar
  doc.querySelector(".sideHome").textContent = `Home`;
  doc.querySelector(".sideAbout").textContent = `About Us`;
  doc.querySelector(".sideServ").textContent = `Services`;
  doc.querySelector(".sideContact").textContent = `Contact Us`;
}
// ====> logo animation

setInterval(() => {
  doc.querySelector(".sp1").style.color = `#444`;
  doc.querySelector(".sp2").style.color = `#fe5b3d`;
  doc.querySelector(".sp1").style.transition = `0.7s`;
  doc.querySelector(".sp2").style.transition = `0.7s`;
}, 3000);

setInterval(() => {
  doc.querySelector(".sp1").style.color = `#fe5b3d `;
  doc.querySelector(".sp2").style.color = `#444`;
  doc.querySelector(".sp1").style.transition = `0.7s`;
  doc.querySelector(".sp2").style.transition = `0.7s`;
}, 6000);

// ====> animation

const sr = ScrollReveal({
  distance: `60px`,
  duration: 2500,
  delay: 400,
  reset: true,
  mobile: true,
});

sr.reveal(`.text`, { delay: 200, origin: `top` });
sr.reveal(`.blob`, { delay: 300, origin: `right`, distance: `10px` });
sr.reveal(`.orangeCar`, { delay: 500, origin: `top` });
sr.reveal(`.buttons`, { delay: 600, origin: `left` });

sr.reveal(`.aboutUsPic`, { delay: 500, origin: `left`, distance: `80px` });
sr.reveal(`.aboutustext`, {
  delay: 700,
  origin: `right`,
  distance: `80px`,
});

sr.reveal(`.car`, { delay: 500, origin: `top` });

sr.reveal(`.form`, { delay: 500, origin: `left` });
sr.reveal(`.icons`, { delay: 600, origin: `right`, distance: `20px` });

// sr.reveal(`.carCollection`, { delay: 700, origin: `top` });

// ==========================> drop menu <=========================== //

// ====> styling

let dropMenu = doc.querySelector(".sidenav");
dropMenu.style.cssText = `display: none`;
doc.querySelector("#menu-icon").onclick = () => {
  dropMenu.style.cssText = `display: flex;`;
};

doc.querySelectorAll("section").forEach((e) => {
  e.addEventListener("click", () => {
    dropMenu.style.cssText = `display: none`;
  });
});

// for arabic trans

const mediaQuery = window.matchMedia("(max-width: 500px)");

// Check if the media query is true
setInterval(() => {
  if (mediaQuery.matches && selectLang.value === "AR") {
    doc.querySelector(".bigSpan").textContent = `???????? ??????????????????`;
    doc.querySelector(".otherSpan").textContent = `???? ????????????????`;
  } else {
    if (selectLang.value === "AR") {
      doc.querySelector(".bigSpan").textContent = `???? ????????????????`;
      doc.querySelector(".otherSpan").textContent = `???????? ??????????????????`;
    }
  }
  if (mediaQuery.matches) {
    ScrollReveal().reveal(".car", { mobile: false });
  }
}, 100);

// ==================> for cars slideshow <=====================
let leftArrow = doc.querySelector(".leftArrow");
let righttArrow = doc.querySelector(".rightArrow");

window.onload = () => {
  doc.querySelector("#lastCar").setAttribute("src", "images/logan.png");
};

leftArrow.onclick = () => {
  doc.querySelector("#firstCar").style.cssText = " display: initial;";
  doc.querySelector("#lastCar").style.cssText = "display: none";
};

righttArrow.onclick = () => {
  doc.querySelector("#lastCar").style.cssText = "  display: initial; ";
  doc.querySelector("#firstCar").style.cssText = "display: none";
};

// ==================> for cars slideshow (Phone) <=====================

if (mediaQuery.matches) {
  let leftArrow = doc.querySelector(".leftArrow");
  let righttArrow = doc.querySelector(".rightArrow");
  window.acc = 1;

  righttArrow.onclick = () => {
    acc += 1;
    if (acc === 2) {
      leftArrow.style.cssText = "display: initial";
      doc.querySelector('[num="1"]').style.display = "none";
      doc.querySelector('[num="2"]').style.display = "initial";
    }
    if (acc === 3) {
      leftArrow.style.cssText = "display: initial";
      doc.querySelector('[num="2"]').style.display = "none";
      doc.querySelector('[num="3"]').style.display = "initial";
    }
    if (acc === 4) {
      leftArrow.style.cssText = "display: initial";
      doc.querySelector('[num="3"]').style.display = "none";
      doc.querySelector('[num="4"]').style.display = "initial";

      righttArrow.style.cssText = "display: none";
    }
  };
  leftArrow.onclick = () => {
    acc -= 1;
    if (acc === 1) {
      leftArrow.style.cssText = "display: initial";
      doc.querySelector('[num="2"]').style.display = "none";
      doc.querySelector('[num="1"]').style.display = "initial";

      leftArrow.style.display = "none";
    }
    if (acc === 2) {
      leftArrow.style.cssText = "display: initial";
      doc.querySelector('[num="3"]').style.display = "none";
      doc.querySelector('[num="2"]').style.display = "initial";
    }
    if (acc === 3) {
      leftArrow.style.cssText = "display: initial";
      doc.querySelector('[num="4"]').style.display = "none";
      doc.querySelector('[num="3"]').style.display = "initial";
      righttArrow.style.cssText = "display: initial";
    }
    if (acc === 4) {
      leftArrow.style.cssText = "display: initial";
      doc.querySelector('[num="4"]').style.display = "none";
      doc.querySelector('[num="3"]').style.display = "initial";
    }
  };
}

// ==================> for cars slideshow (Ipad) <=====================
