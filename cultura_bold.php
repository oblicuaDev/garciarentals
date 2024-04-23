<?php 
  $classBody = "cultura_bold"; 
  include 'includes/head.php';
  $pageCB = $sdk->getPageCulturaBold($_GET['page']);
?>
<?php include 'includes/header.php'; ?>
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
    <video
    class="videoCenter"
      autobuffer
      autoplay
      muted
      preload="metadata"
      loop
      playsinline
      src="<?=$sdk->replaceUrl($pageCB->acf->video_obsesion)?>"
      >
      <source src="<?=$sdk->replaceUrl($pageCB->acf->video_obsesion)?>" />
      </video>
  </div>
</main>
<?php include 'includes/footer.php'; ?>
<script src="js/imagesloaded.pkgd.min.js"></script>
<script src="js/TweenMax.min.js"></script>
<script src="js/script.js?v=<?=time()?>"></script>