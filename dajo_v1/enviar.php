<?php
	$destino = "diegorazuri@plaqart.com";
	$desde	 = "From:". "FormularioWeb";
	$nombre	 = $_POST['nombre'];
	$mensaje = $_POST['mensaje']."  -  ";
	$mensaje .= "Correo: ".$_POST['correo']."  -  ";

	if(mail($destino, $nombre, $mensaje, $desde)){
		echo("1");
	}else{
		echo("0");
	}
	
?>

