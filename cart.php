<?php $classBody = "cart"; include 'includes/head.php'; ?>
<?php include 'includes/header.php'; ?> 
    <main>
        <small>Carrito</small>
        <div class="container">
            <form action="/<?=$lang?>/s/leads/" id="cartInfo" method="POST">
                <span>
                    <label for="name">Nombre</label>
                    <input type="text" name="name" id="name" placeholder="Tu nombre">
                </span>
                <span>
                    <label for="email">Correo Electrónico</label>
                    <input type="email" name="email" id="email" placeholder="tunombre@example.com">
                </span>
                <span>
                    <label for="phone">Número telefónico</label>
                    <input type="tel" name="phone" id="phone" placeholder="1234567890">
                </span>
                <span class="rodaje">
                    <label for="">Fechas de Rodaje</label>
                    <div class="date_picker"><input type="text" name="datepicker" id="datepicker"></div>
                    <div class="date_picker"><input type="text" name="datepicker2" id="datepicker2"></div>
                </span>
                <input type="hidden" name="content" id="content" value="">
                <input type="hidden" name="equipos" id="equipos">
                <input type="hidden" name="idioma" id="idioma" value="<?=$lang?>">
                <button class="listado uppercase btn" type="buton" onclick="sendList()">Recibir listado</button>
                <button class="listado uppercase btn go-cotizacion" type="submit">Solicitar cotizacion</button>
            </form>
            <div class="cartItems">
                <h2 class="uppercase">Tu Cotización</h2>
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