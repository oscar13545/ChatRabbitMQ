# ChatRabbitMQ
Chat para dos personas que utiliza RabbitMQ para no perder paquetes, la aplicacion se divide en mensajero 1 y mensajero 2

Primero instalar todos los paquetes a usar

```
$ npm install
```
###
El mensajero 1 debe de correr estos comandos en dos terminales distintas

Este commando es para la apliacion de mandar mensajes
```
$ node sender1.js
```
Este commando sirve para ver los mensajes recibidos:

```
$ node receiver1.js
```
Las imagenes de ejemplo:

###
El mensajero 2 debe de correr estos comandos en dos terminales distintas

Este commando es para la apliacion de mandar mensajes
```
$ node sender2.js
```
Este commando sirve para ver los mensajes recibidos:

```
$ node receiver2.js
```
Las imagenes de ejemplo:


###
Funcionamiento

Esta apliacion lo que hace es que la parte sender tiene un while el cual dentro de ella pide al cliente introducir la cadena que quiere enviar, y la forma de romber el while y hacer que termine la apliacion es mandando un cadena vacia, pero si la cadena no es vacia llama a una funcion llamada sendMessage que se espera que termine de la funcion, esta funcion lo que hace es esperar utilizar la api de Rabbit para enviar el mensaje, y utiliza una promesa para poder usar las funciones async, en la cual mediante reject y resolve ayuda a saber si la funcion fue exitosa o no.

La aplicación receiver lo que hace es simplemente usar la api de RabbitMQ para recibir los mensajes y asi de esa manera quitarlos de la cola en la que estan.
