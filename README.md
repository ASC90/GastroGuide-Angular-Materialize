## GastroGuide-Angular-Materialize

Gastro Guide es una web app de búsqueda de restaurantes donde el usuario podrá encontrar restaurantes cerca de su ciudad, entre otros parámetros de búsqueda como tipo de cocina o valoración global de los usuarios sobre el restaurante. A parte de ofrecer un servicio de alta de restaurantes para que los propios propietarios de los restaurantes publiquen la información de su local, también podrán publicar otros contenidos como recetas, promociones, menú, etc.

Gastro Guide en su estado actual es la última iteración del proyecto grupal e implementa las siguientes 3 user stories:
1.	Como restaurante quero publicar mi información para darme a conocer
2.	Como cliente me gustaría poder localizar los restaurantes cercanos a mí, para conocer los restaurantes de mi zona
3.	Como cliente me gustaría poder filtrar mis búsquedas, para especificar mis prioridades

La app tiene el formato de una SPA realizada con Angular 2+ que consume RESTful APIs creados por el propio equipo implementando Node.js como servidor y MongoDB como la base de dados.

## Mongo db
Instalar mongodb
Crear carpeta c:\mongodb\data
Poner en la consola desde la carpeta bin:
mongod --dbpath "c:\mongodb\data" --nojournal
En otra consola ejecutar desde bin mongo.exe para el cliente
