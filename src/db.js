import {MongoClient} from "mongodb";
import {ObjectId} from "mongodb";
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);
const db = client.db('ConcertTicket');

export { client, db, ObjectId };
