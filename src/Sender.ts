import { close } from "fs";
import { start } from "repl";
import { create, Whatsapp, Message, SocketState } from "venom-bot";


class Sender{

    private client : Whatsapp;


    constructor(){

        this.initialize()

}

async sendText2(to:string,body: string){
    await this.client.sendText(to,body).then((result) => {
          console.log('Result: ', result); //return object success
        })
}

private initialize(){

    const qr = (base64Qrimg : string) =>{
        
    }
    
    const status = (statusSession : string) =>{
        
    }

    const start = (client : Whatsapp) =>{
        this.client = client

    }

    create('ws-sender-dev', qr , status)
    .then((client)=>start(client))
        .catch((error)=>console.error(error))
}

}

export default Sender