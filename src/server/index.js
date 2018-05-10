import Hapi from "hapi";
import Inert from "inert";
import Vision from "vision";
import HapiSwagger from "hapi-swagger";
import "babel-polyfill";
import mongoose from "mongoose";

import routes from "../server/routes";
(async () => {
  const server = await Hapi.server({
    host: "localhost",
    port: 5000
  });

  const database = "mongodb://127.0.0.1:27017";

  mongoose.connect(database, { connectTimeoutMS: 1000 });

  const SwaggerOptions = {
    info: {
      title: "QnA API Documentation",
      version: "1.0"
    }
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: SwaggerOptions
    }
  ]);

  server.route(routes);

  try {
    await server.start();
    const db = await mongoose.connection;
    db
      .on("error", console.error.bind(console, "connection error:"))
      .once("open", () => {
        console.log("Mongo is live!");
      });
    console.log("Server running at:", server.info.uri);
  } catch (err) {
    console.log(err);
  }
})();
