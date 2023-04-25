const amqp = require('amqplib/callback_api');
// Local
//const uri = "amqp://guest:guest@localhost:32773";
// AWS
const uri =  "<AWS_link>";

console.log("-----> Conversacion con Mensajero 2 <-----");
amqp.connect(uri, (err, con)=>{
    if(err){
        throw err;
    }

    con.createChannel((err1, channel)=>{
        if(err1){
            throw err1;
        }
        let queue = 'mensaje1';

        channel.assertQueue(queue, {
            durable: false
        });

        channel.consume(queue, (message)=>{
            console.log(`Mensajero 2: ${message.content.toString()}`);
        }, { noAck: true});
    });

});
