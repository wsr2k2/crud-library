import mongoose from "mongoose"

async function Conn(){
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.5ce8b.mongodb.net/test"}
    }).then(() => {
        console.log("MongoDB está conectado")
    }).catch((err) => {
        console.error(err);
    })
}
module.exports = Conn;
