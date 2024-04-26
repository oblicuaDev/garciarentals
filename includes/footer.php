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
            <?php if($sdk->infoGnrl->acf->redes_sociales->linkedin){ ?>
                <a target="_blank" href="<?=$sdk->infoGnrl->acf->redes_sociales->linkedin?>"><img src="icons/linkedin.svg" alt="linkedin"></a>
            <?php } ?>
            <?php if($sdk->infoGnrl->acf->redes_sociales->instagram){ ?>
                <a target="_blank" href="<?=$sdk->infoGnrl->acf->redes_sociales->instagram?>"><img src="icons/instagram.svg" alt="instagram"></a>
            <?php } ?>
            <?php if($sdk->infoGnrl->acf->redes_sociales->tiktok){ ?>
                <a target="_blank" href="<?=$sdk->infoGnrl->acf->redes_sociales->tiktok?>"><img src="icons/tiktok.svg" alt="tiktok"></a>
            <?php } ?>
            <?php if($sdk->infoGnrl->acf->redes_sociales->whatsapp){ ?>
                <a target="_blank" href="<?=$sdk->infoGnrl->acf->redes_sociales->whatsapp?>"><img src="icons/whatsapp.svg" alt="whatsapp"></a>
            <?php } ?>
        </div>
    </footer>
    <div class="cursor"></div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.7/dat.gui.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script src="js/jquery.js"></script>
<script src="js/jquery.validate.min.js"></script>
<script src="js/jquery.form.js"></script>
<script src="js/additional-methods.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="js/datepicker.js"></script>
<script src="js/hammer.min.js"></script>
<script src="js/anime.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/intl-tel-input@20.0.5/build/js/intlTelInput.min.js"></script>
<script>
  const input = document.querySelector("#phone");
  if(input){
      window.intlTelInput(input, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@20.0.5/build/js/utils.js",
        i18n: {
            selectedCountryAriaLabel: "",
            noCountrySelected: "Selecciona un país",
            countryListAriaLabel: "",
            searchPlaceholder: "Buscar...",
            zeroSearchResults: "No se encontraron resultados",
            oneSearchResult: "1 resultado",
            multipleSearchResults: "${count} Resultados",
        },
        initialCountry:'co',
        showSelectedDialCode: true,
      });
  }
</script>
<script src="js/main.js?v=<?=time()?>"></script>

</html>