# node-mongo-big-file-exercise

Hola! Este es un ejercicio para poner a prueba tus conocimientos de NodeJS y MongoDB. El foco está en el uso de memoria RAM: el objetivo es subir un archivo de ~80mb separado por comas, evitando tener que cargar en memoria todo el archivo.

El archivo podés descargarlo de este link:
https://drive.google.com/file/d/1tg8dWr4RD2CeKjEdlZdTT8kLDzfITv_S/view?usp=sharing
(está zippeado para que lo descargues rápido, descomprimilo manualmente)

Para simplificarlo, hemos creado este repo starter que se conecta a la base de datos, crea el modelo y expone el endpoint `[POST] /upload` donde tenés que subir el archivo (podés probarlo con Postman).

## Consideraciones

- Hace un fork de este repo para comenzar, y cuando tengas la solución compartí tu repositorio con quien te solicitó este ejercicio.
- Recordá correr `npm install` o `yarn install` para instalar las dependencias
- Podés usar hasta 1 librería de tu preferencia además de las incluidas.
- Prestá atencion a la prolijidad del código (indentacion y legibilidad), y la performance (tiempo de procesado y memoria utilizada).
- En el endpoint `[GET] /records` podés ver los 10 últimos registros que se procesaron.
- El archivo subido se guarda en el directorio `_temp`, recordá eliminarlo luego de utilizarlo.
- Modificá el archivo `.env` para cambiar el puerto y la conexión a la base de datos.

## Postman
En el directorio `postman` del repo, vas a encontrar los dos requests para que puedas importarlos en Postman.