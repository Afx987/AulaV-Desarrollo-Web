# AulaV-Desarrollo-Web


Proyecto Front End AulaV para desarrollo web, se realizó un acoplamiento entre 2 carpetas tanto para el back-end y front-end 

Version final estable subida a 29/06/2018 , para hacer funcionar hay que seguir las siguientes instrucciones:

1) Para crear un curso hay que crear un profesor 

![entidad relacion aulav](https://user-images.githubusercontent.com/22847884/42107980-3b10e026-7ba7-11e8-8827-5506a3d2410f.png)

2) Es necesario guiarse con el modelo ER en la imagen debido a que se generan las relaciones con las rutas correspondientes en los controladores del back-end , esta en funcionamiento los videos , crear profesor , crear curso y crear clase.

3) Ejecutar la migracion de base de datos sino tirará error (desde la carpeta BACKEND):

```
rake db:migrate
```
4) Ejecutar la instalacion de los plugins de youtube factory:

```
bower install --save angular-youtube-api-factory
npm install --save angular-youtube-api-factory

```

5) Verificar la instalacion de bower y npm en los directorios y hacerlo funcionar

Somos Hernán Herrera - Andres Pizarro
