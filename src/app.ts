import Sender from "./Sender"

import express, { Response , Request} from "express"

const sender = new Sender();

const app = express(); //inicia o express
const port = 3000;// porta do serviço

//busca os parametros do post com json

app.use(express.json());
app.use(express.urlencoded({extended : false}));

//mostra o tempo da aplicação no console
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});


app.get('/status',(req : Request, resp : Response)=>{

    
})


app.post('/mensagem',async(req : Request, resp : Response)=>{

    const {number,message} = req.body;
    try{

    await sender.sendText2(number,message)
    return resp.status(200).json({status: "Enviado Com sucesso"})

    }catch (error){
        console.error("error :",error)  
        resp.status(500).json({status: "error",menssage:error})  
    }

    
})




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
  
  