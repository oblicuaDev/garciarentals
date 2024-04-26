<?php 
  $classBody = "cultura_bold"; 
  include 'includes/head.php';
  $pageCB = $sdk->getPageCulturaBold($_GET['page']);
  $phrases =  explode(',',$pageCB->acf->frases_manifiesto);
?>
<?php include 'includes/header.php'; ?>
<script>
  let phrases = <?= isset($phrases) ? json_encode($phrases) : []?>;
</script>
<main>
  <small>Manifiesto</small>
  <div class="content">
  <?php 
    $images = $pageCB->acf->imagenes_banner;
    for ($i=0; $i < count($images); $i++) { 
      echo '<img class="content__img" src="'.$sdk->replaceUrl($images[$i]).'" />';
    }
  ?>
    <h3 class="content__title uppercase"><?=$pageCB->acf->texto_banner?></h3>
  </div>
  <div class="container">
    <div class="intro">
      <p><?=$pageCB->acf->texto_intro_1?></p>
    </div>
    <img src="<?=$pageCB->acf->imagen_g_manifiesto?>" alt="g_bold" class="imgCenter">
    <div class="intro">
      <p><?=$pageCB->acf->texto_intro_2?></p>
    </div>
    <div class="grid-crew">
      <div class="grid-crew__item">
        <img src="<?=$sdk->replaceUrl($pageCB->acf->crew[0]->foto)?>" alt="<?=$pageCB->acf->crew[0]->nombre?>">
        <span><?=$pageCB->acf->crew[0]->nombre?></span>
      </div>
      <div class="grid-crew__item">
        <img src="<?=$sdk->replaceUrl($pageCB->acf->crew[1]->foto)?>" alt="<?=$pageCB->acf->crew[1]->nombre?>">
        <span><?=$pageCB->acf->crew[1]->nombre?></span>
      </div>
      <div class="grid-crew__item single crew">
        <h2 class="uppercase">CREW</h2>
      </div>
      <div class="grid-crew__item">
        <img src="<?=$sdk->replaceUrl($pageCB->acf->crew[2]->foto)?>" alt="<?=$pageCB->acf->crew[2]->nombre?>">
        <span><?=$pageCB->acf->crew[2]->nombre?></span>
      </div>
      <div class="grid-crew__item single">
      </div>
      <div class="grid-crew__item">
        <img src="<?=$sdk->replaceUrl($pageCB->acf->crew[3]->foto)?>" alt="<?=$pageCB->acf->crew[3]->nombre?>">
        <span><?=$pageCB->acf->crew[3]->nombre?></span>
      </div>
      <div class="grid-crew__item">
        <img src="<?=$sdk->replaceUrl($pageCB->acf->crew[4]->foto)?>" alt="<?=$pageCB->acf->crew[4]->nombre?>">
        <span><?=$pageCB->acf->crew[4]->nombre?></span>
      </div>
      <div class="grid-crew__item text">
        <p class="aright"><?=$pageCB->acf->textos_crew->texto_1?></p>
      </div>
      <div class="grid-crew__item">
        <img src="<?=$sdk->replaceUrl($pageCB->acf->crew[5]->foto)?>" alt="<?=$pageCB->acf->crew[5]->nombre?>">
        <span><?=$pageCB->acf->crew[5]->nombre?></span>
      </div>
      <div class="grid-crew__item single">
      </div>
      <div class="grid-crew__item single">
      </div>
      <div class="grid-crew__item">
        <img src="<?=$sdk->replaceUrl($pageCB->acf->crew[6]->foto)?>" alt="<?=$pageCB->acf->crew[6]->nombre?>">
        <span><?=$pageCB->acf->crew[6]->nombre?></span>
      </div>
      <div class="grid-crew__item single">
      </div>
      <div class="grid-crew__item single">
      </div>
      <div class="grid-crew__item text toptext single">
        <p><?=$pageCB->acf->textos_crew->texto_2?></p>
      </div>
      <div class="grid-crew__item text toptext fullmb">
        <p class="aright"><?=$pageCB->acf->textos_crew->texto_3?></p>
      </div>
      <div class="grid-crew__item">
        <img src="<?=$sdk->replaceUrl($pageCB->acf->crew[7]->foto)?>" alt="<?=$pageCB->acf->crew[7]->nombre?>">
        <span><?=$pageCB->acf->crew[7]->nombre?></span>
      </div>
      <div class="grid-crew__item">
        <img src="<?=$sdk->replaceUrl($pageCB->acf->crew[8]->foto)?>" alt="<?=$pageCB->acf->crew[8]->nombre?>">
        <span><?=$pageCB->acf->crew[8]->nombre?></span>
      </div>
    </div>
    <h3 class="uppercase videoTitle"><?=$pageCB->acf->titulo_we_worked_here?></h3>
    <img src="img/map.png" alt="map">
  </div>
  <div class="marquee">
    <h3><?=$pageCB->acf->texto_marquesina?></h3>
  </div>
  <div class="container">
    <h3 class="uppercase videoTitle"><?=$pageCB->acf->titulo_obsesion?></h3>
    <div class="containeranimationtext">
        <div class="texts">
        </div>
        <img src="img/photo.jpg" alt="photo">
    </div>
  </div>
 
