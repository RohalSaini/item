import { MongoClient } from "mongodb";
import { async } from "regenerator-runtime";

const uri = "mongodb+srv://rohal:rohal@cluster0.2l7kq.mongodb.net/meetups?retryWrites=true&w=majority";

export  default async function hanlder(req,res) {
    if(req.method === 'POST') {
        const data = req.body;
        //const { title,image,address,description} = data;
        console.log(data)
        const client = await MongoClient.connect(uri);
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data)
        client.close();

        res.status(201).json({
            message: 'Meet up inserted',
            data: result
        })
    }
}