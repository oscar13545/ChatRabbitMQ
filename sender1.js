const amqp = require('amqplib/callback_api');
const readline = require('readline-sync');

// amqp://<user>?:<password>?@?<host>:<port>?
// Local
const uri = 'amqp://guest:guest@localhost:32773';
// AWS 
//const uri ="amqps://oscar:abcdefg123456@b-a73d739b-641e-4a6a-82f9-c0ad212bd8eb.mq.us-east-1.amazonaws.com:5671";

console.log("---------------------------");
console.log("Eres el mensajero 1");
console.log("---------------------------");
console.log("Para terminar el programa enviar la cadena vacía");
console.log("");
(async () => {
    while (true) {
      let message = readline.question('Message: ');
      if (message.length === 0) {
        break;
      }
      await sendMessage(message);
    }
  
    console.log('Exiting program.');
  })();
 
function sendMessage(message) {
    return new Promise((resolve, reject) => {
      amqp.connect(uri, (err, con) => {
        if (err) {
          reject(err);
        }
  
        con.createChannel((err1, channel) => {
          if (err1) {
            reject(err1);
          }
          const queue = 'mensaje2';
  
          channel.assertQueue(queue, {
            durable: false
          });
  
          channel.sendToQueue(queue, Buffer.from(message));
          console.log('Message sent');
  
          setTimeout(() => {
            con.close();
            resolve();
          }, 500);
        });
      });
    });
  }
  
  
  
  
  
  
  






  