// Recuperar la información existente de localStorage
let itemsOnCart = JSON.parse(localStorage.getItem("itemsOnCart")) || [];
if (document.querySelector("body.cart")) {
  if (itemsOnCart.length == 0) {
    history.back();
  }
}
function replaceUrl(url) {
  if (url) {
    // Obtenemos la parte de la URL después del dominio
    var path = new URL(url).pathname;
    // Quitamos '/wp-content/uploads/' del path
    path = path.replace(/\/wp-content\/uploads\//, "/");
    // Reemplazamos la parte de la URL con 'files.cinescuela.org'
    var newUrl = "https://files.garciarental.co" + path;
    return newUrl;
  }
}
let palabras = JSON.parse(localStorage.getItem("palabras")) || [];
async function getPalabras() {
  const res = await fetch(`/${actualLang}/g/getPalabras/`);
  const words = await res.json();
  localStorage.setItem("palabras", JSON.stringify(words));
  palabras = words;
}

var sufijos = new Array();
sufijos = { es: "", fr: "fr", en: "en" };
var largo_sufijo = 2;
var separador = "/";
let currentIndex;
const texts = [
  palabras[14],
  palabras[15],
  palabras[16],
  palabras[17],
  palabras[18],
  palabras[19],
];
function updateQueryStringParameter(key, value) {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  return url.href;
}
function changeLang(langCode) {
  var url = new URL(document.location);
  var pathArray = url.pathname.split("/");
  var currentLang = pathArray[1];

  if (currentLang === langCode) {
    return;
  }

  if (currentLang) {
    pathArray[1] = langCode;
  } else {
    pathArray.splice(1, 1, langCode);
  }

  url.pathname = pathArray.join("/");
  location.href = url.href;
}
function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  parentSelector.insertAdjacentHTML("beforeend", clone);
  parentSelector.insertAdjacentHTML("beforeend", clone);

  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}

let scrollAnimation;

let equipoData;
function scrollToTop() {
  var position = document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
    window.scrollBy(0, -Math.max(1, Math.floor(position / 5)));
    scrollAnimation = setTimeout("scrollToTop()", 20);
  } else clearTimeout(scrollAnimation);
}
function closeCart() {
  document.querySelector(".container-cart-box").classList.remove("active");
  document.querySelector(".cart-box").classList.remove("active");
  setTimeout(() => {
    document.querySelector(".cart-box").remove();
  }, 300);
}
function addClickAddBtn() {
  document.querySelectorAll(".btn-add").forEach((btnAdd) => {
    btnAdd.addEventListener("click", () => {
      let equipoData;

      if (equipoActivo) {
        let image;
        if (
          equipoActivo.acf.foto_del_equipo &&
          equipoActivo.acf.foto_del_equipo.length > 0
        ) {
          image = replaceUrl(equipoActivo.acf.foto_del_equipo[0]);
        } else {
          image = "https://placehold.co/600x400?text=Equipos";
        }
        equipoData = {
          id: equipoActivo.id.toString(),
          title: { rendered: equipoActivo.title.rendered },
          image: image,
        };
      } else {
        equipoData = {
          title: { rendered: btnAdd.dataset.title },
          id: btnAdd.dataset.id.toString(),
          image: btnAdd.dataset.image,
        };
      }

      // Recuperar la información existente de localStorage
      let itemsOnCart = JSON.parse(localStorage.getItem("itemsOnCart")) || [];

      // Verificar si el producto ya está en el carrito
      let existingProduct = itemsOnCart.find(
        (item) => item.id === equipoData.id
      );

      if (existingProduct) {
        // Si el producto ya está en el carrito, aumentar la cantidad
        existingProduct.quantity++;
      } else {
        // Si el producto no está en el carrito, agregarlo con cantidad 1
        itemsOnCart.push({ ...equipoData, quantity: 1 });
      }

      // Guardar la información actualizada en localStorage
      localStorage.setItem("itemsOnCart", JSON.stringify(itemsOnCart));

      btnAdd.innerHTML = `<div class="check-wrap"></div>`;
      document.getElementById(
        "cart"
      ).innerHTML += `<span class="count">${calculateTotalQuantity(
        itemsOnCart
      )}</span>`;
      document.querySelector(
        "#cart"
      ).innerHTML += `<div class="container-cart-box"><div class="overlay"></div><div class="cart-box"><div id="close-cart"><img src="img/close.svg" alt="close" /></div><h2 class="uppercase">${equipoData.title.rendered}</h2><h3>${palabras[8]}</h3>  <p> ${palabras[9]}</p><a href="/${actualLang}/carrito" class="btn uppercase">${palabras[10]}</a>  <a href="javascript:closeCart();" class="link uppercase">${palabras[11]}</a></div></div>`;

      setTimeout(() => {
        document.querySelector(".container-cart-box").classList.add("active");
        document.querySelector(".cart-box").classList.add("active");
      }, 300);
      document.querySelector("#close-cart").addEventListener("click", () => {
        closeCart();
      });
      document.querySelector(".overlay").addEventListener("click", () => {
        closeCart();
      });
      scrollToTop();
    });
  });
}
function updateCartView(itemsOnCart) {
  // Actualizar el número de elementos en el carrito
  document.getElementById(
    "cart"
  ).innerHTML = `<span class="count">${calculateTotalQuantity(
    itemsOnCart
  )}</span>`;

  // Aquí puedes actualizar cualquier otra parte de la vista del carrito si es necesario
}
function addClickRemoveBtn() {
  document.querySelectorAll(".btn-remove").forEach((btnRemove) => {
    btnRemove.addEventListener("click", () => {
      const itemIdToRemove = btnRemove.dataset.id;
      // Filtrar los elementos del carrito para excluir el que se va a eliminar
      itemsOnCart = itemsOnCart.filter((item) => item.id !== itemIdToRemove);
      // Guardar la información actualizada en localStorage
      localStorage.setItem("itemsOnCart", JSON.stringify(itemsOnCart));
      // Actualizar la visualización del carrito
      updateCartView(itemsOnCart);
      getAllCartItems();
    });
  });
}

