# Chat RabbitMQ con AWS
Chat para dos personas que utiliza RabbitMQ en AWS para no perder paquetes, la aplicación se divide en mensajero 1 y mensajero 2

Primero instalar todos los paquetes a usar

```
$ npm install
```
Luego en la consola de Amazon crear un servidor RabbitMQ en la parte de Amazon MQ, y con el link generado sustituirlo en las aplicaciones de receiver1, receiver2, sender1, sender2, en la parte de URI, para hacer que la aplicación use el servidor Rabbit de Amazon Web Services
***
### El mensajero 1 
Debe de correr estos comandos en dos terminales distintas

Este comando es para la aplicación de mandar mensajes
```
$ node sender1.js
```
![Sender1](./image/Sender1.png)

Este comando sirve para ver los mensajes recibidos:

```
$ node receiver1.js
```
![Receiver1](./image/Receiver1.png)

***
### El mensajero 2 
Debe de correr estos comandos en dos terminales distintas

Este comando es para la aplicación de mandar mensajes
```
$ node sender2.js
```
![Sender2](./image/Sender2.png)

Este comando sirve para ver los mensajes recibidos:

```
$ node receiver2.js
```
![Receiver2](./image/Receiver2.png)



***
## Funcionamiento

Esta aplicación lo que hace es que la parte sender tiene un while el cual dentro de ella pide al cliente introducir la cadena que quiere enviar, y la forma de romber el while y hacer que termine la aplicación es mandando una cadena vacía, pero si la cadena no es vacía llama a una función llamada sendMessage que se espera que termine de la función. Esta función lo que hace es utilizar la API de Rabbit para enviar el mensaje, y utiliza una promesa para poder usar las funciones async, en la cual mediante reject y resolve ayuda a saber si la acción fue exitosa o no.

La aplicación receiver lo que hace es simplemente emplear la API de RabbitMQ para recibir los mensajes y así de esa manera quitarlos de la cola en la que están.
