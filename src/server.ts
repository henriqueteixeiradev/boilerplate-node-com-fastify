import fastify from "fastify";
const port = 3333;

const app = fastify();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen({ port }, () => {
  console.log(`Server is running on port ${port}`);
});
