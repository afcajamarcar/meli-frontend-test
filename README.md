# Test práctico frontend - Mercado Libre
Esta es mi solución al test práctico para aspirantes al área de front-end de Mercado Libre.

## Tecnologías usadas ##
### Backend ###
* NodeJS - latest
* Express - 4.17.1
* Docker
### Frontend ###
* React - 16.13.1
* [create-react-app](https://github.com/facebook/create-react-app)
* HTML
* CSS (Sass con [node-sass](https://www.npmjs.com/package/node-sass) - 4.14.1)

_Tanto Frontend como Backend están incluídos en este mismo repositorio_.
## Ejecución ##
_Para facilitar la ejecución de la prueba incluí en la raíz del repositorio un script **start_backend.sh** el cual hace la construcción y levantamiento de un contenedor para el backend_.
#### Pasos a seguir ####
1. Ejecutar el script **start_backend.sh** hasta que el contenedor esté desplegado y el backend esté corriendo en el puerto _5000_.
    1. Alternativamente se puede iniciar el backend navegando hasta la carpeta **backend** y ejecutando los comandos **npm i** y **npm start** respectivamente.
2. Navegar a la carpeta **frontend** y ejecutar los comandos **yarn install** y **yarn start** respectivamente.
    1. El frontend sirve sobre el puerto _3000_.

## Vista Previa ##
![frontend-afcajamarcar-preview](https://i.ibb.co/rcvCzgY/Screenshot-20200910-073654.png)
