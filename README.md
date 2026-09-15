# Portal de donaciones — acceso mediante enlace

Esta versión está preparada para GitHub Pages.

## Enlace de acceso

Usa un enlace con el formato:

https://DOMINIO/?access=CODIGO

Ejemplo:

https://DOMINIO/?access=ABC123XYZ

Cada persona debe recibir un código diferente.

## Comportamiento

- Sin código: no se muestra el portal.
- Primera apertura del código en un navegador: se muestra el portal.
- Segunda apertura del mismo código en ese navegador: aparece el bloqueo.
- El código se elimina de la barra del navegador después de abrir.

## Limitación de GitHub Pages

Esta versión utiliza localStorage porque GitHub Pages es estático. Por ello no puede garantizar un bloqueo frente a incógnito, otro navegador, otro dispositivo o borrado de los datos del sitio.

Para que el mismo enlace quede bloqueado en cualquier navegador/dispositivo se necesita un servicio de servidor.

## Archivos

- index.html
- style.css
- assets/logo-lacardio.png
