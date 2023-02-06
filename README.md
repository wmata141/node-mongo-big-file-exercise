# node-mongo-big-file-exercise

Hola! Este es un ejercicio para poner a prueba tus conocimientos de NodeJS y MongoDB. El foco está en el uso de memoria RAM: el objetivo es subir un archivo de 200mb separado por comas, evitando tener que cargar en memoria todo el archivo.

El archivo podés descargarlo de este link:


Para simplificarlo, hemos creado este repo starter que se conecta a la base de datos, crea el modelo y expone el endpoint /upload [POST] donde tenés que subir el archivo (podés probarlo con Postman).

## Consideraciones

- Podés usar hasta 1 librería de tu preferencia además de las incluidas.
- Hace un fork de este repo para comenzar, y cuando tengas la solución compartí tu repositorio con quien te solicitó este ejercicio.
- Prestá atencion a la prolijidad del código (indentacion y legibilidad), y la performance (tiempo de procesado y memoria utilizada).
- En el endpoint `[GET] /records` podés ver los 10 últimos registros que se procesaron.
- Modificá el archivo `.env` para cambiar el puerto y la conexión a la base de datos.
