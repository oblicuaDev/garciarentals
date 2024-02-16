<?php $classBody = "list"; include 'includes/head.php'; ?>
<?php include 'includes/header.php'; ?>
<small>Equipos / Cámaras</small>
<!-- Swiper -->
<div class="focusRing">
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><div class="lines"></div>cámaras</div>
      <div class="swiper-slide"><div class="lines"></div>óptica</div>
      <div class="swiper-slide"><div class="lines"></div>video assist</div>
      <div class="swiper-slide"><div class="lines"></div>dit data color</div>
      <div class="swiper-slide"><div class="lines"></div>foquista</div>
      <div class="swiper-slide"><div class="lines"></div>transporte</div>
    </div>
    <div class="swiper-button-next"><img src="img/arrowDown.svg" alt="arrows"></div>
    <div class="swiper-button-prev"><img src="img/arrowDown.svg" alt="arrows"></div>
  </div>
</div>
<main class="container">
  <ul></ul>
  <button type="button" id="continue" class="continue">
    <?=$sdk->palabras[7]?> <span>FOQUISTA</span>
  </button>
</main>
<?php include 'includes/footer.php'; ?>