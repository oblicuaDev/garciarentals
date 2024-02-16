<?php $classBody = "intern"; include 'includes/head.php'; ?>
<?php $equipo = $sdk->gEquipo($_GET["idEquipo"]);
?>    
<?php include 'includes/header.php'; ?>    
<script>
    let categoryIntern = "<?=$_GET["idCat"]?>";
    let nameCategoryIntern = "<?=$_GET["nameCat"]?>";
</script>
    <main data-name="ALEXA 35" data-id="2" class="container">
        <small><a href="/<?=$lang?>/equipos"><?=$equipo->acf->categoria[0]->name?></a> / <?=$equipo->title->rendered?></small>
        <section class="splide" aria-label="Splide Basic HTML Example">
            <div class="splide__track">
                <ul class="splide__list">
                    <?php 
                        for ($i=0; $i < count($equipo->acf->foto_del_equipo); $i++) { 
                        $fotoEquipo = $equipo->acf->foto_del_equipo[$i]; 
                    ?>
                    <li class="splide__slide"><img
                            src="<?= isset($fotoEquipo) ? $fotoEquipo : "https://placehold.co/600x400?text=Equipos"?>" alt="<?=$equipo->title->rendered?>">
                    </li>
                    <?php } ?>
                </ul>
            </div>
        </section>
        <h2><?=$equipo->title->rendered?></h2>
        <div class="desc">
            <img src="<?=isset($equipo->acf->foto_del_equipo[0]) ? $equipo->acf->foto_del_equipo[0] : "https://placehold.co/600x400?text=Equipos"?>" alt="image 1">
            <div class="text">
                <div class="info">
                <?=isset($equipo->content->rendered) && $equipo->content->rendered != ""  ? $equipo->content->rendered :"<p>Donec semper, magna eget iaculis malesuada, risus leo sodales purus, id tempus felis elit a sem. Aenean eros leo, euismod sit amet arcu vel, aliquet pulvinar ex. Pellentesque ut augue molestie, porttitor mauris nec, tincidunt eros. Donec pharetra dolor purus, non auctor ante bibendum ac. Sed suscipit turpis vitae arcu condimentum suscipit. Nulla quis diam rutrum, pulvinar lectus in, feugiat nisi. Maecenas consectetur enim et dolor feugiat consectetur. Ut feugiat lacinia tortor non mollis. Morbi fermentum vehicula odio, ut vulputate ligula faucibus non.</p>"?>
                </div>
                <button class="btn btn-add" type="button"><?=$sdk->palabras[6]?></button>
            </div>
        </div>
        <nav>
            <a href=""><span>ALEXA MINI F</span></a>
            <a href=""><span>ALEXA MINI F</span></a>
        </nav>
    </main>
<?php include 'includes/footer.php'; ?>
