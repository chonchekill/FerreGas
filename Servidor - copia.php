<head>

    <title>FerreGas</title>

    <body>
    
        <h1>Registro de servicio</h1>`

        <?php 
            $servicio = $_POST["selecionServicio"]??'';
            $tipoDocumento = $_POST["selectDocument"]??'';
            $documento = $_POST["document"]??'';
            $nombreUsuario = $_POST["nombreUsuario"]??'';
            $fecha= $_POST["fechaServicio"]??'';
        ?>

        <form action="">
             <!-- Radio -->
            <input type="radio" id="Mantenimiento" name="selecionServicio" value="Mantenimiento">
            <label for="Mantenimiento">Mantenimiento</label><br>
            <input type="radio" id="Instalación" name="selecionServicio" value="Instalacion">
            <label for="Instalacion">Instalación</label><br>
            <input type="radio" id="Reparación" name="selecionServicio" value="Reparacion">
            <label for="Reparacion">Reparación</label><br><br>

            Tipo de documento: <select name="selectDocument" id="document">

            Documento: <input type="number" name="document"><br><br>
                <option value="cedulaCuidadania">Cédula de cuidadanía</option>
                <option value="cedulaExtranjera">Cédula extranjera</option>
                <option value="nit">Nit</option>
            </select> <br><br>
            
            Documento: <input type="number" name="document"><br><br>
            
            Nombre completo:<input type="text" name ="nombreUsuario"> <br> <br>

            Fecha: <input type="date" name="fechaServicio"> <br> <br>

            <input type="submit" value="Guardar">

            

        </form>
        <p><?php echo $nombreUsuario;?>, Se a separado su <?php echo $servicio;?> para la fecha <?php echo $fecha;?>  </p>
        
        <?php 
        $file = fopen("./baseDeDatos.txt","a");
        fwrite($file,"$servicio.\t$tipoDocumento\t$documento\t$nombreUsuario\t$fecha\n");
        ?>
    </body>

</head>