</main>
<?php include 'includes/footer.php'; ?>
<script src="js/imagesloaded.pkgd.min.js"></script>
<script src="js/TweenMax.min.js"></script>
<script src="js/script.js?v=<?=time()?>"></script>
<script>

function separateWords(phrases) {
  let separatedTexts = [];
  phrases.forEach((text) => {
    let words = text.split(" ");
    separatedTexts.push(words);
  });
  return separatedTexts;
}

function displayWords(phrases) {
  let container = document.querySelector(".texts");

  phrases.forEach((words) => {
    let textContainer = document.createElement("div");
    textContainer.classList.add("text");

    words.forEach((word) => {
      let p = document.createElement("p");
      p.textContent = word;
      textContainer.appendChild(p);
    });

    container.appendChild(textContainer);
  });
}

let separatedWords = separateWords(phrases);
displayWords(separatedWords);

// Selecciona todos los elementos con la clase "text"
const textsWord = document.querySelectorAll(".text p");

// Función para definir la animación de aparición y desaparición de los textos
function animateText(text, index) {
  anime.timeline({}).add({
    targets: text,
    opacity: [0, 1], // Animar la opacidad de 0 a 1
    translateX: [-20, 0], // Animar la posición en Y desde 20px hacia arriba
    filter: ["blur(5px)", "blur(0px)"], // Animar el desenfoque de 10px a 0px
    easing: "easeInOutQuad", // Tipo de interpolación
    duration: 500, // Duración de la animación en milisegundos
    delay: index * 100, // Retardo para cada elemento de texto
    complete: function (anim) {
      // Función que se ejecuta al completarse la animación de aparición
      setTimeout(() => {
        anime({
          targets: text,
          opacity: 0, // Animar la opacidad de 1 a 0
          translateX: -20, // Animar la posición en Y desde 0px hacia arriba
          filter: "blur(5px)", // Animar el desenfoque de 0px a 10px
          easing: "easeInOutQuad", // Tipo de interpolación
          duration: 500, // Duración de la animación en milisegundos
          complete: function () {
            // Función que se ejecuta al completarse la animación de desaparición
            if (index === textsWord.length - 1) {
              // Verificar si este es el último texto
              setTimeout(() => {
                // Esperar un tiempo antes de reiniciar la animación
                textsWord.forEach((text, index) => {
                  animateText(text, index); // Reiniciar la animación para cada texto
                });
              }, 100); // Tiempo de espera antes de reiniciar la animación
            }
          },
        });
      }, 1500); // Tiempo de espera antes de comenzar la desaparición
    },
  });
}

// Iniciar la animación para cada elemento de texto
textsWord.forEach((text, index) => {
  animateText(text, index);
});

</script>