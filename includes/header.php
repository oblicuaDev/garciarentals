<?php $search = isset($_GET['search']) ? $_GET['search'] : ''; ?>
<script>
  let equipoActivo = <?= isset($equipo) ? json_encode($equipo) : "null"?>;
</script>
<header>
  <div class="container">
    <button type="button" class="left">
      <img src="img/Manu.svg" alt="out" width="50px" />
      <div class="menu">
        <a href="<?=$lang?>/equipos?activeIndex=0"><?=$sdk->palabras[0] ?></a>
        <a href="<?=$lang?>/manifiesto"><?=$sdk->palabras[1]?></a>
        <a href="<?=$lang?>/clientes"><?=$sdk->palabras[2]?></a>
      </div>
    </button>
    <a href="">
      <img
        src="<?=$sdk->replaceUrl($sdk->infoGnrl->acf->logo)?>"
        alt="logo"
        class="logo"
        height="40"
      />
      <img src="img/logomobile.png" alt="logo" width="40" class="logomobile" />
    </a>
    <div class="right">
      <div class="search">
        <button id="search" type="button">
          <img src="img/Lupa.svg" alt="search" />
        </button>
        <form
          autocomplete="off"
          id="searchForm"
          action="/<?=$lang?>/buscar"
          method="get"
        >
          <input type="search" name="search" id="search" value="<?=$search?>" />
        </form>
      </div>
      <div class="dropdown" tab-index="0">
        <button id="dropdown-btn"></button>
        <ul class="dropdown-content" id="dropdown-content"></ul>
      </div>
      <div id="cart">
        <a href="/<?=$lang?>/equipos?activeIndex=0">
          <img src="img/Menucot.svg" alt="cart" />
        </a>
      </div>
    </div>
  </div>
  <div class="mobilemenu">
    <div class="links">
      <a href="<?=$lang?>/equipos?activeIndex=0"><?=$sdk->palabras[0]?></a>
      <a href="<?=$lang?>/manifiesto"><?=$sdk->palabras[1]?></a>
      <a href="<?=$lang?>/clientes"><?=$sdk->palabras[2]?></a>
    </div>
    <div class="search">
      <button id="searchMobile" type="button">
        <img src="img/Lupa.svg" alt="search" />
      </button>
      <form
        autocomplete="off"
        id="searchFormMobile"
        action="/<?=$lang?>/buscar"
        method="get"
      >
        <input type="search" name="search" id="search" value="<?=$search?>" />
      </form>
    </div>
    <div class="socials">
      <div class="social">
        <a href="<?=$sdk->infoGnrl->acf->redes_sociales->linkedin?>"
          ><img src="icons/linkedin.svg" alt="linkedin"
        /></a>
        <a href="<?=$sdk->infoGnrl->acf->redes_sociales->instagram?>"
          ><img src="icons/instagram.svg" alt="instagram"
        /></a>
        <a href="<?=$sdk->infoGnrl->acf->redes_sociales->tiktok?>"
          ><img src="icons/tiktok.svg" alt="tiktok"
        /></a>
      </div>
      <a href="<?=$sdk->infoGnrl->acf->redes_sociales->whatsapp?>"
        ><img src="icons/whatsapp.svg" alt="whatsapp"
      /></a>
    </div>
  </div>
</header>
