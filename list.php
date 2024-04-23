<?php $classBody = "list"; include 'includes/head.php';?>
<?php include 'includes/header.php'; ?>
<small><?=$sdk->palabras[0]?> / Cámaras</small>
<!-- Swiper -->
<div class="focusRing">
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <button type="button" class="swiper-slide" data-index="0"><div class="lines"></div><?=$sdk->palabras[14]?></button>
      <button type="button" class="swiper-slide" data-index="1"><div class="lines"></div><?=$sdk->palabras[15]?></button>
      <button type="button" class="swiper-slide" data-index="2"><div class="lines"></div><?=$sdk->palabras[16]?></button>
      <button type="button" class="swiper-slide" data-index="3"><div class="lines"></div><?=$sdk->palabras[17]?></button>
      <button type="button" class="swiper-slide" data-index="4"><div class="lines"></div><?=$sdk->palabras[18]?></button>
      <button type="button" class="swiper-slide" data-index="5"><div class="lines"></div><?=$sdk->palabras[19]?></button>
      <button type="button" class="swiper-slide" data-index="0"><div class="lines"></div><?=$sdk->palabras[14]?></button>
      <button type="button" class="swiper-slide" data-index="1"><div class="lines"></div><?=$sdk->palabras[15]?></button>
      <button type="button" class="swiper-slide" data-index="2"><div class="lines"></div><?=$sdk->palabras[16]?></button>
      <button type="button" class="swiper-slide" data-index="3"><div class="lines"></div><?=$sdk->palabras[17]?></button>
      <button type="button" class="swiper-slide" data-index="4"><div class="lines"></div><?=$sdk->palabras[18]?></button>
      <button type="button" class="swiper-slide" data-index="5"><div class="lines"></div><?=$sdk->palabras[19]?></button>
    </div>
    <div class="swiper-button-next"><img src="img/arrowDown.svg" alt="arrows"></div>
    <div class="swiper-button-prev"><img src="img/arrowDown.svg" alt="arrows"></div>
  </div>
</div>
<main class="container">
  <ul></ul>
  <button type="button" id="continue" class="continue">
    <?=$sdk->palabras[7]?> <span></span>
  </button>
</main>
<?php include 'includes/footer.php'; ?>