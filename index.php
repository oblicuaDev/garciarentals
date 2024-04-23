<?php $classBody = "home"; include 'includes/head.php'; ?>
<?php include 'includes/header.php'; ?>
<video src="<?=$sdk->replaceUrl($sdk->infoGnrl->acf->video_para_el_home)?>" autoplay loop muted playsinline></video>
<main>
    <section class="container outside">
        <h2 data-aos-duration="800" data-aos="fade-down"><?=$sdk->homeInfo[$lang]->acf->titulo_acerca_de?></h2>
        <img src="img/outside.png" alt="outside">
        <div class="info">
           <?php 
           // Dividir el texto por saltos de línea
            $lineas = explode("\n", $sdk->homeInfo[$lang]->acf->texto_acerca_de);

            // Contar el número total de líneas
            $numLineas = count($lineas);

            // Imprimir las líneas resultantes
            foreach ($lineas as $indice => $linea) {
                echo $linea;

                // Imprimir un salto de línea si no es la última línea
                if ($indice < $numLineas - 2) {
                    echo '<div class="separator" data-aos-duration="800" data-aos="fade-up"></div>';
                }
            }
           ?>
            <a href="/<?=$lang?>/equipos?activeIndex=0" class="btn btn-more uppercase" data-aos-duration="800" data-aos="fade-up"><?=$sdk->homeInfo[$lang]->acf->texto_boton_acerca_de?></a>
        </div>
    </section>
    <div class="marquee">
        <h3><?=$sdk->homeInfo[$lang]->acf->texto_marquesina?></h3>
    </div>
    <section class="container services">
        <h4 data-aos-duration="800" data-aos="fade-right"><?=$sdk->homeInfo[$lang]->acf->titulo_nuestro_servicio?></h4>
        <ul data-aos-duration="800" data-aos="fade-left">
        <?php 
            // Replace "cotización" with "<small>cotización</small>" in the original string
            $string_with_small_cotizacion = str_replace("cotización", "<small>cotización</small>", $sdk->homeInfo[$lang]->acf->servicios_home);

            // Remove leading and trailing whitespace and split the string by line breaks
            $lines = explode("\n", trim($string_with_small_cotizacion));

            // Remove empty lines
            $lines = array_filter($lines);

            for ($i=0; $i < count($lines); $i++) { 
                $service = $lines[$i];
                $number = sprintf("%02d", $i + 1); // Adding 1 to start from 01
        ?>
            <li> <span><?=$number?></span><?=$service?></li>
        <?php } ?>
        </ul>
    </section>
    <section class="container circle-container">
        <h5 data-aos-duration="800" data-aos="fade-down"><?=$sdk->homeInfo[$lang]->acf->titulo_desafio?></h5>
        <div class="menu-container">
            <div class="circle" id="circle">
                <div class="slice" data-equipos="optica" onclick="window.location = '/<?=$lang?>/equipos?activeIndex=1'"></div>
                <div class="slice" data-equipos="videoAssist" onclick="window.location = '/<?=$lang?>/equipos?activeIndex=2'"></div>
                <div class="slice" data-equipos="DIT" onclick="window.location = '/<?=$lang?>/equipos?activeIndex=3'"></div>
                <div class="slice" data-equipos="Foquista" onclick="window.location = '/<?=$lang?>/equipos?activeIndex=4'"></div>
                <div class="slice" data-equipos="Transporte" onclick="window.location = '/<?=$lang?>/equipos?activeIndex=5'"></div>
                <div class="slice" data-equipos="Camara" onclick="window.location = '/<?=$lang?>/equipos?activeIndex=0'"></div>
            </div>

            <img src="img/circle.svg" alt="circle">
        </div>
        <div class="info" data-aos-duration="800" data-aos="fade-up">
            <?=$sdk->homeInfo[$lang]->acf->texto_desafio?>
            <a href="/<?=$lang?>/manifiesto" class="link"><?=$sdk->homeInfo[$lang]->acf->texto_boton_desafio?></a>
        </div>
    </section>
    <section class="container garciaFaq">
        <div></div>
        <article >
            <img src="img/Garcia.svg" alt="bigLogo">
            <p><?=$sdk->homeInfo[$lang]->acf->texto_preguntas_frecuentes?></p>
            <a target="_blank" href="<?=$sdk->infoGnrl->acf->redes_sociales->whatsapp?>" class="link faq"><?=$sdk->homeInfo[$lang]->acf->titulo_preguntas_frecuentes?></a>
        </article>
    </section>
</main>
<?php include 'includes/footer.php'; ?>
