<footer>
        <div class="left">
            <h6><?=$sdk->infoGnrl->acf->informacion_de_contacto_por_ciudad[0]->contacto->ciudad?></h6>
            <ul>
                <li>Móvil<?=$sdk->infoGnrl->acf->informacion_de_contacto_por_ciudad[0]->contacto->movil?></li>
                <li>Whatsapp<?=$sdk->infoGnrl->acf->informacion_de_contacto_por_ciudad[0]->contacto->whatsapp?></li>
                <li><?=$sdk->infoGnrl->acf->informacion_de_contacto_por_ciudad[0]->contacto->correo?></li>
            </ul>
        </div>
        <div class="right">
            <h6><?=$sdk->infoGnrl->acf->informacion_de_contacto_por_ciudad[1]->contacto->ciudad?></h6>
            <ul>
                <li>Móvil<?=$sdk->infoGnrl->acf->informacion_de_contacto_por_ciudad[1]->contacto->movil?></li>
                <li>Whatsapp<?=$sdk->infoGnrl->acf->informacion_de_contacto_por_ciudad[1]->contacto->whatsapp?></li>
                <li><?=$sdk->infoGnrl->acf->informacion_de_contacto_por_ciudad[1]->contacto->correo?></li>
            </ul>
        </div>
        <div class="social">
            <a target="_blank" href="<?=$sdk->infoGnrl->acf->redes_sociales->linkedin?>"><img src="icons/linkedin.svg" alt="linkedin"></a>
            <a target="_blank" href="<?=$sdk->infoGnrl->acf->redes_sociales->instagram?>"><img src="icons/instagram.svg" alt="instagram"></a>
            <a target="_blank" href="<?=$sdk->infoGnrl->acf->redes_sociales->tiktok?>"><img src="icons/tiktok.svg" alt="tiktok"></a>
            <a target="_blank" href="<?=$sdk->infoGnrl->acf->redes_sociales->whatsapp?>"><img src="icons/whatsapp.svg" alt="whatsapp"></a>
        </div>
    </footer>
</body>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script src="js/jquery.js"></script>
<script src="js/jquery.validate.min.js"></script>
<script src="js/jquery.form.js"></script>
<script src="js/additional-methods.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="js/datepicker.js"></script>
<script src="js/hammer.min.js"></script>
<script src="js/anime.min.js"></script>
<script src="js/main.js"></script>

</html>