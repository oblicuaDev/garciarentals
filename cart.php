<?php $classBody = "cart"; include 'includes/head.php'; ?>
<?php include 'includes/header.php'; ?> 
    <main>
        <small><?=$sdk->palabras[20]?></small>
        <div class="container">
            <form action="/<?=$lang?>/s/leads/" id="cartInfo" method="POST" autocomplete="off">
                <span>
                    <label for="name"><?=$sdk->palabras[21]?></label>
                    <input type="text" name="name" id="name" placeholder="<?=$sdk->palabras[22]?>">
                </span>
                <span>
                    <label for="email"><?=$sdk->palabras[23]?></label>
                    <input type="email" name="email" id="email" placeholder="<?=$sdk->palabras[24]?>">
                </span>
                <span>
                    <label for="phone"><?=$sdk->palabras[25]?></label>
                    <input type="tel" name="phone" id="phone" placeholder="1234567890">
                </span>
                <span class="rodaje">
                    <label for=""><?=$sdk->palabras[26]?></label>
                    <span>
                        <label for="datepicker">Desde:</label>
                        <div class="date_picker"><input type="text" readonly name="datepicker" id="datepicker"><span class="arrow-down"></span></div>
                    </span>
                    <span>
                        <label for="datepickerend">Hasta:</label>
                        <div class="date_picker"><input type="text" readonly name="datepickerend" id="datepickerend"><span class="arrow-down"></span></div>

                    </span>
                </span>
                <input type="hidden" name="content" id="content" value="">
                <input type="hidden" name="equipos" id="equipos">
                <input type="hidden" name="idioma" id="idioma" value="<?=$lang?>">
                <button class="listado uppercase btn" type="submit" onclick="sendList()"><?=$sdk->palabras[27]?></button>
                <button class="listado uppercase btn go-cotizacion" type="submit"><?=$sdk->palabras[28]?></button>
            </form>
            <div class="cartItems">
                <h2 class="uppercase"><?=$sdk->palabras[29]?></h2>
                <ul>
                </ul>
            </div>
        </div>
    </main>

    <dialog id="boxSolicitud">
        <div class="overlay">
            <div class="content">
                <h2>¡Solicitud enviada!</h2>
                <p>Nuestro equipo se encuentra revisando tu solicitud detalladamente para proporcionarte la mejor cotización posible.</p>
                <button type="button" onclick="clearAll()" class="uppercase btn">Continuar</button>
            </div>
        </div>
</dialog>

<?php include 'includes/footer.php'; ?>