// Función para calcular la cantidad total en el carrito
function calculateTotalQuantity(itemsOnCart) {
  return itemsOnCart.reduce((total, item) => total + item.quantity, 0);
}
const imageCache = {};
const getImageFromCacheOrFetch = async (url) => {
  // Verifica si la imagen está en caché
  if (imageCache[url]) {
    return imageCache[url];
  }
  // Si no está en caché, descarga la imagen
  const response = await fetch(url);
  const imageBlob = await response.blob();

  // Crea una URL de objeto para la imagen descargada
  const imageUrl = URL.createObjectURL(imageBlob);
  // Almacena la URL de la imagen en caché
  imageCache[url] = imageUrl;
  return imageUrl;
};
function get_alias(str) {
  str = str.replace(/¡/g, "", str); //Signo de exclamación abierta.&iexcl;
  str = str.replace(/'/g, "", str); //Signo de exclamación abierta.&iexcl;
  str = str.replace(/!/g, "", str); //Signo de exclamación abierta.&iexcl;
  str = str.replace(/¢/g, "-", str); //Signo de centavo.&cent;
  str = str.replace(/£/g, "-", str); //Signo de libra esterlina.&pound;
  str = str.replace(/¤/g, "-", str); //Signo monetario.&curren;
  str = str.replace(/¥/g, "-", str); //Signo del yen.&yen;
  str = str.replace(/¦/g, "-", str); //Barra vertical partida.&brvbar;
  str = str.replace(/§/g, "-", str); //Signo de sección.&sect;
  str = str.replace(/¨/g, "-", str); //Diéresis.&uml;
  str = str.replace(/©/g, "-", str); //Signo de derecho de copia.&copy;
  str = str.replace(/ª/g, "-", str); //Indicador ordinal femenino.&ordf;
  str = str.replace(/«/g, "-", str); //Signo de comillas francesas de apertura.&laquo;
  str = str.replace(/¬/g, "-", str); //Signo de negación.&not;
  str = str.replace(/®/g, "-", str); //Signo de marca registrada.&reg;
  str = str.replace(/¯/g, "&-", str); //Macrón.&macr;
  str = str.replace(/°/g, "-", str); //Signo de grado.&deg;
  str = str.replace(/±/g, "-", str); //Signo de más-menos.&plusmn;
  str = str.replace(/²/g, "-", str); //Superíndice dos.&sup2;
  str = str.replace(/³/g, "-", str); //Superíndice tres.&sup3;
  str = str.replace(/´/g, "-", str); //Acento agudo.&acute;
  str = str.replace(/µ/g, "-", str); //Signo de micro.&micro;
  str = str.replace(/¶/g, "-", str); //Signo de calderón.&para;
  str = str.replace(/·/g, "-", str); //Punto centrado.&middot;
  str = str.replace(/¸/g, "-", str); //Cedilla.&cedil;
  str = str.replace(/¹/g, "-", str); //Superíndice 1.&sup1;
  str = str.replace(/º/g, "-", str); //Indicador ordinal masculino.&ordm;
  str = str.replace(/»/g, "-", str); //Signo de comillas francesas de cierre.&raquo;
  str = str.replace(/¼/g, "-", str); //Fracción vulgar de un cuarto.&frac14;
  str = str.replace(/½/g, "-", str); //Fracción vulgar de un medio.&frac12;
  str = str.replace(/¾/g, "-", str); //Fracción vulgar de tres cuartos.&frac34;
  str = str.replace(/¿/g, "-", str); //Signo de interrogación abierta.&iquest;
  str = str.replace(/×/g, "-", str); //Signo de multiplicación.&times;
  str = str.replace(/÷/g, "-", str); //Signo de división.&divide;
  str = str.replace(/À/g, "a", str); //A mayúscula con acento grave.&Agrave;
  str = str.replace(/Á/g, "a", str); //A mayúscula con acento agudo.&Aacute;
  str = str.replace(/Â/g, "a", str); //A mayúscula con circunflejo.&Acirc;
  str = str.replace(/Ã/g, "a", str); //A mayúscula con tilde.&Atilde;
  str = str.replace(/Ä/g, "a", str); //A mayúscula con diéresis.&Auml;
  str = str.replace(/Å/g, "a", str); //A mayúscula con círculo encima.&Aring;
  str = str.replace(/Æ/g, "a", str); //AE mayúscula.&AElig;
  str = str.replace(/Ç/g, "c", str); //C mayúscula con cedilla.&Ccedil;
  str = str.replace(/È/g, "e", str); //E mayúscula con acento grave.&Egrave;
  str = str.replace(/É/g, "e", str); //E mayúscula con acento agudo.&Eacute;
  str = str.replace(/Ê/g, "e", str); //E mayúscula con circunflejo.&Ecirc;
  str = str.replace(/Ë/g, "e", str); //E mayúscula con diéresis.&Euml;
  str = str.replace(/Ì/g, "i", str); //I mayúscula con acento grave.&Igrave;
  str = str.replace(/Í/g, "i", str); //I mayúscula con acento agudo.&Iacute;
  str = str.replace(/Î/g, "i", str); //I mayúscula con circunflejo.&Icirc;
  str = str.replace(/Ï/g, "i", str); //I mayúscula con diéresis.&Iuml;
  str = str.replace(/Ð/g, "d", str); //ETH mayúscula.&ETH;
  str = str.replace(/Ñ/g, "n", str); //N mayúscula con tilde.&Ntilde;
  str = str.replace(/Ò/g, "o", str); //O mayúscula con acento grave.&Ograve;
  str = str.replace(/Ó/g, "o", str); //O mayúscula con acento agudo.&Oacute;
  str = str.replace(/Ô/g, "o", str); //O mayúscula con circunflejo.&Ocirc;
  str = str.replace(/Õ/g, "o", str); //O mayúscula con tilde.&Otilde;
  str = str.replace(/Ö/g, "o", str); //O mayúscula con diéresis.&Ouml;
  str = str.replace(/Ø/g, "o", str); //O mayúscula con barra inclinada.&Oslash;
  str = str.replace(/Ù/g, "u", str); //U mayúscula con acento grave.&Ugrave;
  str = str.replace(/Ú/g, "u", str); //U mayúscula con acento agudo.&Uacute;
  str = str.replace(/Û/g, "u", str); //U mayúscula con circunflejo.&Ucirc;
  str = str.replace(/Ü/g, "u", str); //U mayúscula con diéresis.&Uuml;
  str = str.replace(/Ý/g, "y", str); //Y mayúscula con acento agudo.&Yacute;
  str = str.replace(/Þ/g, "b", str); //Thorn mayúscula.&THORN;
  str = str.replace(/ß/g, "b", str); //S aguda alemana.&szlig;
  str = str.replace(/à/g, "a", str); //a minúscula con acento grave.&agrave;
  str = str.replace(/á/g, "a", str); //a minúscula con acento agudo.&aacute;
  str = str.replace(/â/g, "a", str); //a minúscula con circunflejo.&acirc;
  str = str.replace(/ã/g, "a", str); //a minúscula con tilde.&atilde;
  str = str.replace(/ä/g, "a", str); //a minúscula con diéresis.&auml;
  str = str.replace(/å/g, "a", str); //a minúscula con círculo encima.&aring;
  str = str.replace(/æ/g, "a", str); //ae minúscula.&aelig;
  str = str.replace(/ç/g, "a", str); //c minúscula con cedilla.&ccedil;
  str = str.replace(/è/g, "e", str); //e minúscula con acento grave.&egrave;
  str = str.replace(/é/g, "e", str); //e minúscula con acento agudo.&eacute;
  str = str.replace(/ê/g, "e", str); //e minúscula con circunflejo.&ecirc;
  str = str.replace(/ë/g, "e", str); //e minúscula con diéresis.&euml;
  str = str.replace(/ì/g, "i", str); //i minúscula con acento grave.&igrave;
  str = str.replace(/í/g, "i", str); //i minúscula con acento agudo.&iacute;
  str = str.replace(/î/g, "i", str); //i minúscula con circunflejo.&icirc;
  str = str.replace(/ï/g, "i", str); //i minúscula con diéresis.&iuml;
  str = str.replace(/ð/g, "i", str); //eth minúscula.&eth;
  str = str.replace(/ñ/g, "n", str); //n minúscula con tilde.&ntilde;
  str = str.replace(/ò/g, "o", str); //o minúscula con acento grave.&ograve;
  str = str.replace(/ó/g, "o", str); //o minúscula con acento agudo.&oacute;
  str = str.replace(/ô/g, "o", str); //o minúscula con circunflejo.&ocirc;
  str = str.replace(/õ/g, "o", str); //o minúscula con tilde.&otilde;
  str = str.replace(/ö/g, "o", str); //o minúscula con diéresis.&ouml;
  str = str.replace(/ø/g, "o", str); //o minúscula con barra inclinada.&oslash;
  str = str.replace(/ù/g, "o", str); //u minúscula con acento grave.&ugrave;
  str = str.replace(/ú/g, "u", str); //u minúscula con acento agudo.&uacute;
  str = str.replace(/û/g, "u", str); //u minúscula con circunflejo.&ucirc;
  str = str.replace(/ü/g, "u", str); //u minúscula con diéresis.&uuml;
  str = str.replace(/ý/g, "y", str); //y minúscula con acento agudo.&yacute;
  str = str.replace(/þ/g, "b", str); //thorn minúscula.&thorn;
  str = str.replace(/ÿ/g, "y", str); //y minúscula con diéresis.&yuml;
  str = str.replace(/Œ/g, "d", str); //OE Mayúscula.&OElig;
  str = str.replace(/œ/g, "-", str); //oe minúscula.&oelig;
  str = str.replace(/Ÿ/g, "-", str); //Y mayúscula con diéresis.&Yuml;
  str = str.replace(/ˆ/g, "", str); //Acento circunflejo.&circ;
  str = str.replace(/˜/g, "", str); //Tilde.&tilde;
  str = str.replace(/–/g, "", str); //Guiún corto.&ndash;
  str = str.replace(/—/g, "", str); //Guiún largo.&mdash;
  str = str.replace(/'/g, "", str); //Comilla simple izquierda.&lsquo;
  str = str.replace(/'/g, "", str); //Comilla simple derecha.&rsquo;
  str = str.replace(/,/g, "", str); //Comilla simple inferior.&sbquo;
  str = str.replace(/"/g, "", str); //Comillas doble derecha.&rdquo;
  str = str.replace(/"/g, "", str); //Comillas doble inferior.&bdquo;
  str = str.replace(/†/g, "-", str); //Daga.&dagger;
  str = str.replace(/‡/g, "-", str); //Daga doble.&Dagger;
  str = str.replace(/…/g, "-", str); //Elipsis horizontal.&hellip;
  str = str.replace(/‰/g, "-", str); //Signo de por mil.&permil;
  str = str.replace(/‹/g, "-", str); //Signo izquierdo de una cita.&lsaquo;
  str = str.replace(/›/g, "-", str); //Signo derecho de una cita.&rsaquo;
  str = str.replace(/€/g, "-", str); //Euro.&euro;
  str = str.replace(/™/g, "-", str); //Marca registrada.&trade;
  str = str.replace(/ & /g, "-", str); //Marca registrada.&trade;
  str = str.replace(/\(/g, "-", str);
  str = str.replace(/\)/g, "-", str);
  str = str.replace(/�/g, "-", str);
  str = str.replace(/\//g, "-", str);
  str = str.replace(":", "", str);
  str = str.replace(/ de /g, "-", str); //Espacios
  str = str.replace(/ y /g, "-", str); //Espacios
  str = str.replace(/ a /g, "-", str); //Espacios
  str = str.replace(/ DE /g, "-", str); //Espacios
  str = str.replace(/ A /g, "-", str); //Espacios
  str = str.replace(/ Y /g, "-", str); //Espacios
  str = str.replace(/ /g, "-", str); //Espacios
  str = str.replace(/  /g, "-", str); //Espacios
  str = str.replace(/\./g, "", str); //Punto
  str = str.replace("’", "", str);
  str = str.replace("‘", "", str);
  str = str.replace("“", "", str);
  str = str.replace("”", "", str);
  str = str.replace("+", "", str);
  str = str.replace("″", "", str);

  //Mayusculas
  str = str.toLowerCase();

  return str;
}
async function fakeFetch(category) {
  return new Promise(async (resolve) => {
    let info;
    let data;
    switch (category) {
      case palabras[14]:
        info = await fetch(`/${actualLang}/g/getEquipos/?cat=21`);
        data = await info.json();
        resolve(data);
        break;
      case palabras[15]:
        info = await fetch(`/${actualLang}/g/getEquipos/?cat=27`);
        data = await info.json();
        resolve(data);
        break;
      case palabras[16]:
        info = await fetch(`/${actualLang}/g/getEquipos/?cat=73`);
        data = await info.json();
        resolve(data);
        break;
      case palabras[17]:
        info = await fetch(`/${actualLang}/g/getEquipos/?cat=33`);
        data = await info.json();
        resolve(data);
        break;
      case palabras[18]:
        info = await fetch(`/${actualLang}/g/getEquipos/?cat=25`);
        data = await info.json();
        resolve(data);
        break;
      case palabras[19]:
        info = await fetch(`/${actualLang}/g/getEquipos/?cat=81`);
        data = await info.json();
        resolve(data);
        break;
      // Agrega más casos para otras categorías si es necesario
      default:
        resolve([]);
    }
  });
}
let productosObtenidos = false; // Variable para rastrear si los productos ya han sido obtenidos
var swiper;
let initialized = false;
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".mySwiper")) {
    const urlParams = new URLSearchParams(window.location.search);
    currentIndex = urlParams.get("activeIndex");
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      centeredSlides: true,
      loop: true,
      initialSlide: currentIndex,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 5,
          centeredSlides: true,
          loop: true,
        },
      },
      on: {
        init: function () {
          obtenerProductos(texts[currentIndex]);
          document.querySelector(
            ".list small"
          ).innerHTML = `Equipos / ${texts[currentIndex]}`;
          function createLines() {
            const windowWidth = document.querySelector(
              ".list .mySwiper .swiper-slide"
            ).offsetWidth;

            let numLines;
            if (window.innerWidth > 768) {
              numLines = 30;
            } else {
              numLines = 10;
            }
            const space = (windowWidth - numLines) / numLines;
            const marginPerElement = space / 2;

            const linesContainer = document.querySelectorAll(".lines");
            linesContainer.forEach((slide) => {
              slide.innerHTML = ""; // Limpiar el contenedor
              const centralLineIndex = Math.floor(numLines / 2);
              for (let i = 0; i < numLines; i++) {
                const line = document.createElement("div");
                line.style.margin = `0 ${marginPerElement}px 0 ${marginPerElement}px`;
                line.classList.add("line");
                if (i === centralLineIndex) {
                  line.classList.add("central-line"); // Asigna una clase diferente a la línea central
                }
                slide.appendChild(line);
              }
            });
          }
          // Llamar a la función al cargar la página y al cambiar el tamaño de la ventana
          window.addEventListener("DOMContentLoaded", createLines);
          window.addEventListener("resize", createLines);
        },
        slideChangeTransitionEnd: function () {
          if (
            document.querySelector(".list .mySwiper .swiper-slide-active")
              .dataset.index != currentIndex
          ) {
            console.log(
              "CHANGE INDEX",
              document.querySelector(".list .mySwiper .swiper-slide-active")
                .dataset.index
            );
            obtenerProductos(
              texts[
                document.querySelector(".list .mySwiper .swiper-slide-active")
                  .dataset.index
              ]
            );
            currentIndex = document.querySelector(
              ".list .mySwiper .swiper-slide-active"
            ).dataset.index;
          }
        },
      },
    });
    swiper.loopDestroy();
    swiper.loopCreate();
  }
});
// Ejemplo de uso
async function obtenerProductos(categoria) {
  scrollToTop();
  let catID = "";
  try {
    const productos = await fakeFetch(categoria);
    switch (categoria) {
      case palabras[14]:
        catID = 21;
        break;
      case palabras[15]:
        catID = 27;
        break;
      case palabras[16]:
        catID = 73;
        break;
      case palabras[17]:
        catID = 33;
        break;
      case palabras[18]:
        catID = 25;
        break;
      case palabras[19]:
        catID = 81;
        break;
    }
    anime({
      targets: ".list main ul ",
      opacity: [1, 0.5],
      duration: 600,
      easing: "easeOutExpo",
      complete: function (anim) {
        document.querySelector(".list main ul").innerHTML = ``;
        productos.sort((a, b) => parseInt(a.acf.orden) - parseInt(b.acf.orden));
        productos.forEach((producto) => {
          let image;
          let image2;
          if (
            producto.acf.foto_del_equipo &&
            producto.acf.foto_del_equipo.length > 0
          ) {
            image = replaceUrl(producto.acf.foto_del_equipo[0]);
            image2 = replaceUrl(producto.acf.foto_del_equipo[1]);
          } else {
            image = "https://placehold.co/600x400?text=Equipos";
            image2 = "https://placehold.co/600x400?text=EquiposHoverImage";
          }
          let IDCategory = 0;
          const urlParams = new URLSearchParams(window.location.search);
          if (urlParams.has("activeIndex")) {
            IDCategory = urlParams.get("activeIndex");
          } else {
            IDCategory = 0;
          }
          let template = `<li><a href="/${actualLang}/equipos/${get_alias(
            categoria
          )}/${IDCategory}/${get_alias(producto.slug)}-${
            producto.id
          }"><div class="image"><img src="${image}" alt="1" class="front"><img class="hover" src="${image2}" alt="1"></div><p>${
            producto.title.rendered
          }</p></a><button class="btn btn-add" type="button" data-image="${image}" data-id="${
            producto.id
          }" data-title="${producto.title.rendered}">${
            palabras[6]
          }</button></li>`;
          document.querySelector(".list main ul").innerHTML += template;
          addClickAddBtn();
        });
        const indexCategory = texts.findIndex((item) => item === categoria);
        const nextIndex = (indexCategory + 1) % texts.length;
        document.querySelector("#continue span").innerHTML = texts[nextIndex];
        document.querySelector("#continue").addEventListener("click", () => {
          swiper.slideNext();
        });
        anime({
          targets: ".list main ul li",
          translateY: [30, 0],
          opacity: [0, 1],
          delay: function (el, i) {
            return i * 150;
          },
          duration: 300,
          easing: "easeOutExpo",
        });
        anime({
          targets: ".list main ul ",
          opacity: [0.5, 1],
          duration: 600,
          easing: "easeOutExpo",
        });
      },
    });
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
}
if (document.querySelector(".splide")) {
  new Splide(".splide", {
    arrows: false,
    padding: { left: 0, right: "5%" },
    autoplay: true,
    perMove: 1,
    perPage: 1,
    gap: 1,
  }).mount();
}

// Preload images
const preloadImages = () => {
  const imageElements = document.querySelectorAll("li[data-image]");
  imageElements.forEach((element) => {
    const imageUrl = element.getAttribute("data-image");
    const image = new Image();
    image.src = imageUrl;
  });
};
// Change color and image on hover
const handleHover = (event) => {
  const mainElement = document.querySelector("main");
  const sourceImageElement = document.getElementById("sourceImage");
  document.querySelector("h1").style.color = "#FFF";

  if (event.target.hasAttribute("data-color")) {
    const color = event.target.getAttribute("data-color");
    if (window.innerWidth > 768) {
      mainElement.style.backgroundColor = color;
    }
  }

  if (event.target.hasAttribute("data-image")) {
    const imageUrl = event.target.getAttribute("data-image");
    if (window.innerWidth > 768) {
      sourceImageElement.style.opacity = 1;
      sourceImageElement.src = imageUrl;
      mainElement.style.backgroundImage = "none";
    } else {
      mainElement.style.backgroundImage = `url(${imageUrl})`;
    }
  } // Adjust opacity for all li elements
  const listItems = document.querySelectorAll("li");
  listItems.forEach((item) => {
    item.style.color = "#FFF";
    item.style.opacity = item === event.target ? "1" : "0.5";
    item.style.zIndex = item === event.target ? "10" : "0";
  });
};
// Change color and image on hover
const handleMouseLeave = () => {
  document.querySelector("h1").style.color = "#000";
  const mainElement = document.querySelector("main");
  const sourceImageElement = document.getElementById("sourceImage");
  mainElement.style.backgroundColor = "rgba(255,255,255,0)";
  sourceImageElement.style.opacity = 0;
  const listItems = document.querySelectorAll("li");
  listItems.forEach((item) => {
    item.style.color = "#000";
    item.style.opacity = "1";
    item.style.zIndex = "10";
  });
};

function getAllCartItems() {
  document.querySelector(".cartItems ul").innerHTML = "";
  itemsOnCart.forEach((item) => {
    let template = `<li>
    <img src="${item.image}" alt="cartitem">
    <div class="actions">
        <div class="name">
            <small class="uppercase">${item.title.rendered}</small>
            <div class="quantityCounter">
                <i class="icon btnQuantity minus">
                    -
                </i>
                <input class="inputQuantity" readonly onKeyDown="return false" type="number"
                    value="${item.quantity}" />
                <i class="icon btnQuantity plus">
                    +
                </i>
            </div>
        </div>
        <button type="button" class="delete btn-remove" data-id="${item.id}">${palabras[13]}</button>
    </div>
  </li>`;
    document.querySelector(".cartItems ul").innerHTML += template;
  });
  addClickRemoveBtn();
  // Obtén todos los elementos con la clase ".quantityCounter"
  let quantityCounters = document.querySelectorAll(".quantityCounter");
  // Itera sobre cada elemento y agrega los event listeners
  quantityCounters.forEach(function (counter) {
    let inputQuantity = counter.querySelector(".inputQuantity");
    let plus = counter.querySelector(".plus");
    let minus = counter.querySelector(".minus");

    plus.addEventListener("click", function () {
      inputQuantity.value = parseInt(inputQuantity.value) + 1;
    });

    minus.addEventListener("click", function () {
      if (inputQuantity.value > 1) {
        inputQuantity.value = parseInt(inputQuantity.value) - 1;
      }
    });
  });
}
async function getAllClients() {
  const res = await fetch(`/${actualLang}/g/getClients/`);
  const clients = await res.json();
  clients.forEach((client) => {
    let {
      title: { rendered },
      acf: { imagen, year, color },
    } = client;
    let template = `<li data-image="${imagen}" data-color="${color}"><p>${rendered}<span>${year}</span></p></li>`;
    console.log(template);
    document.querySelector(".clients main ul").innerHTML += template;
  });
  // Attach event listeners
  const listItems = document.querySelectorAll(".clients main li");
  listItems.forEach((item) => {
    item.addEventListener("mouseover", handleHover);
    item.addEventListener("mouseleave", handleMouseLeave);
  });

  // Preload images when the page loads
  window.addEventListener("load", preloadImages);
}

function clearAll() {
  document.querySelector("#boxSolicitud").close();
  localStorage.clear();
  window.location.href = `/${actualLang}`;
}

function obtenerElementosAleatorios(array, idGuardado) {
  // Filtrar el array para excluir el elemento con el mismo ID
  var elementosFiltrados = array.filter(function (elemento) {
    return elemento.id !== idGuardado;
  });

  // Obtener dos elementos aleatorios del array filtrado
  var elementosAleatorios = [];
  for (var i = 0; i < 2; i++) {
    var randomIndex = Math.floor(Math.random() * elementosFiltrados.length);
    elementosAleatorios.push(elementosFiltrados[randomIndex]);
    elementosFiltrados.splice(randomIndex, 1); // Eliminar el elemento seleccionado para que no se repita
  }

  return elementosAleatorios;
}

async function fetchCategory(category) {
  document.querySelector("nav").innerHTML = "";
  let info;
  if (category) {
    info = await fetch(`/${actualLang}/g/getEquipos/?cat=${category}`);
  } else {
    info = await fetch(`/${actualLang}/g/getEquipos/`);
  }
  let data = await info.json();
  var elementosAleatorios = obtenerElementosAleatorios(data, equipoActivo.id);

  elementosAleatorios.forEach((elemento) => {
    document.querySelector(
      "nav"
    ).innerHTML += `<a href="/${actualLang}/equipos/${nameCategoryIntern}/${category}/${get_alias(
      elemento.slug
    )}-${elemento.id}"><span>${elemento.title.rendered}</span></a>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  var datepicker = new Datepicker("#datepicker");
  var datepicker2 = new Datepicker("#datepickerend");
  // Get current date
  var currentDate = new Date();

  // Format date as DD-MM-YYYY
  var formattedDate = currentDate
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .split("/")
    .reverse()
    .join("-");

  if (document.querySelector("#datepicker")) {
    document.querySelector("#datepicker").value = formattedDate;
  }
  if (document.querySelector("#datepickerend")) {
    document.querySelector("#datepickerend").value = formattedDate;
  }
  if (document.querySelector(".intern")) {
    addClickAddBtn();
    fetchCategory(
      categoryIntern && categoryIntern != "all" ? categoryIntern : null
    );

    document.querySelector(".intern main small a").innerHTML =
      texts[categoryIntern];
    document.querySelector(
      ".intern main small a"
    ).href = `/es/equipos?activeIndex=${categoryIntern}`;
  }
  document
    .querySelector(".search button#search")
    .addEventListener("click", () => {
      const searchForm = document.querySelector("#searchForm");
      const inputField = searchForm.querySelector("input");

      // Toggle the 'active' class
      searchForm.classList.toggle("active");

      // Focus on the input field
      inputField.focus();

      // Select all text in the input field
      inputField.select();
    });
  document.querySelector(".search input").addEventListener("blur", () => {
    const searchForm = document.querySelector("#searchForm");
    searchForm.classList.toggle("active");
  });
  document
    .querySelector(".search button#searchMobile")
    .addEventListener("click", () => {
      const searchForm = document.querySelector("#searchFormMobile");
      const inputField = searchForm.querySelector("input");

      // Toggle the 'active' class
      searchForm.classList.toggle("active");

      // Focus on the input field
      inputField.focus();

      // Select all text in the input field
      inputField.select();
    });
  getPalabras();
  const locales = ["es-ES", "en-GB", "de-DE"];

  const dropdownBtn = document.getElementById("dropdown-btn");
  const dropdownContent = document.getElementById("dropdown-content");

  function setSelectedLocale(locale) {
    const intlLocale = new Intl.Locale(locale);
    const langName = intlLocale.language;

    dropdownContent.innerHTML = "";

    const otherLocales = locales.filter((loc) => loc !== locale);
    otherLocales.forEach((otherLocale) => {
      const otherIntlLocale = new Intl.Locale(otherLocale);
      const listEl = document.createElement("li");
      listEl.innerHTML = `${otherIntlLocale.language}`;
      listEl.value = otherLocale;
      listEl.addEventListener("mousedown", function () {
        setSelectedLocale(otherLocale);
        changeLang(otherIntlLocale.language);
      });
      dropdownContent.appendChild(listEl);
    });

    dropdownBtn.innerHTML = `${langName}<span class="arrow-down"></span>`;
  }

  setSelectedLocale(locales[0]);
  const browserLang = actualLang;
  for (const locale of locales) {
    const localeLang = new Intl.Locale(locale).language;
    if (localeLang === browserLang) {
      setSelectedLocale(locale);
    }
  }
  if (document.querySelector("#cartInfo")) {
    document.querySelector("#cartInfo input#equipos").value = itemsOnCart
      .map((item) => item.id)
      .join(",");
  }
  document.getElementById(
    "cart"
  ).innerHTML += `<span class="count">${calculateTotalQuantity(
    itemsOnCart
  )}</span>`;
  if (document.querySelector("body.cart")) {
    getAllCartItems();
  }
  if (document.querySelector("body.clients")) {
    getAllClients();
  }
  let box = document.querySelector(".home .container.outside p");
  if (box && window.innerWidth > 768) {
    let height = box.offsetHeight;
    document.querySelector(".home .container.outside img").style.marginTop = `${
      height + 25
    }px`;
  }
  AOS.init({ once: true });
  // Llamada a la función para obtener productos de la categoría "Óptica"
  if (document.querySelector(".marquee")) {
    Marquee(".marquee", 0.2);
  }
  var items = document.querySelectorAll(".circle-menu-box a.menu-item");
  var totalItems = items.length;
  for (var i = 0; i < totalItems; i++) {
    var angle = (i / totalItems) * 2 * Math.PI;
    var radius = 35;

    var x = 40 + radius * Math.cos(angle);
    var y = 40 + radius * Math.sin(angle);

    items[i].style.left = x.toFixed(4) + "%";
    items[i].style.top = y.toFixed(4) + "%";
  }
  var animation = anime({
    targets: ".menu a",
    autoplay: false,
    translateY: [30, 0],
    opacity: [0, 1],
    delay: function (el, i) {
      return i * 100;
    },
    duration: 300,
    easing: "easeOutExpo",
  });
  let activeMenu = false;
  document.querySelector(".left").addEventListener("click", () => {
    if (window.innerWidth > 768) {
      if (!activeMenu) {
        animation.play();
        activeMenu = true;
      } else {
        anime({
          targets: ".menu a",
          translateY: [0, 30],
          opacity: [1, 0],
          delay: function (el, i) {
            return i * 100;
          },
          duration: 300,
          easing: "easeOutExpo",
        });
        activeMenu = false;
      }
    } else {
      document.querySelector(".mobilemenu").classList.toggle("active");
      document.querySelector("header").classList.toggle("activeMenu");
    }
  });
});
$.validator.addMethod(
  "greaterThanDatepicker",
  function (value, element) {
    var startDate = $("#datepicker").val();
    var endDate = value;
    console.log(endDate >= startDate);
    return endDate && endDate >= startDate;
  },
  "La fecha debe ser mayor que la fecha de inicio."
);
$("#cartInfo").validate({
  ignore: "",
  rules: {
    name: { required: true },
    email: { required: true, email: true },
    phone: { required: true },
    datepicker: { required: true },
    datepickerend: { required: true, greaterThanDatepicker: true },
  },
  messages: {
    name: { required: "Este campo es oblogatorio." },
    email: {
      required: "Este campo es oblogatorio.",
      email: "El correo no es válido.",
    },
    phone: { required: "Este campo es oblogatorio." },
    datepicker: { required: "Este campo es oblogatorio." },
    datepickerend: {
      required: "Este campo es oblogatorio.",
      greaterThanDatepicker: "La fecha debe ser mayor que la fecha de inicio.",
    },
  },
  submitHandler: function (form) {
    console.log(form);
    $("#cartInfo button[type=submit]").attr("disabled", true);
    $("#cartInfo button[type=submit]").text("Enviando");
    $("#cartInfo").ajaxSubmit({
      dataType: "json",
      success: function (data) {
        form.reset();
        $("#cartInfo button[type=submit]").text("Enviado");
        $("#cartInfo button[type=submit]").attr("disabled", false);
        document.querySelector("#boxSolicitud").showModal();
      },
    });
  },
  invalidHandler: function (form, validator) {
    var errors = validator.numberOfInvalids();
  },
});
function sendList() {
  document.querySelector("#content").value = `${
    document.querySelector("#name").value
  } hizo una solicitud solo del listado de los equipos.`;
}
