import Hapi from "hapi";
import "babel-polyfill";
import mongoose from "mongoose";

const server = Hapi.server({
  host: "localhost",
  port: 5000
});

const database = "mongodb://127.0.0.1:27017";

mongoose.connect(database, {
  connectTimeoutMS: 1000
});

const db = mongoose.connection;
db
  .on("error", console.error.bind(console, "connection error:"))
  .once("open", () => {
    console.log("Mongo is live!");
  });

server.route({
  method: "GET",
  path: "/",
  handler: () => {
    return "Hello there";
  }
});

async function start() {
  try {
    await server.start();
  } catch (error) {
    console.error(error);
  }

  console.log("Server started");
}

start();
