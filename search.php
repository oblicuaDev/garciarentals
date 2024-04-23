<?php $classBody = "list-search"; include 'includes/head.php'; ?>
<?php include 'includes/header.php'; ?>
<?php $searchRes = $sdk->search($search); ?>
<main class="container">
  <?php if(count($searchRes) == 0){ ?>
    <div class="noresults">
      <h2><?=$sdk->palabras[30]?> <?=$search?></h2>
    </div>
  <?php }else{ ?>
  <small>Resultados para <?=$search?></small>
  <ul>
    <?php 
      for ($i=0; $i < count($searchRes); $i++) { 
        $res = $searchRes[$i];
    ?>
        <li>
          <a href="/<?=$lang?>/equipos/all/0/<?=implode('-', $res->categories)?>/<?=$sdk->get_alias($res->title->rendered)?>-<?=$res->id?>"
            ><div class="image">
              <img
                src="<?=isset($res->acf->foto_del_equipo[0]) ? $sdk->replaceUrl($res->acf->foto_del_equipo[0]): 'https://placehold.co/600x400?text=Equipos'?>"
                alt="1"
                class="front"
              /><img
                class="hover"
                src="<?=isset($res->acf->foto_del_equipo[1]) ? $sdk->replaceUrl($res->acf->foto_del_equipo[1]) :'https://placehold.co/600x400?text=EquiposHoverImage'?>"
                alt="1"
              />
            </div>
            <p><?=$res->title->rendered?></p></a
          ><button
            class="btn btn-add"
            type="button"
            data-image="<?=isset($res->acf->foto_del_equipo[0]) ? $sdk->replaceUrl($res->acf->foto_del_equipo[0]): 'https://placehold.co/600x400?text=Equipos'?>"
            data-id="900"
            data-title="Canon C200 Camera package"
          >
            <?=$sdk->palabras[6]?>
          </button>
        </li>
    <?php } ?>
  </ul>
  <?php } ?>
</main>
<?php include 'includes/footer.php'; ?>
<script>
  addClickAddBtn();
</script>
