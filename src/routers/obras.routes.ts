import express, { Request, Response, Router } from 'express';
import Obra from "../../model/obras"
interface IRequest extends Request {
  body: never;
  params: any;
}
const route = express.Router();

route.get('/obras', async (req:IRequest, res:Response) => {
  await Obra.find({}).then((obras) => {
      }).catch((err) => {;
  });
});

route.post("/obras", async (req:IRequest, res:Response) => {      
      const obra = req.body;
      const cadastro = await new Obra(obra).save();
     
  }
)

route.put("/obras/:id", async (req:IRequest, res:Response) => {
  const id = req.params.id;
  await Obra.updateOne({ _id:id}, req.body)
})


route.delete("/obras/:id", async (req:IRequest, res:Response) => {
      await Obra.deleteOne({_id:req.params.id})
});

export default route;