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
  Somos una nueva empresa de alquiler de coches ubicada en <span>Tetuán</span>, creada por un grupo de adultos jóvenes apasionados y que buscan el éxito, y por <span>"nuevo"</span> queremos decir <span>"moderno"</span>, nuestro propósito al crear esta empresa es hacer que alquilar coches sea fácil y accesible para todos, ya seas turista o local. hacemos que el alquiler de autos sea fácil hasta el punto de que no tiene que hacer ningún esfuerzo físico para alquilar un auto, con un clic de un botón lo tendrá todo listo, solo tendrá que venir a recoger las llaves de su auto, Además de eso, contamos con personal <span>multilingüe</span> que lo ayudará sin importar el idioma universal que hable. Puede que no seamos la empresa más grande que existe, pero le aseguramos que nuestro servicio es el mejor, y eso es todo lo que nos importa, <span>"hacer felices a nuestros clientes"</span>.`;
  doc.querySelector(".aboutUsP").style.cssText = "font-size: 1rem";
  // ====> services

  doc.querySelector(".servicesHeader").innerHTML = `<span>Servicios</span>`;
  let carBtn = doc.querySelectorAll(".carBtn");
  let days = doc.querySelectorAll(".day");

  for (i = 0; i < days.length; i++) {
    days[i].textContent = "/día";
    carBtn[i].textContent = `alquilar`;
    doc.querySelectorAll(`.price`)[i].textContent = `30€`;
  }

  // ====> contact

  doc.querySelector(".contactHeader").innerHTML = `<span>Contacto</span>`;
  doc.querySelectorAll("input")[0].setAttribute("placeholder", "Nombre");
  doc.querySelectorAll("input")[1].setAttribute("placeholder", "Email");
  doc
    .querySelectorAll("textarea")[0]
    .setAttribute(
      "placeholder",
      "su número, modelo de coche y fecha de recogida"
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

  doc.querySelector(".home").textContent = `الرئيسية`;
  doc.querySelector(".about").textContent = `معلومات عنا`;
  doc.querySelector(".serv").textContent = `الخدمات`;
  doc.querySelector(".contact").textContent = `تواصل معنا`;

  // ===> for home section

  doc.querySelector(".bigSpan").textContent = `هل تــــريد`;
  doc.querySelector(".otherSpan").textContent = `كراء ســــيارة`;
  doc.querySelector(".theP").innerHTML = `ان كنت تبحث عن
  <span class="smallSpan">كــــراء سيارة</span> في
  <span class="smallSpan">شمــــال</span>
  <span class="spanBr"></span>
  <span class="smallSpan">المــــغرب</span> فانت في
  <span class="smallSpan">المكــــان المناسب</span>`;
  doc.querySelector(".rentnow").textContent = "كـــــــــراء";
  doc.querySelector(".rentnow").style.cssText = "padding: 10px 20px";

  // ===> about us

  doc.querySelector(
    ".aboutUsH2"
  ).innerHTML = ` معلومات <span class="us"> عنا</span> `;
  doc.querySelector(
    ".aboutUsP"
  ).innerHTML = `نحن شركة تأجير سيارات جديدة تقع في <span>تطوان</span> ، ثم أنشأئها من طرف مجموعة من الشباب الطامحين ، وبكلمة <span>"جديدة"</span> نعني<span> "حديثة"</span>، هدفنا من وراء إنشاء هذه الشركة هو جعل تأجير السيارات أمرًا سهلاً في متناول الجميع ، سواء كنت سائحًا أو محليًا. نجعل استئجار السيارات أمرًا سهلاً لدرجة انه لا يتعين عليك بذل أي جهد لاستئجارها ، بنقرة زر واحدة ستنجز كل شيء ، ما عليك سوى القدوم واختيار مفاتيح سيارتك ، علاوة على ذلك ، لدينا فريق عمل<span> متعدد اللغات</span> سيساعدك بغض النظر عن اللغة العالمية التي تتحدثها. قد لا نكون أكبر شركة ، لكننا نؤكد لك أن خدمتنا ومعملتنا من الدرجة الأولى ، وهذا كل ما يهمنا .<span>جعل عملائنا سعداء</span>`;
  doc.querySelector(".aboutUsP").style.cssText = "font-size: 1.5rem";
  // ====> services

  doc.querySelector(".servicesHeader").innerHTML = `<span>الخدمــــــات</span>`;
  let carBtn = doc.querySelectorAll(".carBtn");
  let days = doc.querySelectorAll(".day");

  for (i = 0; i < days.length; i++) {
    days[i].textContent = "/يوم";
    carBtn[i].textContent = ` كــراء الان`;
    doc.querySelectorAll(`.price`)[i].textContent = `300DH`;
  }

  // ====> contact

  doc.querySelector(".contactHeader").innerHTML = `<span>راســـلنا</span>`;
  doc.querySelectorAll("input")[0].setAttribute("placeholder", "الاسم");
  doc.querySelectorAll("input")[1].setAttribute("placeholder", "الايمايل");

  doc
    .querySelectorAll("textarea")[0]
    .setAttribute("placeholder", "رقمك, نوع السيارة و تاريخ الحجز");
  doc.querySelector(".send").textContent = "ارســـــال";

  // ====> side bar
  doc.querySelector(".sideHome").textContent = `الرئيسية`;
  doc.querySelector(".sideAbout").textContent = `معلومات عنا`;
  doc.querySelector(".sideServ").textContent = `الخدمات`;
  doc.querySelector(".sideContact").textContent = `تواصل معنا`;
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
    doc.querySelectorAll(`.price`)[i].textContent = `30$`;
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
sr.reveal(`.blob`, { delay: 300, origin: `top` });
sr.reveal(`.orangeCar`, { delay: 500, origin: `top` });
sr.reveal(`.buttons`, { delay: 600, origin: `left` });

sr.reveal(`.aboutUsPic`, { delay: 500, origin: `top`, distance: `80px` });
sr.reveal(`.aboutustext`, {
  delay: 700,
  origin: `bottom`,
  distance: `80px`,
});

sr.reveal(`.car`, { delay: 500, origin: `top` });

sr.reveal(`.form`, { delay: 500, origin: `top` });
sr.reveal(`.icons`, { delay: 600, origin: `bottom` });

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
    doc.querySelector(".bigSpan").textContent = `كراء ســــيارة`;
    doc.querySelector(".otherSpan").textContent = `هل تــــريد`;
  } else {
    if (selectLang.value === "AR") {
      doc.querySelector(".bigSpan").textContent = `هل تــــريد`;
      doc.querySelector(".otherSpan").textContent = `كراء ســــيارة`;
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
  doc.querySelector("#lastCar2").setAttribute("src", "images/logan.png");
};
window.acc2 = 1;

leftArrow.onclick = () => {
  acc2 -= 1;
  righttArrow.style.display = `flex`;

  log(acc2);

  if (acc2 === 2) {
    doc.querySelector("#secondCar").style.cssText = " display: initial;";
    doc.querySelector("#lastCar2").style.cssText = "display: none";
  }
  if (acc2 === 1) {
    doc.querySelector("#firstCar").style.cssText = " display: initial;";
    doc.querySelector("#lastCar1").style.cssText = "display: none";

    leftArrow.style.display = `none`;
  }
};

righttArrow.onclick = () => {
  leftArrow.style.display = `flex`;
  acc2 += 1;

  if (acc2 === 2) {
    doc.querySelector("#lastCar1").style.cssText = "  display: initial; ";
    doc.querySelector("#firstCar").style.cssText = "display: none";
  }
  if (acc2 === 3) {
    righttArrow.style.display = `none`;
    doc.querySelector("#lastCar2").style.cssText = "  display: initial; ";
    doc.querySelector("#firstCar").style.cssText = "display: none";
    doc.querySelector("#secondCar").style.cssText = "display: none";
  }
};

// ==================> for cars slideshow (Phone) <=====================

if (mediaQuery.matches) {
  let leftArrow = doc.querySelector(".leftArrow");
  let righttArrow = doc.querySelector(".rightArrow");
  window.acc = 1;

  righttArrow.onclick = () => {
    acc += 1;
    if (acc === 2) {
      leftArrow.style.cssText = "display: flex";
      doc.querySelector('[num="1"]').style.display = "none";
      doc.querySelector('[num="2"]').style.display = "initial";
    }
    if (acc === 3) {
      leftArrow.style.cssText = "display: flex";
      doc.querySelector('[num="2"]').style.display = "none";
      doc.querySelector('[num="3"]').style.display = "initial";
    }
    if (acc === 4) {
      leftArrow.style.cssText = "display: flex";
      doc.querySelector('[num="3"]').style.display = "none";
      doc.querySelector('[num="4"]').style.display = "initial";
    }
    if (acc === 5) {
      leftArrow.style.cssText = "display: flex";
      doc.querySelector('[num="4"]').style.display = "none";
      doc.querySelector('[num="5"]').style.display = "initial";

      righttArrow.style.cssText = "display: none";
    }
  };
  leftArrow.onclick = () => {
    acc -= 1;
    if (acc === 1) {
      leftArrow.style.cssText = "display: flex";
      doc.querySelector('[num="2"]').style.display = "none";
      doc.querySelector('[num="1"]').style.display = "initial";

      leftArrow.style.display = "none";
    }
    if (acc === 2) {
      leftArrow.style.cssText = "display: flex";
      doc.querySelector('[num="3"]').style.display = "none";
      doc.querySelector('[num="2"]').style.display = "initial";
    }
    if (acc === 3) {
      leftArrow.style.cssText = "display: flex";
      doc.querySelector('[num="4"]').style.display = "none";
      doc.querySelector('[num="3"]').style.display = "initial";
    }

    if (acc === 4) {
      leftArrow.style.cssText = "display: flex";
      doc.querySelector('[num="5"]').style.display = "none";
      doc.querySelector('[num="4"]').style.display = "initial";

      righttArrow.style.cssText = "display: flex";
    }
  };
}

let socials = doc.querySelector(`.socialMedia`).children;

socials[0].onclick = () => {
  location.href = `https://www.facebook.com/Dusseldolf-Cars-107057262077768`;
};
socials[1].onclick = () => {
  location.href = `https://wa.me/+212611742301`;
};
socials[2].onclick = () => {
  location.href = `https://www.instagram.com/du_cars7/`;
};
