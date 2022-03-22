import { close } from "fs";
import { start } from "repl";
import { create, Whatsapp, Message, SocketState } from "venom-bot";

export type QrCode = {
    base64Qr : string;
}
class Sender{

    private client : Whatsapp;
    private Connected : boolean;
    private qr : QrCode;

    get isConnected():boolean{
        return this.Connected;
    }

    get qrCode():QrCode{
        return this.qr;
    }

    constructor(){

        this.initialize()

}

async sendText2(to:string,body: string){
    await this.client.sendText(to,body).then((result) => {
          console.log('Result: ', result); //return object success
        })
}

private initialize(){

    const qr = (base64Qr : string) =>{
        this.qr = {base64Qr}
    }
    
    const status = (statusSession : string) =>{

        this.Connected = ["isLogged", "qrReadSuccess","chatsAvailable"].includes(statusSession)
        
    }

    const start = (client : Whatsapp) =>{
        this.client = client;
        client.onStateChange((state)=>{
            this.Connected = state === SocketState.CONNECTED
        })
    }

    create('ws-sender-dev', qr , status)
    .then((client)=>start(client))
        .catch((error)=>console.error(error))
}

}

export default Sender