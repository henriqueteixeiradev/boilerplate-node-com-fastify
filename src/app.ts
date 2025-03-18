import fastify from "fastify";

const app = fastify();

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello World");
});

export { app };
